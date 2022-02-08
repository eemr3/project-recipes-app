import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import { requestSurprise } from '../../services/requestsApi';

import './ExploreDrink.css';

function ExploreDrink() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const history = useHistory();
  const handleRequestSurprise = () => {
    requestSurprise(url).then((drink) => history
      .push(`/drinks/${drink.drinks[0].idDrink}`));
  };
  return (
    <div>
      <Header
        classNameContent="header-exploredrink-content"
        name="Explore Drinks"
        enableSearch={ false }
      />
      <div className="container-buttons-exp-drinks">
        <button
          onClick={ () => history
            .push('/explore/drinks/ingredients') }
          type="button"
          data-testid="explore-by-ingredient"
        >
          By Ingredient

        </button>

        <button
          onClick={ handleRequestSurprise }
          type="button"
          data-testid="explore-surprise"
        >
          Surprise me!

        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreDrink;
