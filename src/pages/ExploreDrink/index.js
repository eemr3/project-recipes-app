import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/header/Header';
// import { Container } from './styles';
import Footer from '../../components/Footer';
import { requestSurprise } from '../../services/requestsApi';

function ExploreDrink() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const history = useHistory();
  const handleRequestSurprise = () => {
    requestSurprise(url).then((drink) => history
      .push(`/drinks/${drink.drinks[0].idDrink}`));
  };
  return (
    <div>
      <Header name="Explore Drinks" enableSearch={ false } />
      <h1>Explore Drink</h1>
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
      <Footer />
    </div>
  );
}

export default ExploreDrink;
