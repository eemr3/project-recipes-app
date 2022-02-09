import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import GridDrinks from '../../components/GridDrinks';
import CategoryButtons from '../../components/CategoryButtons';
import AppContext from '../../context/AppContext';

import './Drinks.css';

function Drinks() {
  const {
    categoryButtons,
    getSpecificCategories,
    setAllCategoryBtn,
  } = useContext(AppContext);
  return (
    <div>
      <Header
        classNameContent="header-drinks-content"
        name="Drinks"
        enableSearch
      />
      <CategoryButtons
        categoryBtn={ categoryButtons }
        handleClickCategory={ getSpecificCategories }
        setAllCategory={ setAllCategoryBtn }
      />
      <GridDrinks />
      <Footer />
    </div>
  );
}

export default Drinks;
