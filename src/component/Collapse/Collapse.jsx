import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

function Collapse({ titre, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="about_buttons">
      <button className='about_button' onClick={() => setOpen(!open)}>
        <h2 className='about_title'>{titre}</h2> <FontAwesomeIcon className='about_angle' icon={open ? faAngleUp : faAngleDown} />
      </button>
      {open && <p className='about_description'>{description}</p>}
    </div>
  );
}

export default Collapse;

