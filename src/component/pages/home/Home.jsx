import LocationsListCard from '../../apartmentCard/apartmentCard.jsx'

import HeroBanner from '../../heroBanner/HeroBanner.jsx';
import BannerBackground from '../../../assets/heroBanner.png';

import './Home.scss';

function Home() {
  return (
      <main>
          <HeroBanner
          imageUrl={BannerBackground}
          altText="Bannière Hero"
          headingText="Chez vous, partout et ailleurs"
          />
          <LocationsListCard />
      </main>
  )
}

export default Home;
