import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Header from '../../components/Header/Header';
// import { Container } from './styles';
import Footer from '../../components/Footer';
import { requestAllIngredients } from '../../services/requestsApi';
import AppContext from '../../context/AppContext';

import './ExploreDrinkIgrendient.css';

function ExploreDrinkIgrendient() {
  const [arrayIngredients, setArrayIngredients] = useState('');
  const { handleIngredientsFilter } = useContext(AppContext);

  const DOZE = 12;
  const URL = 'thecocktaildb';
  useEffect(() => {
    requestAllIngredients(URL).then(({ drinks }) => setArrayIngredients(drinks));
  }, []);

  const history = useHistory();
  const handleIngredient = ({ target }) => {
    const { name } = target;
    handleIngredientsFilter(name);
    history.push('/drinks');
  };

  return (
    <div>
      <Header
        classNameContent="header-ExploreDrinkIgrendient-content"
        name="Explore Ingredients"
        enableSearch={ false }
      />
      <h1>Explore Drink Igrendient</h1>
      <Button>Ola</Button>
      {
        arrayIngredients.length
          ? arrayIngredients
            .slice(0, DOZE)
            .map(({ strIngredient1 }, index) => (
              <div key={ index } data-testid={ `${index}-recipe-card` }>
                <button
                  type="button"
                  onClick={ (e) => handleIngredient(e) }
                  data-testid={ `${index}-ingredient-card` }
                >
                  <img
                    src={
                      `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png`
                    }
                    alt="food-logo"
                    data-testid={ `${index}-card-img` }
                    name={ strIngredient1 }
                  />
                  <h4 data-testid={ `${index}-card-name` }>{strIngredient1}</h4>
                </button>
              </div>
            )) : <p>OI</p>
      }
      <Footer />
    </div>
  );
}

export default ExploreDrinkIgrendient;
