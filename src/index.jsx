import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import "../src/styles/index.scss";

import Home from './component/pages/home/Home';
import Logement from './component/pages/location/Location.jsx';
import About from './component/pages/about/AboutUs.jsx';
import Error from './component/pages/error/Error.jsx';

import Header from './component/header/Header.jsx';
import Footer from './component/footer/Footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path={`/location/:id`} element={<Logement />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);