import { Link } from "react-router-dom";
import kasalogo from "../../assets/logo.png"

import './Header.scss'

function Header() {
    return (
        <header>
            <Link to="/"><img src={kasalogo} alt='Logo Kasa' className="kasa-logo" /></Link>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À Propos</Link>
            </nav>
        </header>
    );
}

export default Header;