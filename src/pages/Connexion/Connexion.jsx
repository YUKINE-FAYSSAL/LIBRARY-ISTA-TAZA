import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Connexion.css';

const Connexion = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const mockLogin = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'etudiant@ofppt.ma' && password === 'password') {
          resolve({
            token: 'mock-token-123456',
            user: {
              matricule: 'OFPPT2023',
              nom: 'Benali',
              prenom: 'Karim',
              email: 'etudiant@ofppt.ma',
              codeFil: 'DEV101',
              niveau: 'TS',
              groupe: 'G1'
            }
          });
        } else {
          reject(new Error('Email ou mot de passe incorrect'));
        }
      }, 1000);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await mockLogin(formData.email, formData.password);
      login(response.user, response.token, rememberMe);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="connexion-page">
      <div className="connexion-container">
        <h1>Connexion</h1>
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email OFPPT</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre@email.ofppt.ma"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              minLength="6"
            />
          </div>

          <div className="form-group remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Se souvenir de moi</label>
          </div>
          
          <button 
            type="submit" 
            className="connexion-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Connexion...
              </>
            ) : (
              <>
                <i className="fas fa-sign-in-alt"></i> Se connecter
              </>
            )}
          </button>
        </form>
        
        <div className="connexion-footer">
          <p>Pas encore de compte? <a href="/inscription">Créer un compte</a></p>
          <p><a href="/mot-de-passe-oublie">Mot de passe oublié?</a></p>
        </div>
      </div>
    </div>
  );
};

export default Connexion;