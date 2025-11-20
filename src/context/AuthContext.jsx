// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from 'react';
import { loginUser, registerUser, logoutUser, getCurrentUser } from '../api/authApi'; // ← tes fonctions API

// 1. On crée le Context (la "boîte magique")
export const AuthContext = createContext();

// 2. Le Provider qui va entourer toute ton app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);         // infos de l'utilisateur (id, username, email, préférences…)
  const [token, setToken] = useState(null);       // JWT ou token que tu reçois du backend
  const [isLoading, setIsLoading] = useState(true); // pour afficher un Loader au démarrage

  // Au chargement de l’app → on vérifie s’il y a déjà un token valide
  useEffect(() => {
    const loadUser = async () => {
      const savedToken = localStorage.getItem('token');
      if (savedToken) {
        try {
          setToken(savedToken);
          const userData = await getCurrentUser(savedToken); // appel API /me ou /profile
          setUser(userData);
        } catch (err) {
          localStorage.removeItem('token');
          setToken(null);
        }
      }
      setIsLoading(false);
    };

    loadUser();
  }, []);

  // Fonction login
  const login = async (email, password) => {
    const data = await loginUser(email, password); // ton api/authApi.js
    localStorage.setItem('token', data.token);
    setToken(data.token);
    setUser(data.user); // ou data.profile selon ce que renvoie ton Django
  };

  // Fonction register
  const register = async (username, email, password) => {
    const data = await registerUser(username, email, password);
    localStorage.setItem('token', data.token);
    setToken(data.token);
    setUser(data.user);
  };

  // Fonction logout
  const logout = async () => {
    await logoutUser(); // optionnel : appel API pour blacklist le token côté Django
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  // Valeur qu’on met dans la boîte (tout ce qu’on veut partager partout)
  const value = {
    user,
    token,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};