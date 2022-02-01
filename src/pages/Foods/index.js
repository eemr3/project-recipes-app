import React, { useContext, useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/Footer';
import AppContext from '../../context/AppContext';
import GridMeals from '../../components/GridMeals';

import './Foods.css';

function Foods() {
  const {
    handleInputHeader,
    handleSectedButton,
    setArrayMeals,
  } = useContext(AppContext);

  useEffect(() => () => {
    handleInputHeader('');
    handleSectedButton('');
    setArrayMeals([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header
        name="Foods"
        enableSearch
        classNameContent="header-foods-content "
      />
      <GridMeals />
      <Footer />
    </div>
  );
}

export default Foods;
