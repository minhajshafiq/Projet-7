import LocationsListCard from '../../apartmentCard/apartmentCard.jsx'

import HeroBanner from '../../heroBanner/HeroBanner.jsx';


function Home() {
  return (
      <main>
        <HeroBanner />
        <div className='CardContainer'>
            <LocationsListCard />
        </div>
      </main>
  )
}

export default Home;
