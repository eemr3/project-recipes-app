import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { requestMealById } from '../../services/requestsApi';
import CardInProgressFooter from '../../components/CardInProgressFooter';
import CardInProgressHeader from '../../components/CardInProgressHeader';
import InprogressContext from '../../context/InprogressContext';
import ListIngredientsInProgress from '../../components/ListIngredientsInProgress';

import './InProgressFood.css';

function InProgressFood({ match }) {
  const {
    getRecipeForRende,
    setGetRecipeForRende,
    countCheckd,
  } = useContext(InprogressContext);
  const [igredientsMeasures, setIgredientsMeasures] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();
  const { id } = match.params;

  useEffect(() => {
    const getMealById = async () => {
      const response = await requestMealById(id);
      setGetRecipeForRende(response[0]);
    };
    getMealById();
  }, [id, match.params, setGetRecipeForRende]);

  useEffect(() => {
    const ingredientAndMeasure = () => {
      const igrendientAndMeasure = [];
      const igredient = Object.keys(getRecipeForRende)
        .map((key) => (key.includes('strIngredient')
        && getRecipeForRende[key] !== '' && getRecipeForRende[key]))
        .filter((item) => item !== false && item !== null);

      const measure = Object.keys(getRecipeForRende)
        .map((key) => (key.includes('strMeasure')
      && getRecipeForRende[key] !== ' ' && getRecipeForRende[key]))
        .filter((item) => item !== false && item !== null);
      for (let index = 0; index < igredient.length; index += 1) {
        igrendientAndMeasure.push([igredient[index], measure[index]]);
      }
      setIsDisabled(() => (igredient.length !== countCheckd));
      setIgredientsMeasures(igrendientAndMeasure);
    };
    ingredientAndMeasure();
  }, [countCheckd, getRecipeForRende]);

  return (
    igredientsMeasures.length > 0 ? (
      <div>
        <CardInProgressHeader
          image={ getRecipeForRende.strMealThumb }
          title={ getRecipeForRende.strMeal }
          dataTestImg="recipe-photo"
          recipe={ getRecipeForRende }
          inProgress
        />
        <div>
          {igredientsMeasures.map((igred, index) => (
            <ListIngredientsInProgress
              titleRecipe={ getRecipeForRende.strMeal }
              key={ `${igred[0]}${igred[1]}` }
              igredient={ igred[0] }
              measure={ igred[1] }
              index={ index }
              idDrink={ getRecipeForRende.idMeal }
              dataTestIdIg={ `${index}-ingredient-step` }
              isvisibility
            />
          ))}
        </div>
        <CardInProgressFooter
          titleRecipe={ getRecipeForRende.strMeal }
          dataTestIdTitle="recipe-title"
          category={ getRecipeForRende.strCategory }
          instructions={ getRecipeForRende.strInstructions }
          dataTestIdCategory="recipe-category"
          dataTestIdInstruction="instructions"
        />
        <Button
          type="button"
          data-testid="finish-recipe-btn"
          onClick={ () => history.push('/done-recipes') }
          disabled={ isDisabled }
          className="btn-finish"
        >
          Finalizar receita
        </Button>
      </div>

    ) : (<p>Loading...</p>)

  );
}

InProgressFood.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default InProgressFood;
