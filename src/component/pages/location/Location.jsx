import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import LocationsDatas from '../../data/logements.json';
import Collapse from '../../Collapse/Collapse';
import './Location.scss';


function Logement() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const farStar = ['star', 'regular'];

  useEffect(() => {
    const location = LocationsDatas.find(l => l.id === id);
    setLocation(location);
  }, [id]);

  if (!location) {
    return;
  }

  function renderStars() {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < location.rating) {
        stars.push(<FontAwesomeIcon icon={fasStar} key={i} />);
      } else {
        stars.push(<FontAwesomeIcon icon={['far', farStar]} key={i} />);
      }
    }
    return stars;
  }

  return (
    <main>
        <img className='location_img' src={location.cover} alt={location.title} />

            <h1 className='location_title' >{location.title}</h1>
            <p className='location_location'>{location.location}</p>

            <p className='location_hostname'>{location.host.name}</p>
            <img className='location_hostpic' src={location.host.picture} alt={location.host.name}/>

            <div className='location_tags'>
            {location.tags.map((tag, index) => <p className='location_tag' key={index}>{tag}</p>)}
            </div>

            <div className='location_rating'>{renderStars()}</div>

            <div className='location_descequip'>
                <Collapse titre="Description" description={location.description} />
                <Collapse titre="Équipements" description={location.equipments.map((equipment, index) => <p className='location_equipment' key={index}>{equipment}</p>)} />
            </div>

             

    </main>
  );
}

export default Logement;
