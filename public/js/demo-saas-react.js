(function () {
  const { useState, useEffect, useMemo } = React;

  const fakeDelay = (data, t = 500) =>
    new Promise((resolve) => setTimeout(() => resolve(data), t));

  const metricsSeed = {
    mrr: 84250,
    activeUsers: 12840,
    churn: 2.8,
    ltv: 1260,
    trialToPaid: 31,
  };

  const lineSeries = Array.from({ length: 12 }).map((_, i) => ({
    label: `M${i + 1}`,
    value: 60000 + i * 2500 + Math.floor(Math.random() * 5000),
  }));

  const barPlans = [
    { label: "Basic", value: 18000 },
    { label: "Pro", value: 42000 },
    { label: "Enterprise", value: 24250 },
  ];

  const customers = Array.from({ length: 12 }).map((_, i) => ({
    name: `Cliente ${i + 1}`,
    plan: ["Basic", "Pro", "Enterprise"][i % 3],
    status: ["Ativo", "Trial", "Cancelado"][i % 3],
    mrr: 400 + i * 30,
    joined: `2024-${String(10 + i).padStart(2, "0")}-12`,
  }));

  const users = Array.from({ length: 25 }).map((_, i) => ({
    name: `Usuário ${i + 1}`,
    email: `usuario${i + 1}@empresa.com`,
    plan: ["Basic", "Pro", "Enterprise"][i % 3],
    status: ["ativo", "trial", "cancelado"][i % 3],
    createdAt: `2024-${String((i % 12) + 1).padStart(2, "0")}-0${(i % 9) + 1}`,
    lastAccess: `2025-0${(i % 9) + 1}-15`,
  }));

  const transactions = Array.from({ length: 15 }).map((_, i) => ({
    id: `TX-${4000 + i}`,
    user: `Cliente ${i + 1}`,
    plan: ["Basic", "Pro", "Enterprise"][i % 3],
    amount: 79 + i * 10,
    date: `2025-0${(i % 9) + 1}-18`,
    status: ["Pago", "Pendente", "Falhou"][i % 3],
  }));

  const events = Array.from({ length: 14 }).map((_, i) => ({
    type: ["login", "upgrade", "cancelamento"][i % 3],
    user: `Usuário ${i + 1}`,
    date: `2025-0${(i % 9) + 1}-10 12:${10 + i}`,
    detail: ["Login bem-sucedido", "Upgrade para Pro", "Cancelou assinatura"][i % 3],
  }));

  const faq = [
    { q: "Como o AnalyticsPro calcula o MRR?", a: "Somamos a receita recorrente mensal de todos os planos ativos descontando cupons e upgrades proporcionais." },
    { q: "Posso exportar dados?", a: "Sim, nos planos Pro e Enterprise é possível exportar CSV/JSON das principais métricas." },
    { q: "Como funciona o período de teste?", a: "O trial padrão é de 14 dias com todas as features liberadas." },
    { q: "Posso integrar com ferramentas externas?", a: "Sim, temos webhooks e integrações nativas com HubSpot, Salesforce e Segment (demo fake aqui)." },
    { q: "Os dados são em tempo real?", a: "Nesta demo simulamos atualização a cada 5 minutos com latência de poucos segundos." },
  ];

  const api = {
    login: ({ email, password }) => {
      if (!email || !password) return Promise.reject("Preencha email e senha.");
      return fakeDelay({ name: email.split("@")[0], email });
    },
    signup: ({ name, email, password, confirm }) => {
      if (!name || !email || !password || password !== confirm)
        return Promise.reject("Revise os campos e a confirmação de senha.");
      return fakeDelay({ name, email });
    },
    forgot: ({ email }) => {
      if (!email) return Promise.reject("Digite um email válido.");
      return fakeDelay(true);
    },
    metrics: () => fakeDelay(metricsSeed, 400),
    line: () => fakeDelay(lineSeries, 450),
    bars: () => fakeDelay(barPlans, 300),
    customers: () => fakeDelay(customers, 350),
    users: () => fakeDelay(users, 400),
    transactions: () => fakeDelay(transactions, 350),
    events: () => fakeDelay(events, 400),
  };

  const Card = ({ title, children }) => (
    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 shadow-lg shadow-slate-950/40">
      <div className="text-sm text-slate-400 mb-2">{title}</div>
      {children}
    </div>
  );

  const KPI = ({ label, value, desc }) => (
    <Card title={label}>
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="text-sm text-slate-400">{desc}</div>
    </Card>
  );

  const LineSpark = ({ data }) => {
    const max = Math.max(...data.map((d) => d.value));
    return (
      <div className="flex gap-1 items-end h-24">
        {data.map((d) => (
          <div
            key={d.label}
            title={`${d.label}: ${d.value}`}
            className="flex-1 bg-gradient-to-t from-brand-600 to-brand-500 rounded"
            style={{ height: `${(d.value / max) * 100}%` }}
          />
        ))}
      </div>
    );
  };

  const BarCompare = ({ data }) => {
    const max = Math.max(...data.map((d) => d.value));
    return (
      <div className="space-y-3">
        {data.map((d) => (
          <div key={d.label}>
            <div className="flex justify-between text-sm text-slate-300 mb-1">
              <span>{d.label}</span>
              <span>R$ {d.value.toLocaleString("pt-BR")}</span>
            </div>
            <div className="h-2 bg-slate-800 rounded">
              <div
                className="h-2 rounded bg-gradient-to-r from-brand-500 to-brand-600"
                style={{ width: `${(d.value / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  const Table = ({ columns, rows, empty }) => (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="text-slate-400 border-b border-slate-800">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className="py-2 pr-4">{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {rows.length === 0 && (
            <tr><td className="py-4 text-slate-500" colSpan={columns.length}>{empty || "Sem dados"}</td></tr>
          )}
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-slate-900/50">
              {columns.map((c) => (
                <td key={c.key} className="py-2 pr-4 text-slate-200">{row[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const Layout = ({ user, onLogout, page, setPage, children }) => (
    <div className="min-h-screen grid grid-cols-[240px_1fr] gap-4">
      <aside className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 hidden md:block">
        <div className="text-lg font-semibold mb-6">AnalyticsPro</div>
        {["Dashboard", "Usuários", "Planos", "Eventos", "Config", "Ajuda"].map((item) => (
          <button
            key={item}
            className={`w-full text-left px-3 py-2 rounded mb-1 ${page === item ? "bg-brand-600 text-white" : "hover:bg-slate-800"}`}
            onClick={() => setPage(item)}
          >
            {item}
          </button>
        ))}
      </aside>
      <main>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <div className="text-sm text-slate-400">Bem-vindo</div>
            <div className="text-lg font-semibold">{user?.name || "Visitante"}</div>
          </div>
          <div className="flex gap-2 items-center">
            <select className="bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm">
              {["Hoje", "7 dias", "30 dias", "12 meses", "Custom"].map((p) => <option key={p}>{p}</option>)}
            </select>
            <button className="bg-slate-900 border border-slate-800 rounded px-3 py-2 text-sm" onClick={onLogout}>Logout</button>
          </div>
        </div>
        {children}
      </main>
    </div>
  );

  const Auth = ({ onAuth }) => {
    const [mode, setMode] = useState("login");
    const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const submit = async (e) => {
      e.preventDefault();
      setError(""); setSuccess("");
      try {
        if (mode === "login") {
          const user = await api.login(form);
          localStorage.setItem("analyticspro:user", JSON.stringify(user));
          onAuth(user);
        } else if (mode === "signup") {
          const user = await api.signup({ ...form, confirm: form.confirm });
          localStorage.setItem("analyticspro:user", JSON.stringify(user));
          onAuth(user);
        } else {
          await api.forgot(form);
          setSuccess("Se este email existir, enviaremos instruções em alguns minutos.");
        }
      } catch (err) {
        setError(typeof err === "string" ? err : "Erro ao enviar formulário.");
      }
    };

    return (
      <div className="grid md:grid-cols-2 gap-6 min-h-[70vh]">
        <div className="bg-gradient-to-br from-brand-600/30 to-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-center">
          <p className="text-brand-500 font-semibold mb-2">AnalyticsPro</p>
          <h1 className="text-3xl font-bold mb-3">Transforme dados em decisões mais rápidas.</h1>
          <p className="text-slate-300">Painel SaaS com MRR, churn, LTV, retenção por cohort e tudo que sua equipe precisa para acompanhar crescimento.</p>
        </div>
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8">
          <div className="flex gap-2 mb-4">
            <button className={`px-3 py-2 rounded ${mode === "login" ? "bg-brand-600" : "bg-slate-800"}`} onClick={() => setMode("login")}>Entrar</button>
            <button className={`px-3 py-2 rounded ${mode === "signup" ? "bg-brand-600" : "bg-slate-800"}`} onClick={() => setMode("signup")}>Criar conta</button>
            <button className={`px-3 py-2 rounded ${mode === "forgot" ? "bg-brand-600" : "bg-slate-800"}`} onClick={() => setMode("forgot")}>Esqueci</button>
          </div>
          <form className="space-y-3" onSubmit={submit}>
            {mode === "signup" && (
              <input className="w-full bg-slate-800 rounded px-3 py-2" placeholder="Nome" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            )}
            <input className="w-full bg-slate-800 rounded px-3 py-2" type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            {mode !== "forgot" && (
              <input className="w-full bg-slate-800 rounded px-3 py-2" type="password" placeholder="Senha" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            )}
            {mode === "signup" && (
              <input className="w-full bg-slate-800 rounded px-3 py-2" type="password" placeholder="Confirmar senha" value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} />
            )}
            {error && <div className="text-sm text-rose-400">{error}</div>}
            {success && <div className="text-sm text-emerald-400">{success}</div>}
            <button className="w-full bg-brand-600 rounded py-2 font-semibold hover:bg-brand-500" type="submit">
              {mode === "login" ? "Entrar" : mode === "signup" ? "Criar conta" : "Recuperar senha"}
            </button>
          </form>
        </div>
      </div>
    );
  };

  const Dashboard = () => {
    const [metrics, setMetrics] = useState(null);
    const [line, setLine] = useState([]);
    const [bars, setBars] = useState([]);
    const [clients, setClients] = useState([]);

    useEffect(() => {
      api.metrics().then(setMetrics);
      api.line().then(setLine);
      api.bars().then(setBars);
      api.customers().then(setClients);
    }, []);

    return (
      <div className="space-y-4">
        <div className="grid md:grid-cols-4 gap-3">
          <KPI label="MRR" value={`R$ ${metrics?.mrr?.toLocaleString("pt-BR") || "..."}`} desc="Receita recorrente mensal" />
          <KPI label="Usuários ativos" value={metrics?.activeUsers || "..."} desc="Base ativa nos últimos 30 dias" />
          <KPI label="Churn" value={`${metrics?.churn || "..."}%`} desc="Cancelamentos no período" />
          <KPI label="LTV" value={`R$ ${metrics?.ltv || "..."}+`} desc="Valor vitalício médio" />
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          <Card title="Evolução MRR (últimos 12 meses)">
            {line.length ? <LineSpark data={line} /> : <div className="text-slate-500">Carregando...</div>}
          </Card>
          <Card title="Receita por plano">
            {bars.length ? <BarCompare data={bars} /> : <div className="text-slate-500">Carregando...</div>}
          </Card>
          <Card title="Trial para pago">
            <div className="text-3xl font-semibold text-white">{metrics?.trialToPaid || "--"}%</div>
            <div className="text-sm text-slate-400">Conversão média dos últimos 30 dias</div>
          </Card>
        </div>
        <Card title="Clientes recentes">
          <Table
            columns={[
              { key: "name", label: "Nome" },
              { key: "plan", label: "Plano" },
              { key: "status", label: "Status" },
              { key: "mrr", label: "MRR" },
              { key: "joined", label: "Ingresso" },
            ]}
            rows={clients.map((c) => ({ ...c, mrr: `R$ ${c.mrr}` }))}
            empty="Nenhum cliente recente."
          />
        </Card>
      </div>
    );
  };

  const UsersPage = () => {
    const [list, setList] = useState([]);
    const [term, setTerm] = useState("");
    const filtered = useMemo(
      () => list.filter((u) => `${u.name} ${u.email}`.toLowerCase().includes(term.toLowerCase())),
      [list, term]
    );
    useEffect(() => { api.users().then(setList); }, []);
    return (
      <div className="space-y-3">
        <div className="flex gap-3">
          <input className="bg-slate-900 border border-slate-800 rounded px-3 py-2" placeholder="Buscar usuário" value={term} onChange={(e) => setTerm(e.target.value)} />
          <select className="bg-slate-900 border border-slate-800 rounded px-3 py-2">
            <option>Todos os status</option>
            <option>ativo</option><option>trial</option><option>cancelado</option>
          </select>
        </div>
        <Card title="Usuários">
          <Table
            columns={[
              { key: "name", label: "Nome" },
              { key: "email", label: "Email" },
              { key: "plan", label: "Plano" },
              { key: "status", label: "Status" },
              { key: "createdAt", label: "Cadastro" },
            ]}
            rows={filtered}
            empty="Nenhum usuário encontrado."
          />
        </Card>
      </div>
    );
  };

  const PlansPage = () => {
    const [data, setData] = useState([]);
    const [txs, setTxs] = useState([]);
    useEffect(() => {
      api.bars().then(setData);
      api.transactions().then(setTxs);
    }, []);
    const total = data.reduce((acc, p) => acc + p.value, 0);
    return (
      <div className="space-y-3">
        <div className="grid md:grid-cols-3 gap-3">
          {data.map((p) => (
            <Card key={p.label} title={p.label}>
              <div className="text-2xl font-semibold text-white">R$ {p.value.toLocaleString("pt-BR")}</div>
              <div className="text-sm text-slate-400">Participação: {total ? Math.round((p.value / total) * 100) : 0}%</div>
            </Card>
          ))}
        </div>
        <Card title="Transações recentes">
          <Table
            columns={[
              { key: "id", label: "ID" },
              { key: "user", label: "Usuário" },
              { key: "plan", label: "Plano" },
              { key: "amount", label: "Valor" },
              { key: "date", label: "Data" },
              { key: "status", label: "Status" },
            ]}
            rows={txs.map((t) => ({ ...t, amount: `R$ ${t.amount}` }))}
            empty="Sem transações."
          />
        </Card>
      </div>
    );
  };

  const EventsPage = () => {
    const [list, setList] = useState([]);
    const [type, setType] = useState("all");
    useEffect(() => { api.events().then(setList); }, []);
    const filtered = list.filter((e) => type === "all" || e.type === type);
    return (
      <div className="space-y-3">
        <div className="flex gap-3">
          <select className="bg-slate-900 border border-slate-800 rounded px-3 py-2" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="all">Todos</option>
            <option value="login">Login</option>
            <option value="upgrade">Upgrade</option>
            <option value="cancelamento">Cancelamento</option>
          </select>
        </div>
        <Card title="Eventos & Logs">
          <Table
            columns={[
              { key: "type", label: "Tipo" },
              { key: "user", label: "Usuário" },
              { key: "date", label: "Data" },
              { key: "detail", label: "Detalhe" },
            ]}
            rows={filtered}
            empty="Nenhum evento nesse filtro."
          />
        </Card>
      </div>
    );
  };

  const SettingsPage = () => {
    const [saved, setSaved] = useState("");
    const save = (e) => {
      e.preventDefault();
      setSaved("Alterações salvas (demo).");
      setTimeout(() => setSaved(""), 2000);
    };
    return (
      <Card title="Configurações">
        <form className="space-y-3" onSubmit={save}>
          <div className="grid md:grid-cols-2 gap-3">
            <input className="bg-slate-900 border border-slate-800 rounded px-3 py-2" placeholder="Nome" defaultValue="Admin Demo" />
            <input className="bg-slate-900 border border-slate-800 rounded px-3 py-2" placeholder="Email" defaultValue="admin@demo.com" />
            <input className="bg-slate-900 border border-slate-800 rounded px-3 py-2" placeholder="Empresa" defaultValue="AnalyticsPro Ltda" />
            <input className="bg-slate-900 border border-slate-800 rounded px-3 py-2" placeholder="Site" defaultValue="https://analytics.pro" />
          </div>
          <div className="space-y-2">
            <div className="text-sm text-slate-300">Notificações</div>
            {["Email", "In-app", "Alertas críticos"].map((n) => (
              <label key={n} className="flex items-center gap-2 text-slate-300">
                <input type="checkbox" className="form-checkbox text-brand-500" defaultChecked />
                {n}
              </label>
            ))}
          </div>
          {saved && <div className="text-emerald-400 text-sm">{saved}</div>}
          <button className="bg-brand-600 rounded px-4 py-2 font-semibold hover:bg-brand-500">Salvar alterações</button>
        </form>
      </Card>
    );
  };

  const HelpPage = () => (
    <div className="grid md:grid-cols-2 gap-3">
      <Card title="FAQ">
        <div className="space-y-3">
          {faq.map((item, i) => (
            <details key={i} className="bg-slate-900/50 rounded p-3 border border-slate-800">
              <summary className="cursor-pointer text-slate-200">{item.q}</summary>
              <p className="text-slate-400 mt-2">{item.a}</p>
            </details>
          ))}
        </div>
      </Card>
      <Card title="Suporte">
        <p className="text-slate-300 mb-3">Fale com nosso time para dúvidas sobre integrações, planos ou métricas.</p>
        <button className="bg-brand-600 rounded px-4 py-2 font-semibold hover:bg-brand-500 w-full">Abrir contato</button>
      </Card>
    </div>
  );

  const App = () => {
    const [user, setUser] = useState(null);
    const [page, setPage] = useState("Dashboard");

    useEffect(() => {
      const saved = localStorage.getItem("analyticspro:user");
      if (saved) setUser(JSON.parse(saved));
    }, []);

    if (!user) return <Auth onAuth={setUser} />;

    return (
      <Layout user={user} onLogout={() => { localStorage.removeItem("analyticspro:user"); setUser(null); }} page={page} setPage={setPage}>
        {page === "Dashboard" && <Dashboard />}
        {page === "Usuários" && <UsersPage />}
        {page === "Planos" && <PlansPage />}
        {page === "Eventos" && <EventsPage />}
        {page === "Config" && <SettingsPage />}
        {page === "Ajuda" && <HelpPage />}
      </Layout>
    );
  };

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
})();
