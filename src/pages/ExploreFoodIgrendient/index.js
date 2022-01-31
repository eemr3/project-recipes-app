import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import { requestAllIngredients } from '../../services/requestsApi';
// import { Container } from './styles';
import Footer from '../../components/Footer';

function ExploreFoodIgrendient() {
  const [arrayIngredients, setArrayIngredients] = useState('');

  const ROUTE = 'themealdb';
  useEffect(() => {
    requestAllIngredients(ROUTE).then(({ meals }) => setArrayIngredients(meals));
  }, []);

  const DOZE = 12;
  return (
    <div>
      <Header name="Explore Ingredients" enableSearch={ false } />
      <h1>Explore Food Igrendient</h1>
      {
        arrayIngredients.length
          ? arrayIngredients
            .slice(0, DOZE)
            .map(({ strIngredient, strDescription }, index) => (

              <div
                data-testid={ `${index}-ingredient-card` }
                key={ index }
              >
                <img
                  src={
                    `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png`
                  }
                  alt="food-logo"
                  data-testid={ `${index}-card-img` }
                />
                <h4 data-testid={ `${index}-card-name` }>{strIngredient}</h4>
                <p>{strDescription}</p>
              </div>)) : <p>OI</p>
      }
      <Footer />
    </div>
  );
}

export default ExploreFoodIgrendient;
