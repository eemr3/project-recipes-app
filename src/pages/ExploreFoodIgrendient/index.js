import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { requestAllIngredients } from '../../services/requestsApi';
// import { Container } from './styles';
import Footer from '../../components/Footer';
import AppContext from '../../context/AppContext';

import './ExploreFoodIgrendient.css';

function ExploreFoodIgrendient() {
  const [arrayIngredients, setArrayIngredients] = useState('');
  const { handleIngredientsFilter } = useContext(AppContext);

  const ROUTE = 'themealdb';
  useEffect(() => {
    requestAllIngredients(ROUTE).then(({ meals }) => setArrayIngredients(meals));
  }, []);

  const history = useHistory();
  const handleIngredient = ({ target }) => {
    const { name } = target;
    handleIngredientsFilter(name);
    history.push('/foods');
  };

  const DOZE = 12;
  return (
    <div>
      <Header name="Explore Ingredients" enableSearch={ false } />
      <h1>Explore Food Igrendient</h1>
      {
        arrayIngredients.length
          ? arrayIngredients
            .slice(0, DOZE)
            .map(({ strIngredient }, index) => (
              <div key={ index } data-testid={ `${index}-recipe-card` }>
                <button
                  data-testid={ `${index}-ingredient-card` }
                  type="button"
                  onClick={ (e) => handleIngredient(e) }
                >
                  <img
                    src={
                      `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png`
                    }
                    alt="food-logo"
                    data-testid={ `${index}-card-img` }
                    name={ strIngredient }
                  />
                  <h4 data-testid={ `${index}-card-name` }>{strIngredient}</h4>
                </button>
              </div>
            )) : <p>OI</p>
      }
      <Footer />
    </div>
  );
}

export default ExploreFoodIgrendient;
