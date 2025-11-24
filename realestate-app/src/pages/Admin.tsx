import React from 'react';
import { mockProperties } from '../data/mockProperties';

const Admin: React.FC = () => {
    return (
        <div className="container" style={{ padding: '40px 20px' }}>
            <div className="admin-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <h2 className="section-title" style={{ marginBottom: 0 }}>Dashboard Admin</h2>
                <button className="btn btn-primary"><i className='bx bx-plus'></i> Novo Imóvel</button>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total de Imóveis</h3>
                    <div className="number">{mockProperties.length}</div>
                </div>
                <div className="stat-card">
                    <h3>Leads (Hoje)</h3>
                    <div className="number">12</div>
                </div>
                <div className="stat-card">
                    <h3>Visitas Agendadas</h3>
                    <div className="number">5</div>
                </div>
                <div className="stat-card">
                    <h3>Vendas no Mês</h3>
                    <div className="number">3</div>
                </div>
            </div>

            <div className="recent-section" style={{ marginTop: '40px' }}>
                <h3>Últimos Leads</h3>
                <div className="table-container">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Telefone</th>
                                <th>Interesse</th>
                                <th>Data</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>João Silva</td>
                                <td>joao@email.com</td>
                                <td>(11) 99999-9999</td>
                                <td>Compra - Ap. Jardins</td>
                                <td>23/11/2023</td>
                                <td><span className="status new">Novo</span></td>
                            </tr>
                            <tr>
                                <td>Maria Oliveira</td>
                                <td>maria@email.com</td>
                                <td>(11) 88888-8888</td>
                                <td>Aluguel - Casa Cambuí</td>
                                <td>22/11/2023</td>
                                <td><span className="status contacted">Contatado</span></td>
                            </tr>
                            <tr>
                                <td>Pedro Santos</td>
                                <td>pedro@email.com</td>
                                <td>(21) 97777-7777</td>
                                <td>Venda - Imóvel Próprio</td>
                                <td>22/11/2023</td>
                                <td><span className="status new">Novo</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <style>{`
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 20px;
                }
                .stat-card {
                    background: #fff;
                    padding: 20px;
                    border-radius: 12px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                }
                .stat-card h3 {
                    font-size: 1rem;
                    color: var(--gray);
                    margin-bottom: 10px;
                }
                .stat-card .number {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: var(--primary);
                }
                
                .table-container {
                    background: #fff;
                    border-radius: 12px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    overflow-x: auto;
                    margin-top: 20px;
                }
                .admin-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .admin-table th, .admin-table td {
                    padding: 15px 20px;
                    text-align: left;
                    border-bottom: 1px solid #f3f4f6;
                }
                .admin-table th {
                    background: #f9fafb;
                    font-weight: 600;
                    color: var(--gray);
                }
                .status {
                    padding: 4px 10px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 600;
                }
                .status.new {
                    background: #dbeafe;
                    color: #2563eb;
                }
                .status.contacted {
                    background: #dcfce7;
                    color: #16a34a;
                }
            `}</style>
        </div>
    );
};

export default Admin;
