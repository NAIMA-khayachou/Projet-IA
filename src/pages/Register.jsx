import React from 'react';

import '../styles/Register.css';
const Register = () => {
  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Inscription</h1>
        <p className="register-subtitle">Créez votre compte pour commencer</p>
        
        <form className="register-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="votre@email.com"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              placeholder="Votre nom d'utilisateur"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="••••••••"
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirmer le mot de passe</label>
            <input 
              type="password" 
              id="confirm-password" 
              name="confirm-password" 
              placeholder="••••••••"
              required 
            />
          </div>

          <button type="submit" className="register-btn">
            S'inscrire
          </button>
        </form>

        <div className="register-footer">
          Vous avez déjà un compte ? <a href="/login">Se connecter</a>
        </div>
      </div>
    </div>
  );
};

export default Register;