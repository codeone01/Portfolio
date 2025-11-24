import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

const Header: React.FC = () => {
    const { favorites } = useFavorites();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path: string) => location.pathname === path ? 'active' : '';

    return (
        <header className="header">
            <div className="container header-content">
                <Link to="/" className="logo">
                    <i className='bx bx-home-heart'></i> VivaBem
                </Link>

                <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/catalog" className={`nav-link ${isActive('/catalog')}`} onClick={() => setIsMenuOpen(false)}>Imóveis</Link>
                    <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setIsMenuOpen(false)}>Contato</Link>
                    <Link to="/admin" className={`nav-link ${isActive('/admin')}`} onClick={() => setIsMenuOpen(false)}>Admin</Link>
                </div>

                <div className="header-actions">
                    <Link to="/favorites" className="favorites-btn">
                        <i className='bx bx-heart'></i>
                        {favorites.length > 0 && <span className="badge">{favorites.length}</span>}
                    </Link>
                    <Link to="/contact" className="btn btn-primary btn-sm">Anunciar</Link>
                    <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
                    </button>
                </div>
            </div>

            <style>{`
                .header {
                    background: #fff;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    position: sticky;
                    top: 0;
                    z-index: 100;
                    padding: 15px 0;
                }
                .header-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--primary);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .nav-menu {
                    display: flex;
                    gap: 30px;
                }
                .nav-link {
                    font-weight: 500;
                    color: var(--gray);
                    position: relative;
                }
                .nav-link:hover, .nav-link.active {
                    color: var(--primary);
                }
                .nav-link.active::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: var(--primary);
                }
                .header-actions {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }
                .favorites-btn {
                    font-size: 1.5rem;
                    color: var(--dark);
                    position: relative;
                }
                .badge {
                    position: absolute;
                    top: -5px;
                    right: -8px;
                    background: var(--danger);
                    color: #fff;
                    font-size: 0.7rem;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .menu-toggle {
                    display: none;
                    background: none;
                    border: none;
                    font-size: 1.8rem;
                    cursor: pointer;
                }
                @media (max-width: 768px) {
                    .nav-menu {
                        position: fixed;
                        top: 70px;
                        left: 0;
                        width: 100%;
                        background: #fff;
                        flex-direction: column;
                        padding: 20px;
                        box-shadow: 0 5px 10px rgba(0,0,0,0.05);
                        transform: translateY(-150%);
                        transition: 0.3s;
                    }
                    .nav-menu.open {
                        transform: translateY(0);
                    }
                    .menu-toggle {
                        display: block;
                    }
                }
            `}</style>
        </header>
    );
};

export default Header;
