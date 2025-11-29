import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";  // ← Correction ici
import './NavBar.css';

import ImgRecipe from '../../assets/mixing.png';
import star from '../../assets/stars.png';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("Accueil");
  const navigate = useNavigate();

  const tables = [
    { nom: "Accueil", icone: "fa-solid fa-house", path: "/" },
    { nom: "Recommandations", icone: "fa-regular fa-star", path: "/recommandations" },
    { nom: "Préférences", icone: "fa-solid fa-heart", path: "/preferences" },
  ];

  const handleClick = (table) => {
    setActiveTab(table.nom);
    navigate(table.path);
  };

  return (
    <div className="navbar-container">
      <div className="header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-icon">
              <img src={ImgRecipe} alt="Recipe" className="logo-img" />
            </div>
            <div className="title-section">
              <h1>Saveurs du Maroc</h1>
              <div className="subtitle">
                <img src={star} alt="star" className="star-icon" />
                <h4>Recommandations personnalisées pour vous</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-tabs">
        {tables.map((table) => (
          <div
            key={table.nom}
            className={`tab ${activeTab === table.nom ? "active" : ""}`}
            onClick={() => handleClick(table)}
          >
            <i className={table.icone}></i>
            <h3>{table.nom}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;