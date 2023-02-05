import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

function Collapse({ titre, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className='aboutbutton locationbutton' onClick={() => setOpen(!open)}>
        <h2 className='abouttitle locationtitle'>{titre}</h2> <FontAwesomeIcon className='about_angle' icon={open ? faAngleUp : faAngleDown} />
      </button>
      {open && <p className='aboutdescription locationdescription'>{description}</p>}
    </div>
  );
}

export default Collapse;

