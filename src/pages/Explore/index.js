import React from 'react';
import Header from '../../components/header/Header';
// import { Container } from './styles';
import Footer from '../../components/Footer';

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
