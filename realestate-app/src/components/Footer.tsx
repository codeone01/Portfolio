import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <Link to="/" className="logo">
                            <i className='bx bx-home-heart'></i> VivaBem
                        </Link>
                        <p>Encontre o imóvel dos seus sonhos com a VivaBem. Segurança e agilidade para você.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Links Rápidos</h4>
                        <Link to="/">Home</Link>
                        <Link to="/catalog">Imóveis</Link>
                        <Link to="/favorites">Favoritos</Link>
                        <Link to="/contact">Contato</Link>
                    </div>
                    <div className="footer-col">
                        <h4>Contato</h4>
                        <p><i className='bx bx-map'></i> Av. Paulista, 1000 - SP</p>
                        <p><i className='bx bx-phone'></i> (11) 99999-9999</p>
                        <p><i className='bx bx-envelope'></i> contato@vivabem.com</p>
                    </div>
                    <div className="footer-col">
                        <h4>Redes Sociais</h4>
                        <div className="social-links">
                            <a href="https://www.facebook.com/profile.php?id=61583914455032"><i className='bx bxl-facebook'></i></a>
                            <a href="https://www.instagram.com/eduardoazevedo.dev/"><i className='bx bxl-instagram'></i></a>
                            <a href="https://www.linkedin.com/in/eduardo-azevedo-52481914b/"><i className='bx bxl-linkedin'></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>
                        &copy; 2025 VivaBem Imóveis. Todos os direitos reservados{" "}
                        <a
                            href="/"
                            style={{ textDecoration: "underline" }}
                        >
                            Eduardo Azevedo
                        </a>.
                    </p>
                </div>

            </div>

            <style>{`
                .footer {
                    background: var(--dark);
                    color: #fff;
                    padding: 60px 0 20px;
                    margin-top: auto;
                }
                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 40px;
                    margin-bottom: 40px;
                }
                .footer-col .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--primary);
                    margin-bottom: 15px;
                    display: inline-block;
                }
                .footer-col p {
                    color: #9ca3af;
                    margin-bottom: 10px;
                }
                .footer-col h4 {
                    font-size: 1.2rem;
                    margin-bottom: 20px;
                    color: #fff;
                }
                .footer-col a {
                    display: block;
                    color: #9ca3af;
                    margin-bottom: 10px;
                    transition: 0.3s;
                }
                .footer-col a:hover {
                    color: var(--primary);
                    padding-left: 5px;
                }
                .social-links {
                    display: flex;
                    gap: 15px;
                }
                .social-links a {
                    font-size: 1.5rem;
                    display: inline-block;
                }
                .footer-bottom {
                    border-top: 1px solid #374151;
                    padding-top: 20px;
                    text-align: center;
                    color: #6b7280;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
