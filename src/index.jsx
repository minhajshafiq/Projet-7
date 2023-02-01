import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import "../src/styles/index.css";

import Home from './component/pages/Home';
import Logement from './component/pages/Logement.jsx';
import About from './component/pages/AboutUs.jsx';
import Error from './component/pages/Error.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/*" element={<Home />} />
        <Route path={`/logement/:id`} element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="/acceuil" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);