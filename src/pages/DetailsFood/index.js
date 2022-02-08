import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { requestDetailsFoods } from '../../services/requestsApi';
import CardDetailsandProgress from '../../components/CardDetailsandProgress';
import ListIgredients from '../../components/ListIgredients';
import RecomendedCard from '../../components/RecomendedCard';

import './DetailsFood.css';

function DetailsFood() {
  const [arrayDetailsFoods, setArrayDetailsFoods] = useState({});
  const [drinkData, setDrinkData] = useState([]);

  const measurmentKey = [];
  const ingredientsKeys = [];
  const drinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const SIX = 6;
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(drinkUrl)
      .then((response) => response.json())
      .then(({ drinks }) => setDrinkData(drinks.slice(0, SIX)));
  }, []);

  useEffect(() => {
    function fetchRecipe() {
      requestDetailsFoods(id).then((response) => {
        const teste = response.meals[0];
        setArrayDetailsFoods(teste);
      }).catch((error) => console.log(error));
    }
    fetchRecipe();
  }, [id]);

  function renderIngredients() {
    Object.keys(arrayDetailsFoods).map((key) => {
      if (
        key.includes('Ingredient')
        && arrayDetailsFoods[key]
        && arrayDetailsFoods[key] !== ''
      ) {
        ingredientsKeys.push(key);
      }
      if (key.includes('Measure')) {
        measurmentKey.push(key);
      }
      return (
        ingredientsKeys, measurmentKey
      );
    });
    return ingredientsKeys.map((ingredient, index) => (
      <ListIgredients
        key={ index }
        igredient={ arrayDetailsFoods[ingredient] }
        measure={ arrayDetailsFoods[measurmentKey[index]] }
        index={ index }
        isvisibility={ false }
        dataTestIdIg={ `${index}-ingredient-name-and-measure` }
      />
    ));
  }

  function renderRecomendation() {
    return (
      drinkData.map((drink, index) => (
        <RecomendedCard
          key={ index }
          foods={ drink }
          index={ index }
          str="strDrink"
          thumb="strDrinkThumb"
          link={ `/drinks/${drink.idDrink}` }
        />
      ))
    );
  }

  return (
    <div>

      <CardDetailsandProgress
        image={ arrayDetailsFoods.strMealThumb }
        title={ arrayDetailsFoods.strMeal }
        category={ arrayDetailsFoods.strCategory }
        instructions={ arrayDetailsFoods.strInstructions }
        dataTestIdTitle="recipe-title"
        dataTestImg="recipe-photo"
        dataTestIdCategory="recipe-category"
        dataTestIdInstruction="instructions"
        className="arrayDetailsFoods"
        recipe={ arrayDetailsFoods }
      />
      <section>
        { renderIngredients() }
      </section>
      <section
        style={ { width: '100%', textAlign: 'center', margin: '5px' } }
      >
        {Object.values(arrayDetailsFoods).length > 0 ? (
          <iframe
            src={ arrayDetailsFoods.strYoutube
              .replace('\\/', '//').replace('/watch?v=', '/embed/') }
            title="W3Scho"
            data-testid="video"
          />
        ) : ''}
      </section>
      <section className="recomended-conteiner">
        { renderRecomendation() }
      </section>
      <button
        className="btn-recipe"
        type="button"
        data-testid="start-recipe-btn"
        onClick={ () => history.push(`/foods/${id}/in-progress`) }
      >
        Start Recipe
      </button>
    </div>
  );
}

export default DetailsFood;
