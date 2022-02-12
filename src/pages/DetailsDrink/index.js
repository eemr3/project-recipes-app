import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { requestDetailsDrinks } from '../../services/requestsApi';
import CardDetailsandProgress from '../../components/CardDetailsandProgress';
import ListIgredients from '../../components/ListIgredients';
import RecomendedCard from '../../components/RecomendedCard';
import validationStorage from '../../functions/validationStorage';

function DetailsDrink() {
  const [foodData, setFoodData] = useState([]);
  const [arrayDetailsDrinks, setArrayDetailsDrinks] = useState({});
  const [isVisible, setIsViSible] = useState(false);
  const history = useHistory();
  const measurmentKey = [];
  const ingredientsKeys = [];
  const foodUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const SIX = 6;
  const { id } = useParams();

  useEffect(() => {
    fetch(foodUrl)
      .then((response) => response.json())
      .then(({ meals }) => setFoodData(meals.slice(0, SIX)));
  }, []);

  useEffect(() => {
    function fetchRecipe() {
      requestDetailsDrinks(id).then((response) => {
        setArrayDetailsDrinks(...response.drinks);
      });

      const itemLS = JSON.parse(localStorage.getItem('doneRecipes')) || [];
      setIsViSible(itemLS.some((item) => item.id === id) && itemLS.length !== 0);
    }
    fetchRecipe();
  }, [id]);

  function renderIngredients() {
    Object.keys(arrayDetailsDrinks).map((key) => {
      if (
        key.includes('Ingredient')
        && arrayDetailsDrinks[key]
        && arrayDetailsDrinks[key] !== ''
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
        igredient={ arrayDetailsDrinks[ingredient] }
        measure={ arrayDetailsDrinks[measurmentKey[index]] }
        index={ index }
        isvisibility={ false }
        dataTestIdIg={ `${index}-ingredient-name-and-measure` }
      />
    ));
  }

  function renderRecomendation() {
    return (
      foodData.map((meal, index) => (
        <RecomendedCard
          key={ index }
          foods={ meal }
          index={ index }
          str="strMeal"
          thumb="strMealThumb"
          link={ `/foods/${meal.idMeal}` }
        />
      ))
    );
  }

  return (
    <div>
      <div>
        <CardDetailsandProgress
          image={ arrayDetailsDrinks.strDrinkThumb }
          title={ arrayDetailsDrinks.strDrink }
          category={ arrayDetailsDrinks.strCategory }
          instructions={ arrayDetailsDrinks.strInstructions }
          alcoholicOrNot={ arrayDetailsDrinks.strAlcoholic }
          dataTestIdTitle="recipe-title"
          dataTestImg="recipe-photo"
          dataTestIdCategory="recipe-category"
          dataTestIdInstruction="instructions"
          recipe={ arrayDetailsDrinks }
        />
        <section>
          { renderIngredients() }
        </section>
        <section className="recomended-conteiner">
          { renderRecomendation() }
        </section>
        {isVisible ? '' : (
          <button
            type="button"
            data-testid="start-recipe-btn"
            className="btn-recipe "
            onClick={ () => history.push(`/drinks/${id}/in-progress`) }
          >
            {validationStorage(id, 'cocktails') ? 'Continue Recipe' : 'Start Recipe'}
          </button>
        )}
      </div>
    </div>
  );
}

export default DetailsDrink;
