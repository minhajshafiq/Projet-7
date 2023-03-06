import './HeroBanner.scss';

function HeroBanner({ imageUrl, altText, headingText }) {
  return (
    <div className="heroBanner">
      <img className='heroBanner_img' src={imageUrl} alt={altText} />
      <h1 className='heroBanner_text'>{headingText}</h1>
    </div>
  );
}

export default HeroBanner;