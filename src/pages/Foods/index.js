import React, { useContext } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/Footer';
import AppContext from '../../context/AppContext';
import CardResults from '../../components/cardsResult/Card';
/* import { requestAllFoods } from '../../services/requestsApi'; */
const DOZE = 12;
function Foods() {
  const { arrayMeals } = useContext(AppContext);

  return (
    <div>
      <Header name="Explore Foods" enableSearch />
      <h1>Foods</h1>
      {arrayMeals ? arrayMeals
        .slice(0, DOZE)
        .map(({ strMealThumb, strMeal, strInstructions }, index) => (
          <CardResults
            key={ index }
            index={ index }
            recipe={ strInstructions }
            image={ strMealThumb }
            name={ strMeal }
          />)) : <h1>sem comida pesquisada</h1>}
      <Footer />
    </div>
  );
}

export default Foods;
