import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Inscription.css';

const Inscription = () => {
  const [formData, setFormData] = useState({
    matricule: '',
    nom: '',
    prenom: '',
    email: '',
    motDePasse: '',
    confirmerMotDePasse: '',
    filiere: '',
    niveau: '',
    groupe: ''
  });

  const [erreurs, setErreurs] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validerFormulaire = () => {
    const nouvellesErreurs = {};
    
    if (!formData.matricule) nouvellesErreurs.matricule = 'Matricule requis';
    if (!formData.nom) nouvellesErreurs.nom = 'Nom requis';
    if (!formData.prenom) nouvellesErreurs.prenom = 'Prénom requis';
    if (!formData.email.includes('@')) nouvellesErreurs.email = 'Email invalide';
    if (formData.motDePasse.length < 6) nouvellesErreurs.motDePasse = '6 caractères minimum';
    if (formData.motDePasse !== formData.confirmerMotDePasse) {
      nouvellesErreurs.confirmerMotDePasse = 'Les mots de passe ne correspondent pas';
    }
    if (!formData.filiere) nouvellesErreurs.filiere = 'Filière requise';
    
    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validerFormulaire()) {
      console.log('Inscription soumise:', formData);
      navigate('/connexion');
    }
  };

  return (
    <div className="inscription-page">
      <div className="inscription-container">
        <h1>Créer un compte</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Matricule OFPPT*</label>
              <input
                type="text"
                name="matricule"
                value={formData.matricule}
                onChange={handleChange}
                className={erreurs.matricule ? 'error' : ''}
              />
              {erreurs.matricule && <span className="error-message">{erreurs.matricule}</span>}
            </div>
            
            <div className="form-group">
              <label>Nom*</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className={erreurs.nom ? 'error' : ''}
              />
              {erreurs.nom && <span className="error-message">{erreurs.nom}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Prénom*</label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                className={erreurs.prenom ? 'error' : ''}
              />
              {erreurs.prenom && <span className="error-message">{erreurs.prenom}</span>}
            </div>
            
            <div className="form-group">
              <label>Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={erreurs.email ? 'error' : ''}
              />
              {erreurs.email && <span className="error-message">{erreurs.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Mot de passe*</label>
              <input
                type="password"
                name="motDePasse"
                value={formData.motDePasse}
                onChange={handleChange}
                className={erreurs.motDePasse ? 'error' : ''}
              />
              {erreurs.motDePasse && <span className="error-message">{erreurs.motDePasse}</span>}
            </div>
            
            <div className="form-group">
              <label>Confirmer mot de passe*</label>
              <input
                type="password"
                name="confirmerMotDePasse"
                value={formData.confirmerMotDePasse}
                onChange={handleChange}
                className={erreurs.confirmerMotDePasse ? 'error' : ''}
              />
              {erreurs.confirmerMotDePasse && <span className="error-message">{erreurs.confirmerMotDePasse}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Filière*</label>
              <select
                name="filiere"
                value={formData.filiere}
                onChange={handleChange}
                className={erreurs.filiere ? 'error' : ''}
              >
                <option value="">Sélectionner une filière</option>
                <option value="DEV">Développement Digital</option>
                <option value="RES">Réseaux Informatiques</option>
                <option value="INF">Infographie</option>
              </select>
              {erreurs.filiere && <span className="error-message">{erreurs.filiere}</span>}
            </div>
            
            <div className="form-group">
              <label>Niveau</label>
              <select
                name="niveau"
                value={formData.niveau}
                onChange={handleChange}
              >
                <option value="TS">Technicien Spécialisé</option>
                <option value="T">Technicien</option>
                <option value="Q">Qualification</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Groupe</label>
            <input
              type="text"
              name="groupe"
              value={formData.groupe}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="inscription-button">S'inscrire</button>
        </form>

        <div className="connexion-link">
          <p>Déjà un compte? <Link to="/connexion">Se connecter</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Inscription;