import React from 'react';
import BookCatalogue from '../../components/BookCatalogue/BookCatalogue';
import './Catalogue.css';

const Catalogue = () => {
  return (
    <div className="catalogue-page">
      <h1>Catalogue des Livres</h1>
      <BookCatalogue />
    </div>
  );
};

export default Catalogue;