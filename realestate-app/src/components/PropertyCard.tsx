import React from 'react';
import { Link } from 'react-router-dom';
import type { Property } from '../types';
import { useFavorites } from '../context/FavoritesContext';

interface PropertyCardProps {
    property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();
    const favorite = isFavorite(property.id);

    const toggleFavorite = (e: React.MouseEvent) => {
        e.preventDefault();
        if (favorite) {
            removeFavorite(property.id);
        } else {
            addFavorite(property);
        }
    };

    return (
        <div className="property-card">
            <div className="card-image">
                <img src={property.image} alt={property.title} />
                <div className="card-badges">
                    <span className={`badge ${property.type === 'sale' ? 'sale' : 'rent'}`}>
                        {property.type === 'sale' ? 'Venda' : 'Aluguel'}
                    </span>
                    {property.featured && <span className="badge featured">Destaque</span>}
                </div>
                <button
                    className={`favorite-btn ${favorite ? 'active' : ''}`}
                    onClick={toggleFavorite}
                >
                    <i className={`bx ${favorite ? 'bxs-heart' : 'bx-heart'}`}></i>
                </button>
            </div>
            <div className="card-content">
                <div className="card-price">
                    {property.type === 'sale'
                        ? `R$ ${property.price.toLocaleString('pt-BR')}`
                        : `R$ ${property.price.toLocaleString('pt-BR')}/mês`
                    }
                </div>
                <h3 className="card-title">{property.title}</h3>
                <p className="card-location">
                    <i className='bx bx-map'></i> {property.neighborhood}, {property.city}
                </p>
                <div className="card-features">
                    <span><i className='bx bx-bed'></i> {property.bedrooms}</span>
                    <span><i className='bx bx-bath'></i> {property.bathrooms}</span>
                    <span><i className='bx bx-car'></i> {property.parking}</span>
                    <span><i className='bx bx-area'></i> {property.area}m²</span>
                </div>
                <Link to={`/property/${property.id}`} className="btn btn-outline btn-block">
                    Ver Detalhes
                </Link>
            </div>

            <style>{`
                .property-card {
                    background: #fff;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                    transition: 0.3s;
                    border: 1px solid #f3f4f6;
                }
                .property-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
                }
                .card-image {
                    position: relative;
                    height: 200px;
                }
                .card-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .card-badges {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    display: flex;
                    gap: 5px;
                }
                .badge {
                    padding: 4px 10px;
                    border-radius: 4px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: #fff;
                }
                .badge.sale { background: var(--primary); }
                .badge.rent { background: var(--secondary); }
                .badge.featured { background: #f59e0b; }
                
                .favorite-btn {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.9);
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    font-size: 1.2rem;
                    color: var(--gray);
                    transition: 0.3s;
                }
                .favorite-btn:hover, .favorite-btn.active {
                    color: var(--danger);
                    transform: scale(1.1);
                }
                .card-content {
                    padding: 20px;
                }
                .card-price {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--primary);
                    margin-bottom: 5px;
                }
                .card-title {
                    font-size: 1.1rem;
                    margin-bottom: 5px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .card-location {
                    color: var(--gray);
                    font-size: 0.9rem;
                    margin-bottom: 15px;
                }
                .card-features {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 20px;
                    padding-top: 15px;
                    border-top: 1px solid #f3f4f6;
                    color: var(--gray);
                    font-size: 0.9rem;
                }
                .card-features span {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                .btn-block {
                    width: 100%;
                }
            `}</style>
        </div>
    );
};

export default PropertyCard;
