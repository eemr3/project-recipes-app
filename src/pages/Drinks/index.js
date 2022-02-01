import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/Footer';
import GridDrinks from '../../components/GridDrinks';

import './Drinks.css';

function Drinks() {
  return (
    <div>
      <Header
        classNameContent="header-drinks-content"
        name="Drinks"
        enableSearch
      />
      <GridDrinks />
      <Footer />
    </div>
  );
}

export default Drinks;
