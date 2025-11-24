import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: 'buy',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        setFormData({ name: '', email: '', phone: '', interest: 'buy', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact-page container">
            <div className="contact-layout">
                <div className="contact-info">
                    <h1>Fale Conosco</h1>
                    <p>Estamos prontos para te ajudar a realizar seu sonho.</p>

                    <div className="info-item">
                        <div className="icon"><i className='bx bx-map'></i></div>
                        <div>
                            <h3>Endereço</h3>
                            <p>Av. Paulista, 1000 - Bela Vista, São Paulo - SP</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="icon"><i className='bx bx-phone'></i></div>
                        <div>
                            <h3>Telefone</h3>
                            <p>(11) 99999-9999</p>
                            <p>(11) 3333-3333</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="icon"><i className='bx bx-envelope'></i></div>
                        <div>
                            <h3>E-mail</h3>
                            <p>contato@vivabem.com</p>
                            <p>vendas@vivabem.com</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <h2>Envie uma mensagem</h2>

                        <div className="form-group">
                            <label className="form-label">Nome Completo</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Telefone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-control"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Interesse</label>
                            <select
                                name="interest"
                                className="form-control"
                                value={formData.interest}
                                onChange={handleChange}
                            >
                                <option value="buy">Quero Comprar</option>
                                <option value="rent">Quero Alugar</option>
                                <option value="sell">Quero Vender</option>
                                <option value="other">Outro Assunto</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Mensagem</label>
                            <textarea
                                name="message"
                                className="form-control"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Enviar Mensagem</button>
                    </form>
                </div>
            </div>

            <style>{`
                .contact-page {
                    padding: 60px 20px;
                }
                .contact-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: start;
                }
                .contact-info h1 {
                    font-size: 3rem;
                    margin-bottom: 10px;
                    color: var(--dark);
                }
                .contact-info p {
                    color: var(--gray);
                    margin-bottom: 40px;
                    font-size: 1.1rem;
                }
                .info-item {
                    display: flex;
                    gap: 20px;
                    margin-bottom: 30px;
                }
                .info-item .icon {
                    width: 50px;
                    height: 50px;
                    background: #e0f2fe;
                    color: var(--primary);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                }
                .info-item h3 {
                    margin-bottom: 5px;
                    font-size: 1.2rem;
                }
                
                .contact-form-container {
                    background: #fff;
                    padding: 40px;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                }
                .contact-form h2 {
                    margin-bottom: 30px;
                }
                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                }
                .btn-block {
                    width: 100%;
                }
                
                @media (max-width: 768px) {
                    .contact-layout {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Contact;
