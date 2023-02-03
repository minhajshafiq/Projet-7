import BannerBackground from '../../assets/heroBanner.png';
import './HeroBanner.scss';

function HeroBanner() {

    return (
        <div className="heroBanner">
            <img className='heroBanner_img' src={BannerBackground} alt="Bannière Hero" />
            <h1 className='heroBanner_text'>Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default HeroBanner;