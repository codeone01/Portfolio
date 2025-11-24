import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
    const navigate = useNavigate();
    const [filters, setFilters] = useState({
        city: '',
        type: '',
        category: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const queryParams = new URLSearchParams();
        if (filters.city) queryParams.append('city', filters.city);
        if (filters.type) queryParams.append('type', filters.type);
        if (filters.category) queryParams.append('category', filters.category);

        navigate(`/catalog?${queryParams.toString()}`);
    };

    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <div className="search-group">
                <i className='bx bx-map'></i>
                <input
                    type="text"
                    name="city"
                    placeholder="Cidade ou Bairro"
                    value={filters.city}
                    onChange={handleChange}
                />
            </div>
            <div className="search-divider"></div>
            <div className="search-group">
                <i className='bx bx-home'></i>
                <select name="category" value={filters.category} onChange={handleChange}>
                    <option value="">Tipo de Imóvel</option>
                    <option value="apartment">Apartamento</option>
                    <option value="house">Casa</option>
                    <option value="commercial">Comercial</option>
                    <option value="land">Terreno</option>
                </select>
            </div>
            <div className="search-divider"></div>
            <div className="search-group">
                <i className='bx bx-key'></i>
                <select name="type" value={filters.type} onChange={handleChange}>
                    <option value="">Finalidade</option>
                    <option value="sale">Comprar</option>
                    <option value="rent">Alugar</option>
                </select>
            </div>
            <button type="submit" className="btn-search">
                <i className='bx bx-search'></i> Buscar
            </button>

            <style>{`
                .search-bar {
                    background: #fff;
                    padding: 10px;
                    border-radius: 50px;
                    display: flex;
                    align-items: center;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                    max-width: 800px;
                    margin: 0 auto;
                }
                .search-group {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    padding: 0 20px;
                    gap: 10px;
                }
                .search-group i {
                    color: var(--primary);
                    font-size: 1.2rem;
                }
                .search-group input, .search-group select {
                    border: none;
                    width: 100%;
                    font-size: 1rem;
                    color: var(--dark);
                    outline: none;
                    background: transparent;
                }
                .search-divider {
                    width: 1px;
                    height: 30px;
                    background: #e5e7eb;
                }
                .btn-search {
                    background: var(--primary);
                    color: #fff;
                    border: none;
                    padding: 15px 30px;
                    border-radius: 40px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: 0.3s;
                }
                .btn-search:hover {
                    background: var(--primary-dark);
                }
                @media (max-width: 768px) {
                    .search-bar {
                        flex-direction: column;
                        border-radius: 20px;
                        padding: 20px;
                    }
                    .search-group {
                        width: 100%;
                        padding: 15px 0;
                        border-bottom: 1px solid #f3f4f6;
                    }
                    .search-divider {
                        display: none;
                    }
                    .btn-search {
                        width: 100%;
                        margin-top: 20px;
                        justify-content: center;
                    }
                }
            `}</style>
        </form>
    );
};

export default SearchBar;
