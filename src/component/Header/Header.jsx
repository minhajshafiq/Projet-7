import { Link } from "react-router-dom"
import kasalogo from "../../assets/logo.png"

import './Header.scss'

function Header() {
    return (
        <header className="kasa">
            <Link to="/"><img src={kasalogo} alt='Logo Kasa' className="kasa_logo" /></Link>
            <nav className="kasa_navbar">
                <Link className="kasa_welcome" to="/">Accueil</Link>
                <Link className="kasa_about" to="/about">À Propos</Link>
            </nav>
        </header>
    );
}

export default Header;