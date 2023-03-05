import React, { useState } from 'react';
import './Collapse.scss';

function Collapse({ title, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div id="Collapse">
      <button onClick={() => setOpen(!open)}>
        <h2>{title}</h2>
        <svg className={`angle ${open ? 'angle_up' : 'angle_down'}`} viewBox="0 0 24 24">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#fff"/>
        </svg>
      </button>
      {open && <p>{description}</p>}
    </div>
  );
}

export default Collapse;
