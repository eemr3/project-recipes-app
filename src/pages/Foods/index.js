import React from 'react';
import Header from '../../componentes/header/Header';
import Footer from '../../componentes/Footer';

function Foods() {
  return (
    <div>
      <Header name="Explore Foods" enableSearch />
      <h1>Foods</h1>
      <Footer />
    </div>
  );
}

export default Foods;
