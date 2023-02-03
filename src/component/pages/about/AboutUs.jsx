// import AboutUsBg from "../../../assets/aboutUsBg.png"
// <img src={AboutUsBg} className="about_bg" alt="logo" />

import React, { useState } from "react";

const About = () => {
  const [index, setIndex] = useState(0);
  const texts = [
    "Sécurité: Nous nous engageons à assurer la sécurité de vos données et de vos informations personnelles.",
    "Fiabilité: Nous garantissons la fiabilité de nos produits et services pour vous offrir une expérience utilisateur de qualité.",
    "Respect: Nous respectons votre vie privée et vos droits en matière de protection de vos données personnelles.",
    "Responsabilité: Nous sommes entièrement responsables de nos actions et nous travaillons sans relâche pour assurer la satisfaction de nos clients."
  ];

  const handleSecurityClick = () => {
    setIndex(0);
  };

  const handleReliabilityClick = () => {
    setIndex(1);
  };

  const handleRespectClick = () => {
    setIndex(2);
  };

  const handleResponsibilityClick = () => {
    setIndex(3);
  };

  return (
    <div>
      <p>{texts[index]}</p>
      <div>
        <button onClick={handleSecurityClick}>Sécurité</button>
        <button onClick={handleReliabilityClick}>Fiabilité</button>
        <button onClick={handleRespectClick}>Respect</button>
        <button onClick={handleResponsibilityClick}>Responsabilité</button>
      </div>
    </div>
  );
};

export default About;
