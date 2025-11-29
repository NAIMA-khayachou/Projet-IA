import React from 'react';
import '../styles/Recommandation.css';
import Recommander from '../assets/images.jpg'
import {useState} from "react"


const Recommandations = () => {
    const [query, setQuery] = useState(""); // state pour stocker la recherche
    const [results, setResults] = useState([]);
    const [selectedRecette, setSelectedRecette] = useState(null); // ← AJOUTÉ

  const handleSearch = () => {
    if(!query.trim()) return;
    
    console.log("🔍 Recherche lancée pour:", query);
    
    fetch(`http://127.0.0.1:8000/api/recommandations/?query=${query}`)
        .then((response) => {
            console.log("📡 Réponse reçue, status:", response.status);
            return response.json();
        })
        .then((data) => {
            console.log("✅ Données reçues:", data);
            console.log("📊 Nombre de résultats:", data.count);
            console.log("📝 Résultats:", data.results);
            setResults(data.results);
        })
        .catch((error) => {
            console.error("❌ Erreur:", error);
        })
  }

  const AfficheCart = (recette) => {  // ← MODIFIÉ: ajout du paramètre
    setSelectedRecette(recette);      // ← AJOUTÉ: stockage de la recette
    document.getElementById('DetailCart').classList.add('active');
  };

  const FermerModal = () => {
    document.getElementById('DetailCart').classList.remove('active');
  };

  return (
    <div>
      <div className="header-container">
        
        
        
        {/* Barre de recherche */}
        <div className="search-container">
          <input type='search' placeholder='Rechercher une recette...'  value={query} onChange={(e)=> setQuery(e.target.value)}/>
          <span onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></span>
        </div>
      </div>

      {/* Grille des recettes */}
      <div className="recipes-grid">
        {results.length === 0 ? (
          <p style={{textAlign: 'center', fontSize: '18px', color: '#666'}}>
            Recherchez une recette pour voir les résultats...
          </p>
        ) : (
          results.map((recette, index) => (
            <div key={index} className="recipe-card">
              {/* Image avec overlay */}
              <div className="recipe-card-image">
                <img 
                  src={recette.image_url || Recommander} 
                  alt={recette.name || 'Recette'}
                  onError={(e) => { e.target.src = Recommander; }}
                />
                
                {/* Boutons Like et Favoris */}
                <div className="action-buttons">
                  <button className="btn-like">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                  <button className="btn-commit">
                    <i className="fa-solid fa-comment"></i>
                  </button>
                </div>
              </div>
              
              {/* Contenu de la carte */}
              <div className="recipe-card-content">
                <h3 className="recipe-card-title">{recette.name || 'Sans nom'}</h3>
                
                {/* Temps et difficulté */}
                <div className="recipe-info">
                  <div className="recipe-time">
                    <i className="fa-regular fa-clock"></i>
                    <span>{recette.total_time ? `${recette.total_time} min` : 'N/A'}</span>
                  </div>
                </div>
                
                {/* Étoiles de notation */}
                <div className="recipe-rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star empty"></i>
                </div>
                
                {/* Bouton voir la recette */}
                <button className="btn-view-recipe" onClick={() => AfficheCart(recette)}>
                  Voir la recette
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* MODAL - Détails de la recette */}
      <div id='DetailCart'>
        <div className="modal-content">
          <button className="btn-close-modal" onClick={FermerModal}>
            <i className="fa-solid fa-times"></i>
          </button>
          
          {selectedRecette && (
            <>
              <img 
                src={selectedRecette.image_url || Recommander} 
                alt={selectedRecette.name} 
                className="modal-image"
                onError={(e) => { e.target.src = Recommander; }}
              />
              
              <div className="modal-body">
                <h2 className="modal-title">{selectedRecette.name}</h2>
                
                <div className="modal-info">
                  <div className="modal-time">
                    <i className="fa-regular fa-clock"></i>
                    <span>{selectedRecette.total_time ? `${selectedRecette.total_time} min` : 'N/A'}</span>
                  </div>
                  
                  <div className="modal-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star empty"></i>
                  </div>
                </div>
                
                {/* Ingrédients */}
                <div className="ingredients-section">
                  <h3 className="section-title">
                    <i className="fa-solid fa-list"></i>
                    Ingrédients
                  </h3>
                  <p className="instructions-text">
                    {selectedRecette.ingredients || 'Ingrédients non disponibles'}
                  </p>
                </div>
                
                {/* Instructions */}
                <div className="instructions-section">
                  <h3 className="section-title">
                    <i className="fa-solid fa-book-open"></i>
                    Instructions
                  </h3>
                  <p className="instructions-text">
                    {selectedRecette.instructions || 'Instructions non disponibles'}
                  </p>
                </div>
                
                {/* Boutons d'étoiles pour noter la recette */}
                <div className="rating-buttons">
                  <span className="rating-label">Notez cette recette :</span>
                  <button className="star-button">
                    <i className="fa-regular fa-star"></i>
                  </button>
                  <button className="star-button">
                    <i className="fa-regular fa-star"></i>
                  </button>
                  <button className="star-button">
                    <i className="fa-regular fa-star"></i>
                  </button>
                  <button className="star-button">
                    <i className="fa-regular fa-star"></i>
                  </button>
                  <button className="star-button">
                    <i className="fa-regular fa-star"></i>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recommandations;