import React from 'react';
import './Accueil.css';

const Accueil = () => {
  return (
    <div className="page-accueil">
      <section className="hero-section">
        <h1>Bienvenue à la Bibliothèque OFPPT Taza</h1>
        <p>Accédez à notre collection de ressources pédagogiques</p>
      </section>
      
      <section className="features-section">
        <div className="feature-card">
          <h3>Recherche de Documents</h3>
          <p>Explorez notre catalogue en ligne</p>
        </div>
        <div className="feature-card">
          <h3>Gestion des Emprunts</h3>
          <p>Suivez vos emprunts en cours</p>
        </div>
        <div className="feature-card">
          <h3>Réservation en Ligne</h3>
          <p>Réservez vos documents à distance</p>
        </div>
      </section>
    </div>
  );
};

export default Accueil;