import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";
import { recipes } from "../data/recipes";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <main className="main-content">
        {/* HERO (bannière d'accueil) */}
        <section className="hero-section">
          <h1 className="hero-title">
            Bienvenue dans les recettes et la cuisine marocaine
          </h1>
          <p className="hero-subtitle">
            Découvrez les saveurs authentiques du Maroc
          </p>
        </section>

        {/* SECTION RECETTES */}
        <section className="recipes-section">
          <h2 className="section-title">Recettes populaires</h2>

          <div className="recipes-cards-container">
            {recipes.slice(0, 5).map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
