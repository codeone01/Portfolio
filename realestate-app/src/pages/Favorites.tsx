import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import PropertyCard from '../components/PropertyCard';
import { Link } from 'react-router-dom';

const Favorites: React.FC = () => {
    const { favorites } = useFavorites();

    return (
        <div className="container" style={{ padding: '40px 20px', minHeight: '60vh' }}>
            <h2 className="section-title">Meus Favoritos</h2>

            {favorites.length > 0 ? (
                <div className="properties-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {favorites.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            ) : (
                <div className="no-results" style={{ textAlign: 'center', padding: '60px', background: '#fff', borderRadius: '12px' }}>
                    <i className='bx bx-heart' style={{ fontSize: '4rem', color: '#d1d5db', marginBottom: '20px' }}></i>
                    <h3>Você ainda não tem favoritos</h3>
                    <p style={{ color: '#6b7280', marginBottom: '20px' }}>Navegue pelo nosso catálogo e salve os imóveis que você gostar.</p>
                    <Link to="/catalog" className="btn btn-primary">Ver Imóveis</Link>
                </div>
            )}
        </div>
    );
};

export default Favorites;
