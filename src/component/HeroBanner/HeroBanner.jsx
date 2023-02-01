import BannerBackground from '../../assets/heroBanner.png';

function HeroBanner() {

    return (
        <div className="HeroBanner">
            <img src={BannerBackground} alt="Bannière Hero" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default HeroBanner;