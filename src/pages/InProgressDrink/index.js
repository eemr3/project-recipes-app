import React, { useContext, useEffect, useState } from 'react';

import { Button, Container, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ListIgredients from '../../components/ListIgredients';
import { requestCocktailById } from '../../services/requestsApi';
import InprogressContext from '../../context/InprogressContext';
import CardInProgressHeader from '../../components/CardInProgressHeader';
import CardInProgressFooter from '../../components/CardInProgressFooter';

function InProgressDrink({ match }) {
  const [getRecipeForRende, setGetRecipeForRende] = useState({});
  const { igredientsMeasures, setIgredientsMeasures } = useContext(InprogressContext);

  useEffect(() => {
    const { id } = match.params;
    const getCocktailById = async () => {
      const response = await requestCocktailById(id);
      setGetRecipeForRende(response[0]);
    };

    getCocktailById();
  }, [match.params]);

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
  }, [getRecipeForRende, setIgredientsMeasures]);

  return (
    igredientsMeasures.length > 0 ? (
      <Container>
        <CardInProgressHeader
          image={ getRecipeForRende.strDrinkThumb }
          title={ getRecipeForRende.strDrink }
          dataTestImg="recipe-photo"
        />
        <ListGroup>
          {igredientsMeasures.map((igred, index) => (
            <ListIgredients
              key={ igred[0] }
              igredient={ igred[0] }
              measure={ igred[1] }
              index={ index }
              idDrink={ getRecipeForRende.idDrink }
              isvisibility
              dataTestIdIg={ `${index}-ingredient-step` }
              igredientsMeasures={ igredientsMeasures }
            />
          ))}
        </ListGroup>
        <CardInProgressFooter
          dataTestIdTitle="recipe-title"
          category={ getRecipeForRende.strCategory }
          instructions={ getRecipeForRende.strInstructions }
          dataTestIdCategory="recipe-category"
          dataTestIdInstruction="instructions"

        />
        <Button
          type="button"
          data-testid="finish-recipe-btn"

        >
          Finalizar receita

        </Button>
      </Container>

    ) : (<p>Loading...</p>)

  );
}

InProgressDrink.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
export default InProgressDrink;
