import React from 'react';
import Button from 'react-bootstrap/Button';
import Header from '../../componentes/header/Header';
// import { Container } from './styles';
import Footer from '../../componentes/Footer';

function ExploreDrinkIgrendient() {
  return (
    <div>
      <Header name="Explore Ingredients" enableSearch={ false } />
      <h1>Explore Drink Igrendient</h1>
      <Button>Ola</Button>
      <Footer />
    </div>
  );
}

export default ExploreDrinkIgrendient;
