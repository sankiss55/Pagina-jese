import { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from './../assets/img/logo.jpg';
import './../styles/Nav.css';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="1500">
            <div className="nav-logo">
                <img src={Logo} width={100} height={100} alt="logo" />
            </div>
            
            <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>INICIO</Link>
                <Link to="/catalogo" onClick={() => setIsMenuOpen(false)}>CATÁLOGO</Link>
                <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>CONTACTO</Link>
                <Link to="/nosotros" onClick={() => setIsMenuOpen(false)}>NOSOTROS</Link>
            </div>
        </nav>
    )
}
export default Nav;