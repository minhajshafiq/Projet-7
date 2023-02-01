import React from 'react';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Card from '../ApartmentCard/apartmentCard.jsx'

import HeroBanner from '../HeroBanner/HeroBanner.jsx';


function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroBanner />
        <div className='CardContainer'>
            <Card />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home;
