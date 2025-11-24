const { useState } = React;

const chatbotResponses = [
  {
    keywords: ['restaurante', 'delivery', 'comida'],
    reply:
      'Entendi que voce opera um restaurante/delivery. Posso automatizar pedidos e reservas. Via n8n, disparo confirmacoes e atualizo planilhas ou CRM. O Grok (fake) entende intencao e personaliza cardapio e horarios.',
  },
  {
    keywords: ['clinica', 'consultas', 'paciente', 'saude'],
    reply:
      'Para clinicas, conecto agenda e WhatsApp: recebo consultas, envio pre-triagem e lembretes. n8n orquestra envios e o Grok (fake) ajusta respostas de acordo com especialidade e convenios.',
  },
  {
    keywords: ['ecommerce', 'loja', 'produto', 'carrinho'],
    reply:
      'Para e-commerce, ajudo no pre-venda e pos-venda: rastreio pedidos, sugiro produtos e registro leads. n8n simula integracoes com ERP/planilha. Grok (fake) entende intencao e responde com base em catalogo.',
  },
  {
    keywords: [],
    reply:
      'Sou o Flux IA Chatbot. Posso coletar leads, responder duvidas, enviar mensagens via n8n e usar Grok (fake) para entender contexto. Me diga seu tipo de negocio e automatizamos juntos.',
  },
];

const n8nLogsBase = {
  restaurante: [
    'Simulando webhook n8n: novo pedido recebido',
    'Atualizando planilha Google Sheets com item e horario',
    'Disparando confirmacao no WhatsApp do cliente',
    'Gerando alerta de fila para cozinha',
  ],
  clinica: [
    'Validando dados do paciente',
    'Agendando horario simulado no calendario',
    'Enviando lembrete de consulta via WhatsApp',
    'Criando registro no CRM (fake)',
  ],
  ecommerce: [
    'Buscando status do pedido em planilha',
    'Enviando atualizacao de rastreio',
    'Gerando cupom personalizado para retencao',
    'Registrando interacao em CRM (fake)',
  ],
  default: [
    'Capturando lead em formulario',
    'Enviando e-mail de boas-vindas (simulado)',
    'Criando tarefa no n8n: follow-up em 24h',
    'Log: fluxo executado com sucesso',
  ],
};

const grokInsights = {
  restaurante:
    'Usuario busca automatizar pedidos e reservas. Reforcar integracoes com entrega e cardapio dinamico.',
  clinica:
    'Usuario quer reduzir no-show e organizar agenda. Destaque lembretes e pre-triagem automatizada.',
  ecommerce:
    'Usuario quer suporte a clientes e rastreio. Sugerir ofertas personalizadas e notificacoes de status.',
  default: 'Usuario explorando o chatbot. Sugira casos de uso e ofereca um plano starter.',
};

function pickResponse(message) {
  const lower = message.toLowerCase();
  for (const entry of chatbotResponses) {
    if (entry.keywords.some((k) => lower.includes(k))) return entry.reply;
  }
  return chatbotResponses[chatbotResponses.length - 1].reply;
}

function pickLogs(message) {
  const lower = message.toLowerCase();
  if (lower.match(/restaurante|delivery|comida/)) return n8nLogsBase.restaurante;
  if (lower.match(/clinica|consulta|saude/)) return n8nLogsBase.clinica;
  if (lower.match(/ecommerce|loja|produto|carrinho/)) return n8nLogsBase.ecommerce;
  return n8nLogsBase.default;
}

function pickInsight(message) {
  const lower = message.toLowerCase();
  if (lower.match(/restaurante|delivery|comida/)) return grokInsights.restaurante;
  if (lower.match(/clinica|consulta|saude/)) return grokInsights.clinica;
  if (lower.match(/ecommerce|loja|produto|carrinho/)) return grokInsights.ecommerce;
  return grokInsights.default;
}

