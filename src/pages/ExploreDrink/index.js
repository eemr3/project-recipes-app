import React from 'react';
import Header from '../../componentes/header/Header';
// import { Container } from './styles';
import Footer from '../../componentes/Footer';

function ExploreDrink() {
  return (
    <div>
      <Header name="Explore Drinks" enableSearch={ false } />
      <h1>Explore Drink</h1>
      <Footer />
    </div>
  );
}

export default ExploreDrink;
