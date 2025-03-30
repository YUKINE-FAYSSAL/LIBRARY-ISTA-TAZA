// pages/Profile/Profile.jsx
import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [utilisateur, setUtilisateur] = useState({
    matricule: 'OFPPT123',
    nom: 'Dupont',
    prenom: 'Jean',
    codeFil: 'DEV101',
    niveau: 'TS',
    groupe: 'G1',
    anneeInscription: '2022',
    typeEmploye: 'Étudiant',
    telephone: '0612345678',
    email: 'jean.dupont@ofppt.taza'
  });

  const [modification, setModification] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUtilisateur(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModification(false);
    // Envoyer les modifications au serveur
  };

  return (
    <div className="page-profile">
      <h1>Mon Profil</h1>
      
      {!modification ? (
        <div className="vue-profile">
          <div className="champ-profile">
            <label>Matricule:</label>
            <p>{utilisateur.matricule}</p>
          </div>
          <div className="champ-profile">
            <label>Nom:</label>
            <p>{utilisateur.nom}</p>
          </div>
          {/* Afficher les autres champs de la même manière */}
          <button onClick={() => setModification(true)}>Modifier Profil</button>
        </div>
      ) : (
        <form className="formulaire-profile" onSubmit={handleSubmit}>
          {/* Champs éditables */}
          <div className="groupe-formulaire">
            <label>Téléphone:</label>
            <input
              type="tel"
              name="telephone"
              value={utilisateur.telephone}
              onChange={handleChange}
            />
          </div>
          {/* Ajouter d'autres champs éditables */}
          <div className="actions-formulaire">
            <button type="button" onClick={() => setModification(false)}>Annuler</button>
            <button type="submit">Enregistrer</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;