import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import LocationsDatas from '../../data/logements.json';

import Collapse from '../../collapse/Collapse';
import StarRating from '../../starsRating/StarsRating.jsx';
import Slider from '../../slideShow/SlideShow.jsx';

import './Location.scss';

function Logement() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const location = LocationsDatas.find(l => l.id === id);
    setLocation(location);
  }, [id]);

  if (!location) {
    return;
  }

  return (
    <main id='location'>
        <Slider images={location.pictures} />
        
        <div className='location'>
        <div className='location_info'>

          <h1 className='location_title'>{location.title}</h1>
          <div className='location_localisation'>{location.location}</div>
          
          <div className='location_tags'>
            {location.tags.map((tag, index) => <p className='location_tag' key={index}>{tag}</p>)}
          </div>

        </div>
        <div className='host_info'>

          <div className='host_name'>{location.host.name}</div>
          <img className='host_pic' src={location.host.picture} alt={location.host.name} />
          <div className="location_rating">
          <StarRating rating={location.rating} />

          </div>


      </div>
      </div>

      <div className='location_btnlist'>

        <div className='location_btn'>
          <Collapse title="Description" description={location.description} />
        </div>

        <div className='location_btn'>
          <Collapse title="Équipements" description={location.equipments.map((equipment, index) => <p className='location_equipment' key={index}>{equipment}</p>)} />
        </div>

      </div>

    </main>
  );
}

export default Logement;