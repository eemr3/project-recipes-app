import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/Footer';

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
