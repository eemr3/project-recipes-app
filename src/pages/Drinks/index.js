import React, { useContext } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/Footer';
import AppContext from '../../context/AppContext';
import CardResults from '../../components/cardsResult/Card';

function Drinks() {
  const { arrayMeals } = useContext(AppContext);
  const DOZE = 12;

  return (
    <div>
      <Header name="Drinks" enableSearch />
      <h1>Drinks</h1>
      {arrayMeals ? arrayMeals
        .slice(0, DOZE)
        .map(({ idDrink, strDrinkThumb, strDrink }, index) => (
          <CardResults
            key={ idDrink }
            index={ index }
            image={ strDrinkThumb }
            name={ strDrink }
          />)) : <h1>sem bebida pesquisada</h1>}
      <Footer />
    </div>
  );
}

export default Drinks;
