import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-description">
        <p>
          Plateforme intelligente pour recommander des recettes marocaines selon vos goûts.
          Découvrez les meilleures recettes marocaines grâce à notre système IA.
        </p>
      </div>

      <div className="footer-legal">
        <p>© 2025 Moroccan Recipes Recommender — Tous droits réservés.</p>
        <a href="#">Politique de confidentialité</a>
        <span> | </span>
        <a href="#">Conditions d'utilisation</a>
      </div>
    </footer>
  );
};

export default Footer;