const Hero = ({ onCtaDemo, onCtaContact }) => (
  <section className="grid lg:grid-cols-2 gap-8 items-center mb-10">
    <div className="space-y-4">
      <p className="text-flux-500 font-semibold">Flux IA Chatbot</p>
      <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
        Automatize seu atendimento com IA em poucos cliques
      </h1>
      <p className="text-slate-300">
        Conecte site, WhatsApp e sistemas internos. Integracoes simuladas via n8n e Grok para respostas avancadas.
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={onCtaDemo}
          className="bg-flux-500 hover:bg-flux-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Testar Chatbot Agora
        </button>
        <button
          onClick={onCtaContact}
          className="border border-slate-700 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Falar com Especialista
        </button>
      </div>
      <div className="flex gap-3 text-sm text-slate-400">
        <span>Integracoes simuladas com n8n</span>
        <span>•</span>
        <span>Respostas Grok (fake)</span>
      </div>
    </div>
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 shadow-xl shadow-slate-950/40">
      <p className="text-slate-300 mb-2 font-semibold">Mini-flow visual</p>
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded bg-slate-800 text-flux-500">Cliente</span>
          <span className="text-slate-200">"Ola, quero automatizar meu atendimento"</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded bg-slate-800 text-emerald-400">Chatbot</span>
          <span className="text-slate-200">"Posso conectar n8n + Grok para entender pedidos e atualizar seu CRM"</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded bg-slate-800 text-amber-300">n8n (fake)</span>
          <span className="text-slate-200">"Disparando automacoes: e-mail, planilha, CRM"</span>
        </div>
      </div>
    </div>
  </section>
);

const Benefits = () => {
  const items = [
    { title: 'Atendimento 24/7', desc: 'Responde clientes mesmo fora do expediente.' },
    { title: 'Integracao n8n', desc: 'Orquestra fluxos com CRMs, planilhas e e-mail.' },
    { title: 'Grok (fake)', desc: 'Entende contexto e adapta respostas.' },
    { title: 'Vendas e produtividade', desc: 'Reduz tarefas manuais e converte mais leads.' },
  ];
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-white">Beneficios</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.title} className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
            <p className="text-white font-semibold mb-1">{item.title}</p>
            <p className="text-slate-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Steps = () => {
  const steps = [
    { title: 'Contato inicial', desc: 'Site ou WhatsApp coleta a intencao.' },
    { title: 'Chatbot entende', desc: 'Flux IA identifica intencao e contexto.' },
    { title: 'n8n orquestra', desc: 'Integra CRM, planilhas, e-mail (simulado).' },
    { title: 'Grok responde', desc: 'Respostas inteligentes e personalizadas (fake).' },
  ];
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-white">Como funciona</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <div key={s.title} className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
            <div className="text-flux-500 font-semibold mb-1">Passo {i + 1}</div>
            <p className="text-white font-semibold">{s.title}</p>
            <p className="text-slate-400 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const UseCases = () => {
  const cases = [
    {
      title: 'Restaurante & Delivery',
      flow: 'Cliente pede prato → chatbot confirma → n8n registra pedido → Grok ajusta resposta.',
    },
    {
      title: 'Clinicas',
      flow: 'Paciente agenda → chatbot verifica horario → n8n envia lembrete → Grok personaliza preparo.',
    },
    {
      title: 'E-commerce',
      flow: 'Cliente pergunta status → chatbot responde → n8n atualiza CRM → Grok sugere upsell.',
    },
    {
      title: 'Servicos',
      flow: 'Lead chega → chatbot coleta dados → n8n envia briefing → Grok monta resposta contextual.',
    },
  ];
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-white">Casos de uso</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {cases.map((c) => (
          <div key={c.title} className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
            <p className="text-white font-semibold mb-1">{c.title}</p>
            <p className="text-slate-400 text-sm">{c.flow}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Pricing = ({ onOpenModal }) => {
  const plans = [
    { name: 'Starter', price: 'R$ 199/mes', features: ['100 chats/mes', 'Integracao basica n8n', 'Suporte e-mail'] },
    { name: 'Pro', price: 'R$ 399/mes', popular: true, features: ['500 chats/mes', 'Fluxos n8n avancados', 'Modelos Grok (fake)'] },
    { name: 'Enterprise', price: 'Sob consulta', features: ['Ilimitado', 'Onboarding dedicado', 'SLA e integracoes custom'] },
  ];
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-white">Planos (fake)</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`bg-slate-900/60 border border-slate-800 rounded-xl p-4 ${p.popular ? 'ring-2 ring-flux-500' : ''}`}
          >
            {p.popular && <div className="text-xs text-flux-500 mb-1">Mais popular</div>}
            <p className="text-white font-semibold text-lg">{p.name}</p>
            <p className="text-flux-500 font-semibold mb-2">{p.price}</p>
            <ul className="text-slate-400 text-sm space-y-1 mb-3">
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <button
              onClick={() => onOpenModal(p.name)}
              className="bg-flux-500 hover:bg-flux-600 text-white w-full py-2 rounded-lg font-semibold"
            >
              Quero esse plano
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: 'Como integram com sistemas?', a: 'Usamos n8n (simulado) para webhooks, CRM, planilhas e e-mail. Sem backend real aqui.' },
    { q: 'É seguro?', a: 'Demo fake, mas seguimos boas praticas: nada de dados reais, tudo mockado no front.' },
    { q: 'Preço e implantação?', a: 'Planos fake acima; implantação simulada em 7 dias para demonstração.' },
    { q: 'Grok é usado de verdade?', a: 'Nesta demo não. Simulamos insights e respostas como se o Grok estivesse por trás.' },
  ];
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4 text-white">FAQ</h2>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
            <summary className="text-white font-semibold cursor-pointer">{f.q}</summary>
            <p className="text-slate-400 text-sm mt-2">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

