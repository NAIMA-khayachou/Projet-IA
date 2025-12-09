import React, { useState } from 'react';

import '../styles/Register.css';
const Register = () => {
   const[username,setusername]=useState("")
   const[email,setemail]=useState("")
   const[password,setpassword]=useState("")
   const[confirmpassword,setconfrimpassword]=useState("")
  function stockerBase(){
       const data={
         'email':email,
         'username':username,
         'password':password
       }
       const response=fetch("http://127.0.0.1:8000/utilisateurs/",{
        method:"Post",
       })
  }
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
              value={email}
              onChange={(e)=setNom(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              placeholder="Votre nom d'utilisateur"
              value={username}
              onChange={(e)=setusername(e.target.value)}
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
               value={password}
              onChange={(e)=setpassword(e.target.value)}
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
               value={password}
              onChange={(e)=setconfrimpassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="register-btn" onClick={stockerBase}>
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