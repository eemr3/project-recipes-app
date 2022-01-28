import React from 'react';
import Header from '../../componentes/header/Header';
// import { Container } from './styles';
import Footer from '../../componentes/Footer';

function Explore() {
  return (
    <div>
      <Header name="Explore" enableSearch={ false } />
      <h1>Explore</h1>
      <Footer />
    </div>
  );
}

export default Explore;
