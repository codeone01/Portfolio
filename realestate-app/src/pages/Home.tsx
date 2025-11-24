import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import { mockProperties } from '../data/mockProperties';

const Home: React.FC = () => {
    const featuredProperties = mockProperties.filter(p => p.featured).slice(0, 3);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <h1>Encontre o lugar perfeito para viver</h1>
                    <p>Milhares de opções de casas, apartamentos e escritórios para você.</p>
                    <div className="hero-search">
                        <SearchBar />
                    </div>
                </div>
            </section>

            {/* Featured Properties */}
            <section className="section-featured container">
                <h2 className="section-title">Imóveis em Destaque</h2>
                <p className="section-subtitle">Confira as melhores oportunidades selecionadas para você.</p>

                <div className="properties-grid">
                    {featuredProperties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '40px' }}>
                    <Link to="/catalog" className="btn btn-primary">Ver Todos os Imóveis</Link>
                </div>
            </section>

            {/* How it Works */}
            <section className="section-steps">
                <div className="container">
                    <h2 className="section-title">Como Funciona</h2>
                    <p className="section-subtitle">Simples, rápido e seguro.</p>

                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-icon"><i className='bx bx-search-alt'></i></div>
                            <h3>1. Busque</h3>
                            <p>Utilize nossos filtros inteligentes para encontrar o imóvel ideal.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-icon"><i className='bx bx-calendar-check'></i></div>
                            <h3>2. Agende</h3>
                            <p>Marque uma visita online ou presencial com nossos corretores.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-icon"><i className='bx bx-home-smile'></i></div>
                            <h3>3. Mude-se</h3>
                            <p>Feche o negócio com segurança e aproveite seu novo lar.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-testimonials container">
                <h2 className="section-title">O que dizem nossos clientes</h2>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <p>"Encontrei meu apartamento dos sonhos em menos de uma semana. O atendimento foi impecável!"</p>
                        <div className="client-info">
                            <strong>Ana Silva</strong>
                            <span>Comprou em São Paulo</span>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p>"Plataforma muito intuitiva e fácil de usar. As fotos condizem com a realidade."</p>
                        <div className="client-info">
                            <strong>Carlos Santos</strong>
                            <span>Alugou em Campinas</span>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p>"Vendi meu imóvel muito rápido. Recomendo a VivaBem para todos."</p>
                        <div className="client-info">
                            <strong>Mariana Costa</strong>
                            <span>Vendeu no Rio de Janeiro</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-cta">
                <div className="container">
                    <h2>Quer vender ou alugar seu imóvel?</h2>
                    <p>Anuncie na VivaBem e alcance milhares de interessados.</p>
                    <Link to="/contact" className="btn btn-light">Anunciar Agora</Link>
                </div>
            </section>

            <style>{`
                .hero {
                    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80');
                    background-size: cover;
                    background-position: center;
                    height: 600px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: #fff;
                    margin-bottom: 60px;
                }
                .hero h1 {
                    font-size: 3.5rem;
                    margin-bottom: 20px;
                    font-weight: 700;
                }
                .hero p {
                    font-size: 1.2rem;
                    margin-bottom: 40px;
                    opacity: 0.9;
                }
                .section-featured, .section-steps, .section-testimonials {
                    padding: 60px 20px;
                }
                .properties-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                }
                .text-center { text-align: center; }
                
                .section-steps {
                    background: #fff;
                }
                .steps-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 30px;
                    text-align: center;
                }
                .step-icon {
                    width: 80px;
                    height: 80px;
                    background: #e0f2fe;
                    color: var(--primary);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2.5rem;
                    margin: 0 auto 20px;
                }
                
                .testimonials-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                }
                .testimonial-card {
                    background: #fff;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                }
                .testimonial-card p {
                    font-style: italic;
                    color: var(--gray);
                    margin-bottom: 20px;
                }
                .client-info strong {
                    display: block;
                    color: var(--dark);
                }
                .client-info span {
                    font-size: 0.9rem;
                    color: var(--gray);
                }
                
                .section-cta {
                    background: var(--primary);
                    color: #fff;
                    text-align: center;
                    padding: 80px 20px;
                }
                .section-cta h2 {
                    font-size: 2.5rem;
                    margin-bottom: 15px;
                }
                .section-cta p {
                    font-size: 1.2rem;
                    margin-bottom: 30px;
                    opacity: 0.9;
                }
                .btn-light {
                    background: #fff;
                    color: var(--primary);
                    padding: 12px 30px;
                    border-radius: 8px;
                    font-weight: 600;
                    text-decoration: none;
                }
                .btn-light:hover {
                    background: #f3f4f6;
                }
                
                @media (max-width: 768px) {
                    .hero h1 { font-size: 2.5rem; }
                }
            `}</style>
        </div>
    );
};

export default Home;
