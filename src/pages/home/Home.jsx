import LocationsListCard from '../../component/apartmentCard/apartmentCard.jsx'

import HeroBanner from '../../component/heroBanner/HeroBanner.jsx';
import BannerBackground from '../../assets/heroBanner.png';

import './Home.scss';

function Home() {
  return (
      <main>
        <div className='homeBanner'>
            <HeroBanner
            imageUrl={BannerBackground}
            altText="Bannière Hero"
            headingText="Chez vous, partout et ailleurs"
            />
        </div>
        <LocationsListCard />
      </main>
  )
}

export default Home;
