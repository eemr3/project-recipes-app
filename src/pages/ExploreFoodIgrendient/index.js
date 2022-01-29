import React from 'react';
import Header from '../../components/header/Header';

// import { Container } from './styles';
import Footer from '../../components/Footer';

function ExploreFoodIgrendient() {
  return (
    <div>
      <Header name="Explore Ingredients" enableSearch={ false } />
      <h1>Explore Food Igrendient</h1>
      <Footer />
    </div>
  );
}

export default ExploreFoodIgrendient;
