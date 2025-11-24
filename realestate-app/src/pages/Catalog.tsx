import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { mockProperties } from '../data/mockProperties';
import type { Property } from '../types';

const Catalog: React.FC = () => {
    const location = useLocation();
    const [properties, setProperties] = useState<Property[]>(mockProperties);
    const [filters, setFilters] = useState({
        city: '',
        type: '',
        category: '',
        minPrice: '',
        maxPrice: '',
        bedrooms: ''
    });

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setFilters(prev => ({
            ...prev,
            city: params.get('city') || '',
            type: params.get('type') || '',
            category: params.get('category') || ''
        }));
    }, [location.search]);

    useEffect(() => {
        let result = mockProperties;

        if (filters.city) {
            result = result.filter(p =>
                p.city.toLowerCase().includes(filters.city.toLowerCase()) ||
                p.neighborhood.toLowerCase().includes(filters.city.toLowerCase())
            );
        }
        if (filters.type) {
            result = result.filter(p => p.type === filters.type);
        }
        if (filters.category) {
            result = result.filter(p => p.category === filters.category);
        }
        if (filters.minPrice) {
            result = result.filter(p => p.price >= Number(filters.minPrice));
        }
        if (filters.maxPrice) {
            result = result.filter(p => p.price <= Number(filters.maxPrice));
        }
        if (filters.bedrooms) {
            result = result.filter(p => p.bedrooms >= Number(filters.bedrooms));
        }

        setProperties(result);
    }, [filters]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const clearFilters = () => {
        setFilters({
            city: '',
            type: '',
            category: '',
            minPrice: '',
            maxPrice: '',
            bedrooms: ''
        });
    };

    return (
        <div className="catalog-page container">
            <div className="catalog-layout">
                {/* Sidebar Filters */}
                <aside className="filters-sidebar">
                    <div className="filters-header">
                        <h3>Filtros</h3>
                        <button onClick={clearFilters} className="btn-clear">Limpar</button>
                    </div>

                    <div className="filter-group">
                        <label>Localização</label>
                        <input
                            type="text"
                            name="city"
                            placeholder="Cidade ou Bairro"
                            className="form-control"
                            value={filters.city}
                            onChange={handleFilterChange}
                        />
                    </div>

                    <div className="filter-group">
                        <label>Finalidade</label>
                        <select name="type" className="form-control" value={filters.type} onChange={handleFilterChange}>
                            <option value="">Todos</option>
                            <option value="sale">Comprar</option>
                            <option value="rent">Alugar</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Tipo de Imóvel</label>
                        <select name="category" className="form-control" value={filters.category} onChange={handleFilterChange}>
                            <option value="">Todos</option>
                            <option value="apartment">Apartamento</option>
                            <option value="house">Casa</option>
                            <option value="commercial">Comercial</option>
                            <option value="land">Terreno</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label>Preço Mínimo</label>
                        <input
                            type="number"
                            name="minPrice"
                            placeholder="R$ 0,00"
                            className="form-control"
                            value={filters.minPrice}
                            onChange={handleFilterChange}
                        />
                    </div>

                    <div className="filter-group">
                        <label>Preço Máximo</label>
                        <input
                            type="number"
                            name="maxPrice"
                            placeholder="R$ 0,00"
                            className="form-control"
                            value={filters.maxPrice}
                            onChange={handleFilterChange}
                        />
                    </div>

                    <div className="filter-group">
                        <label>Quartos (mínimo)</label>
                        <select name="bedrooms" className="form-control" value={filters.bedrooms} onChange={handleFilterChange}>
                            <option value="">Qualquer</option>
                            <option value="1">1+</option>
                            <option value="2">2+</option>
                            <option value="3">3+</option>
                            <option value="4">4+</option>
                        </select>
                    </div>
                </aside>

                {/* Results */}
                <main className="catalog-results">
                    <div className="results-header">
                        <h2>{properties.length} Imóveis encontrados</h2>
                    </div>

                    {properties.length > 0 ? (
                        <div className="properties-grid">
                            {properties.map(property => (
                                <PropertyCard key={property.id} property={property} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <i className='bx bx-search'></i>
                            <h3>Nenhum imóvel encontrado</h3>
                            <p>Tente ajustar seus filtros para encontrar o que procura.</p>
                            <button onClick={clearFilters} className="btn btn-primary">Limpar Filtros</button>
                        </div>
                    )}
                </main>
            </div>

            <style>{`
                .catalog-page {
                    padding: 40px 20px;
                }
                .catalog-layout {
                    display: grid;
                    grid-template-columns: 280px 1fr;
                    gap: 40px;
                }
                .filters-sidebar {
                    background: #fff;
                    padding: 20px;
                    border-radius: 12px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    height: fit-content;
                    position: sticky;
                    top: 100px;
                }
                .filters-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                    padding-bottom: 10px;
                    border-bottom: 1px solid #f3f4f6;
                }
                .btn-clear {
                    background: none;
                    border: none;
                    color: var(--primary);
                    cursor: pointer;
                    font-size: 0.9rem;
                    text-decoration: underline;
                }
                .filter-group {
                    margin-bottom: 20px;
                }
                .filter-group label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 500;
                    font-size: 0.9rem;
                }
                .results-header {
                    margin-bottom: 20px;
                }
                .properties-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                }
                .no-results {
                    text-align: center;
                    padding: 60px;
                    background: #fff;
                    border-radius: 12px;
                }
                .no-results i {
                    font-size: 4rem;
                    color: #d1d5db;
                    margin-bottom: 20px;
                }
                .no-results h3 {
                    margin-bottom: 10px;
                }
                .no-results p {
                    color: var(--gray);
                    margin-bottom: 20px;
                }
                
                @media (max-width: 900px) {
                    .catalog-layout {
                        grid-template-columns: 1fr;
                    }
                    .filters-sidebar {
                        position: static;
                        margin-bottom: 40px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Catalog;
