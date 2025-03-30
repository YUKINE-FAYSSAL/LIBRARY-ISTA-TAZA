import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>BOOKBOX</h3>
          <p>Bibliothèque numérique OFPPT Taza</p>
          <p>Gestion des ressources pédagogiques</p>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: contact@bookbox-ofppt.ma</p>
          <p>Téléphone: +212 5 35 00 00 00</p>
        </div>
        
        <div className="footer-section">
          <h3>Liens rapides</h3>
          <a href="/catalogue">Catalogue</a>
          <a href="/emprunts">Mes emprunts</a>
          <a href="/connexion">Connexion</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BOOKBOX - OFPPT Taza. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;