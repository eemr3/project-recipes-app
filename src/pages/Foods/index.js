import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import GridMeals from '../../components/GridMeals';

import './Foods.css';
import AppContext from '../../context/AppContext';
import CategoryButtons from '../../components/CategoryButtons';

function Foods() {
  const { categoryButtons,
    getSpecificCategories,
    setAllCategoryBtn,
  } = useContext(AppContext);
  return (
    <div>
      <Header
        name="Foods"
        enableSearch
        classNameContent="header-foods-content "
      />
      <CategoryButtons
        categoryBtn={ categoryButtons }
        handleClickCategory={ getSpecificCategories }
        setAllCategory={ setAllCategoryBtn }
      />
      <GridMeals />

      <Footer />
    </div>
  );
}

export default Foods;
