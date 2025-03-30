import React, { useState } from 'react';
import './BookCatalogue.css';

const BookCatalogue = () => {
  const [livres, setLivres] = useState([
    { id: 1, titre: 'React Avancé', auteur: 'A. Développeur', disponible: true, cote: 'DEV001' },
    { id: 2, titre: 'JavaScript Moderne', auteur: 'E. Script', disponible: false, cote: 'DEV002' },
    { id: 3, titre: 'Réseaux Informatiques', auteur: 'N. Admin', disponible: true, cote: 'RES101' }
  ]);

  const [recherche, setRecherche] = useState('');

  const livresFiltres = livres.filter(livre =>
    livre.titre.toLowerCase().includes(recherche.toLowerCase()) ||
    livre.auteur.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div className="catalogue-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher des livres..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
        />
      </div>
      
      <div className="livres-grid">
        {livresFiltres.map(livre => (
          <div key={livre.id} className="livre-card">
            <h3>{livre.titre}</h3>
            <p>Auteur: {livre.auteur}</p>
            <p>Cote: {livre.cote}</p>
            <div className={`disponibilite ${livre.disponible ? 'disponible' : 'indisponible'}`}>
              {livre.disponible ? 'Disponible' : 'Emprunté'}
            </div>
            <button className="reserver-btn" disabled={!livre.disponible}>
              {livre.disponible ? 'Réserver' : 'Indisponible'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCatalogue;