import logoFooter from '../../assets/LOGO-3.png';
import './Footer.scss';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_box'>
                <img src={logoFooter} alt="Logo Kasa" />
            </div>
            <div className='footer_text'>
                <p>© 2020 Kasa. All rights reserved</p>
                </div>
        </footer>
    );
}

export default Footer;