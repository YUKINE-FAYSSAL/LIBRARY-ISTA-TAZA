import React, { useState } from 'react';
import './Emprunts.css';

const Emprunts = () => {
  const [ongletActif, setOngletActif] = useState('enCours');
  
  const empruntsEnCours = [
    { id: 1, livre: 'React Avancé', dateSortie: '2023-06-10', dateRetour: '2023-06-24' },
    { id: 2, livre: 'JavaScript Moderne', dateSortie: '2023-06-05', dateRetour: '2023-06-19' }
  ];
  
  const historique = [
    { id: 3, livre: 'Réseaux Informatiques', dateSortie: '2023-05-01', dateRetour: '2023-05-15' }
  ];

  return (
    <div className="emprunts-page">
      <h1>Gestion des Emprunts</h1>
      
      <div className="onglets">
        <button 
          className={ongletActif === 'enCours' ? 'actif' : ''}
          onClick={() => setOngletActif('enCours')}
        >
          Emprunts en Cours
        </button>
        <button 
          className={ongletActif === 'historique' ? 'actif' : ''}
          onClick={() => setOngletActif('historique')}
        >
          Historique
        </button>
      </div>
      
      <div className="contenu-emprunts">
        {ongletActif === 'enCours' ? (
          <table className="table-emprunts">
            <thead>
              <tr>
                <th>Livre</th>
                <th>Date Sortie</th>
                <th>Date Retour</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {empruntsEnCours.map(emprunt => (
                <tr key={emprunt.id}>
                  <td>{emprunt.livre}</td>
                  <td>{emprunt.dateSortie}</td>
                  <td>{emprunt.dateRetour}</td>
                  <td>
                    <button className="prolonger-btn">Prolonger</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="table-emprunts">
            <thead>
              <tr>
                <th>Livre</th>
                <th>Date Sortie</th>
                <th>Date Retour</th>
              </tr>
            </thead>
            <tbody>
              {historique.map(emprunt => (
                <tr key={emprunt.id}>
                  <td>{emprunt.livre}</td>
                  <td>{emprunt.dateSortie}</td>
                  <td>{emprunt.dateRetour}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Emprunts;