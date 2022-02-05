import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from 'react-bootstrap';
import { requestMealById } from '../../services/requestsApi';
import CardInProgressFooter from '../../components/CardInProgressFooter';
import CardInProgressHeader from '../../components/CardInProgressHeader';
import InprogressContext from '../../context/InprogressContext';
import ListIngredientsInProgress from '../../components/ListIngredientsInProgress';

function InProgressFood({ match }) {
  const { getRecipeForRende, setGetRecipeForRende } = useContext(InprogressContext);
  const [igredientsMeasures, setIgredientsMeasures] = useState([]);

  useEffect(() => {
    const { id } = match.params;
    const getMealById = async () => {
      const response = await requestMealById(id);
      setGetRecipeForRende(response[0]);
    };
    getMealById();
  }, [match.params, setGetRecipeForRende]);

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
      setIgredientsMeasures(igrendientAndMeasure);
    };
    ingredientAndMeasure();
  }, [getRecipeForRende]);

  return (
    igredientsMeasures.length > 0 ? (
      <Container>
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
          dataTestIdTitle="recipe-title"
          category={ getRecipeForRende.strCategory }
          instructions={ getRecipeForRende.strInstructions }
          dataTestIdCategory="recipe-category"
          dataTestIdInstruction="instructions"
        />
        <Button type="button" data-testid="finish-recipe-btn">Finalizar receita</Button>
      </Container>

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
