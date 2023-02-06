import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LocationsDatas from '../../data/logements.json';
import Collapse from '../../collapse/Collapse';
import SliderComponent from '../../slideShow/SlideShow.jsx';
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
    <main>
        <SliderComponent pictures={location.pictures} />

            <h1 className='location_title' >{location.title}</h1>
            <p className='location_location'>{location.location}</p>

            <p className='location_hostname'>{location.host.name}</p>
            <img className='location_hostpic' src={location.host.picture} alt={location.host.name}/>

            <div className='location_tags'>
            {location.tags.map((tag, index) => <p className='location_tag' key={index}>{tag}</p>)}
            </div>

            <div className='location_rating'>{location.rating}</div>

            <div className='location_descequip'>
                <Collapse titre="Description" description={location.description} />
                <Collapse titre="Équipements" description={location.equipments.map((equipment, index) => <p className='location_equipment' key={index}>{equipment}</p>)} />
            </div>

             

    </main>
  );
}

export default Logement;
