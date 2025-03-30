import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Accueil from './pages/Accueil/Accueil';
import Catalogue from './pages/Catalogue/Catalogue';
import Emprunts from './pages/Emprunts/Emprunts';
import Profile from './pages/Profile/Profile';
import Inscription from './pages/Inscription/Inscription';
import Reservation from './pages/Reservation/Reservation';
import Notifications from './components/Notifications/Notifications';
import Connexion from './pages/Connexion/Connexion';
import { AuthContext } from './context/AuthContext';
import './App.css';

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = React.useContext(AuthContext);

  if (isLoading) {
    return <div className="loading-spinner">Chargement...</div>;
  }

  return user ? children : <Navigate to="/connexion" replace />;
};

function App() {
  const { user } = React.useContext(AuthContext);
  const location = useLocation();

  return (
    <div className="app">
      <Navbar />
      <Notifications />
      <main className="contenu-principal">
        <Routes>
          {/* Si l'utilisateur n'est pas connecté et essaye d'accéder à "/", il est redirigé vers "/connexion" */}
          <Route path="/" element={user ? <Accueil /> : <Navigate to="/connexion" replace />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          
          <Route path="/emprunts" element={
            <ProtectedRoute>
              <Emprunts />
            </ProtectedRoute>
          } />
          
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          
          <Route path="/reservation" element={
            <ProtectedRoute>
              <Reservation />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
