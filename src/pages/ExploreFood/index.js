import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
// import { Container } from './styles';
import Footer from '../../components/Footer';
import { requestSurprise } from '../../services/requestsApi';

import './ExploreFood.css';

function ExploreFood() {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const history = useHistory();
  const handleRequestSurprise = () => {
    requestSurprise(url).then((meal) => history
      .push(`/foods/${meal.meals[0].idMeal}`));
  };

  return (
    <div>
      <Header
        classNameContent="header-explorefood-content"
        name="Explore Foods"
        enableSearch={ false }
      />
      <div className="container-buttons-exp-foods">
        <button
          type="button"
          onClick={ () => history
            .push('/explore/foods/ingredients') }
          data-testid="explore-by-ingredient"
        >
          By Ingredient

        </button>
        <button
          type="button"
          onClick={ () => history
            .push('/explore/foods/nationalities') }
          data-testid="explore-by-nationality"
        >
          By Nationality

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

export default ExploreFood;
