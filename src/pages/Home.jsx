import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./Home.css";

const recipes = [
  {
    id: 1,
    name: "Couscous Royal",
    image: "https://th.bing.com/th/id/OSK.cdb9f64681db416b62a3904e58d40f6a?w=200&h=126&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1",
    description: "Le plat traditionnel marocain par excellence",
    prepTime: "45 min"
  },
  {
    id: 2,
    name: "Tajine de Poulet aux Olives",
    image: "https://th.bing.com/th/id/OSK.8359b6e3639709b2f8f91cc4fd3098ed?w=200&h=126&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1",
    description: "Tajine savoureux aux citrons confits",
    prepTime: "60 min"
  },
  {
    id: 3,
    name: "Pastilla au Poulet",
    image: "https://th.bing.com/th/id/OIP.8dOkGBjLj55yPDcYwZeMMgHaLG?w=123&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description: "Feuilleté sucré-salé traditionnel",
    prepTime: "90 min"
  },
  {
    id: 4,
    name: "Harira",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
    description: "Soupe traditionnelle du Ramadan",
    prepTime: "40 min"
  },
  {
    id: 5,
    name: "Briouates aux Amandes",
    image: "https://th.bing.com/th/id/OSK.620c1fe00db613eeef16571bd2addadc?w=200&h=126&c=7&rs=1&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1",
    description: "Délicieux petits triangles sucrés",
    prepTime: "30 min"
  },
  {
    id: 6,
    name: "Zaalouk",
    image: "https://th.bing.com/th/id/OIP.7ul5ZArNIiBM8nzMNEb8NAHaFj?w=259&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description: "Salade d'aubergines marocaine",
    prepTime: "25 min"
  }
];

const Home = () => {
  return (
    <div className="home">
      <NavBar/>

      <main className="main-content">
        {/* HERO (bannière d'accueil) */}
        <section className="hero-section">
          <h1 className="hero-title">
            Bienvenue dans l’art culinaire marocain, là où les saveurs prennent vie
          </h1>
          <p className="hero-subtitle">
            Découvrez les saveurs authentiques du Maroc
          </p>
        </section>

        {/* SECTION RECETTES */}
        <section className="recipes-section">
          <h2 className="section-title">Recettes populaires</h2>

          <div className="recipes-cards-container">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                <div className="recipe-image-container">
                  <img 
                    src={recipe.image} 
                    alt={recipe.name}
                    className="recipe-image"
                  />
                </div>
                
                <div className="recipe-content">
                  <h3 className="recipe-name">{recipe.name}</h3>
                  <p className="recipe-description">{recipe.description}</p>
                  
                  <div className="recipe-time">
                    <span>⏱️</span>
                    <span>{recipe.prepTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;