import React from 'react';
import Header from '../../components/header/Header';

// import { Container } from './styles';
import Footer from '../../components/Footer';

function ExploreFood() {
  return (
    <div>
      <Header name="Explore Foods" enableSearch={ false } />
      <h1>Explore Foods</h1>
      <Footer />
    </div>
  );
}

export default ExploreFood;