const ContactForm = ({ onSubmitted }) => {
  const [form, setForm] = useState({ nome: '', email: '', whatsapp: '', tipo: 'Restaurante', mensagem: '' });
  const [status, setStatus] = useState('idle');
  const submit = (e) => {
    e.preventDefault();
    if (!form.nome || !form.email) return setStatus('erro');
    setStatus('loading');
    setTimeout(() => {
      setStatus('ok');
      onSubmitted(form);
    }, 1200);
  };
  return (
    <section className="mb-12" id="contato">
      <h2 className="text-2xl font-semibold mb-4 text-white">Falar com especialista</h2>
      <form onSubmit={submit} className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 grid md:grid-cols-2 gap-4">
        <input
          className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2"
          placeholder="Nome"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
        />
        <input
          className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2"
          type="email"
          placeholder="E-mail"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2"
          placeholder="WhatsApp"
          value={form.whatsapp}
          onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
        />
        <select
          className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2"
          value={form.tipo}
          onChange={(e) => setForm({ ...form, tipo: e.target.value })}
        >
          {['Restaurante', 'Clinica', 'E-commerce', 'Outro'].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <textarea
          className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 md:col-span-2"
          rows={3}
          placeholder="Mensagem"
          value={form.mensagem}
          onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
        />
        <div className="md:col-span-2 flex items-center gap-3">
          <button className="bg-flux-500 hover:bg-flux-600 text-white px-4 py-2 rounded-lg font-semibold" type="submit">
            {status === 'loading' ? 'Enviando...' : 'Enviar'}
          </button>
          {status === 'ok' && (
            <span className="text-emerald-400 text-sm">
              Recebemos seus dados! Em breve entraremos em contato para montar seu fluxo com IA 📲
            </span>
          )}
          {status === 'erro' && <span className="text-rose-400 text-sm">Preencha nome e e-mail validos.</span>}
        </div>
      </form>
    </section>
  );
};

const ChatDemo = () => {
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: 'Ola! Sou o Flux IA Chatbot. Pergunte sobre seu negocio e mostro como automatizar com n8n + Grok (fake).',
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [logs, setLogs] = useState(pickLogs(''));
  const [insight, setInsight] = useState(grokInsights.default);

  const send = () => {
    if (!input.trim()) return;
    const text = input.trim();
    setMessages((prev) => [...prev, { from: 'user', text }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      const reply = pickResponse(text);
      setMessages((prev) => [...prev, { from: 'user', text }, { from: 'bot', text: reply }]);
      setTyping(false);
      setLogs(pickLogs(text));
      setInsight(pickInsight(text));
    }, 900);
  };

  return (
    <div className="grid lg:grid-cols-3 gap-4" id="demo">
      <div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex flex-col h-[520px]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white font-semibold">Flux IA Chatbot</p>
            <p className="text-slate-400 text-sm">Demo conectada via n8n (simulação) + Grok (simulação)</p>
          </div>
          <span className="text-xs text-emerald-400">Online</span>
        </div>
        <div className="flex-1 overflow-y-auto space-y-3 pr-2">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-xl px-3 py-2 max-w-[80%] ${m.from === 'user' ? 'bg-flux-500 text-white' : 'bg-slate-800 text-slate-100'}`}>
                {m.text}
              </div>
            </div>
          ))}
          {typing && <div className="text-slate-400 text-sm">Chatbot digitando...</div>}
        </div>
        <div className="mt-4 flex gap-2">
          <input
            className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2"
            placeholder="Digite sua pergunta sobre o seu negocio..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
          />
          <button onClick={send} className="bg-flux-500 hover:bg-flux-600 text-white px-4 py-2 rounded-lg font-semibold">
            Enviar
          </button>
        </div>
      </div>
      <div className="space-y-3">
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3">
          <p className="text-white font-semibold mb-2">Logs simulados n8n</p>
          <ul className="text-slate-400 text-sm space-y-1">
            {logs.map((l, i) => (
              <li key={i}>• {l}</li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3">
          <p className="text-white font-semibold mb-2">Insights do Grok (fake)</p>
          <p className="text-slate-400 text-sm">{insight}</p>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ open, onClose, plan }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 w-full max-w-md">
        <h3 className="text-white font-semibold text-lg mb-2">Solicitar contato</h3>
        <p className="text-slate-400 text-sm mb-4">Plano selecionado: {plan}</p>
        <p className="text-slate-300 text-sm mb-4">
          Preencha o formulario na seção de contato e mencione o plano. Nossa equipe retornara com uma proposta
          personalizada (simulação).
        </p>
        <button onClick={onClose} className="bg-flux-500 hover:bg-flux-600 text-white px-4 py-2 rounded-lg font-semibold w-full">
          Fechar
        </button>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-400 flex flex-col md:flex-row justify-between gap-3">
    <span>Agencia de Automacao e IA</span>
    <div className="flex gap-4">
      <a href="#">Termos</a>
      <a href="#">Privacidade</a>
      <a href="https://www.instagram.com/eduardoazevedo.dev/">Instagram</a>
      <a href="https://wa.me/5511966422699?text=Oi%20Eduardo%21%20Acabei%20de%20testar%20sua%20demo%20de%20chatbot%20e%20achei%20incr%C3%ADvel%20%F0%9F%A4%96%E2%9C%A8%20Quero%20muito%20fazer%20um%20projeto%20com%20voc%C3%AA%21">WhatsApp</a>
    </div>
  </footer>
);

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPlan, setModalPlan] = useState('');

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Hero onCtaDemo={scrollToDemo} onCtaContact={scrollToContact} />
      <Benefits />
      <Steps />
      <UseCases />
      <Pricing onOpenModal={(plan) => { setModalPlan(plan); setModalOpen(true); }} />
      <FAQ />
      <ChatDemo />
      <ContactForm onSubmitted={() => { }} />
      <Footer />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} plan={modalPlan} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
