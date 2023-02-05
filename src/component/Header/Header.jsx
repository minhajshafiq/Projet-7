import { Link, useLocation } from "react-router-dom"
import kasalogo from "../../assets/logo.png"

import './Header.scss'


function Header() {
    const location = useLocation();
  
    return (
        <header className="kasa">
            <Link to="/"><img src={kasalogo} alt='Logo Kasa' className="kasa_logo" /></Link>
            <nav className="kasa_navbar">
            <Link className={`kasa_welcome ${location.pathname === '/' ? 'active' : ''} ${location.pathname === '/about' ? 'no_underline' : ''}`} to="/">Accueil</Link>
            <Link className={`kasa_about ${location.pathname === '/about' ? 'active' : ''}`} to="/about">À Propos</Link>
            </nav>
        </header>
    );
}

export default Header;