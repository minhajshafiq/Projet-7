import React, { useState } from 'react';

function Collapse({ title, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        <h2>{title}</h2>
        <svg className="angle" viewBox="0 0 24 24">
          {open
            ? <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" fill="#fff"/>
            : <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="#fff"/>
          }
        </svg>
      </button>
      {open && <p>{description}</p>}
    </div>
  );
}

export default Collapse;
