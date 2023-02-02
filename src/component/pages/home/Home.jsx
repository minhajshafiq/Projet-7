import Card from '../../apartmentCard/apartmentCard.jsx'

import HeroBanner from '../../heroBanner/HeroBanner.jsx';


function Home() {
  return (
    <div>
      <main>
        <HeroBanner />
        <div className='CardContainer'>
            <Card />
        </div>
      </main>
    </div>
  )
}

export default Home;
