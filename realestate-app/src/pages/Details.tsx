import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProperties } from '../data/mockProperties';
import { useFavorites } from '../context/FavoritesContext';

const Details: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const property = mockProperties.find(p => p.id === Number(id));
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();
    const [activeImage, setActiveImage] = useState(0);
    // const [showContactForm, setShowContactForm] = useState(false);

    if (!property) {
        return <div className="container" style={{ padding: '40px' }}>Imóvel não encontrado. <Link to="/catalog">Voltar</Link></div>;
    }

    const favorite = isFavorite(property.id);

    const toggleFavorite = () => {
        if (favorite) removeFavorite(property.id);
        else addFavorite(property);
    };

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Um corretor entrará em contato em breve.');
        // setShowContactForm(false);
    };

    return (
        <div className="details-page container">
            <div className="details-header">
                <div>
                    <h1>{property.title}</h1>
                    <p className="location"><i className='bx bx-map'></i> {property.neighborhood}, {property.city}</p>
                </div>
                <div className="details-price">
                    {property.type === 'sale'
                        ? `R$ ${property.price.toLocaleString('pt-BR')}`
                        : `R$ ${property.price.toLocaleString('pt-BR')}/mês`
                    }
                    <button
                        className={`btn-favorite ${favorite ? 'active' : ''}`}
                        onClick={toggleFavorite}
                    >
                        <i className={`bx ${favorite ? 'bxs-heart' : 'bx-heart'}`}></i>
                    </button>
                </div>
            </div>

            <div className="gallery">
                <div className="main-image">
                    <img src={property.images[activeImage]} alt={property.title} />
                </div>
                <div className="thumbnails">
                    {property.images.map((img, index) => (
                        <div
                            key={index}
                            className={`thumbnail ${index === activeImage ? 'active' : ''}`}
                            onClick={() => setActiveImage(index)}
                        >
                            <img src={img} alt={`Thumbnail ${index}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="details-content">
                <div className="main-info">
                    <section className="info-section">
                        <h3>Sobre o Imóvel</h3>
                        <p>{property.description}</p>
                    </section>

                    <section className="info-section">
                        <h3>Características</h3>
                        <div className="features-list">
                            <div className="feature-item">
                                <i className='bx bx-bed'></i>
                                <span>{property.bedrooms} Quartos</span>
                            </div>
                            <div className="feature-item">
                                <i className='bx bx-bath'></i>
                                <span>{property.bathrooms} Banheiros</span>
                            </div>
                            <div className="feature-item">
                                <i className='bx bx-car'></i>
                                <span>{property.parking} Vagas</span>
                            </div>
                            <div className="feature-item">
                                <i className='bx bx-area'></i>
                                <span>{property.area}m²</span>
                            </div>
                            {property.features.map((feature, index) => (
                                <div key={index} className="feature-item">
                                    <i className='bx bx-check-circle'></i>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <aside className="sidebar-contact">
                    <div className="contact-card">
                        <h3>Interessado?</h3>
                        <p>Agende uma visita ou tire suas dúvidas.</p>

                        <form onSubmit={handleContactSubmit}>
                            <div className="form-group">
                                <input type="text" placeholder="Seu Nome" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Seu E-mail" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <input type="tel" placeholder="Seu Telefone" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Olá, gostaria de mais informações sobre este imóvel..." className="form-control" rows={4}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Enviar Mensagem</button>
                            <button
                                type="button"
                                className="btn btn-outline btn-block"
                                onClick={() => {
                                    const message = 'Oi Eduardo! Vi sua demo de imobiliária e gostei demais 😍🏡 Quero muito fazer um projeto com você!';
                                    const url = `https://wa.me/5511966422699?text=${encodeURIComponent(message)}`;
                                    window.open(url, '_blank');
                                }}
                                style={{ marginTop: '10px' }}
                            >
                                <i className="bx bxl-whatsapp"></i> Conversar no WhatsApp
                            </button>
                        </form>
                    </div>
                </aside>
            </div>

            <style>{`
                .details-page {
                    padding: 40px 20px;
                }
                .details-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 30px;
                }
                .details-header h1 {
                    font-size: 2.5rem;
                    margin-bottom: 10px;
                }
                .location {
                    color: var(--gray);
                    font-size: 1.1rem;
                }
                .details-price {
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--primary);
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }
                .btn-favorite {
                    background: #fff;
                    border: 1px solid #e5e7eb;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: var(--gray);
                    transition: 0.3s;
                }
                .btn-favorite.active {
                    color: var(--danger);
                    border-color: var(--danger);
                }
                
                .gallery {
                    margin-bottom: 40px;
                }
                .main-image {
                    height: 500px;
                    border-radius: 12px;
                    overflow: hidden;
                    margin-bottom: 20px;
                }
                .main-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .thumbnails {
                    display: flex;
                    gap: 15px;
                    overflow-x: auto;
                }
                .thumbnail {
                    width: 120px;
                    height: 80px;
                    border-radius: 8px;
                    overflow: hidden;
                    cursor: pointer;
                    opacity: 0.6;
                    transition: 0.3s;
                }
                .thumbnail.active, .thumbnail:hover {
                    opacity: 1;
                    border: 2px solid var(--primary);
                }
                .thumbnail img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .details-content {
                    display: grid;
                    grid-template-columns: 1fr 350px;
                    gap: 40px;
                }
                .info-section {
                    background: #fff;
                    padding: 30px;
                    border-radius: 12px;
                    margin-bottom: 30px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                }
                .info-section h3 {
                    margin-bottom: 20px;
                    font-size: 1.5rem;
                }
                .features-list {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 20px;
                }
                .feature-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: var(--dark);
                    font-weight: 500;
                }
                .feature-item i {
                    color: var(--primary);
                    font-size: 1.2rem;
                }
                
                .contact-card {
                    background: #fff;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
                    position: sticky;
                    top: 100px;
                }
                .contact-card h3 {
                    margin-bottom: 10px;
                }
                .contact-card p {
                    color: var(--gray);
                    margin-bottom: 20px;
                }
                .btn-block {
                    width: 100%;
                }
                
                @media (max-width: 900px) {
                    .details-content {
                        grid-template-columns: 1fr;
                    }
                    .details-header {
                        flex-direction: column;
                        gap: 20px;
                    }
                    .main-image {
                        height: 300px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Details;
