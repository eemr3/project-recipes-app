import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { requestCocktailById } from '../../services/requestsApi';
import InprogressContext from '../../context/InprogressContext';
import CardInProgressHeader from '../../components/CardInProgressHeader';
import CardInProgressFooter from '../../components/CardInProgressFooter';
import ListIngredientsInProgress from '../../components/ListIngredientsInProgress';

function InProgressDrink({ match }) {
  const {
    igredientsMeasures,
    setIgredientsMeasures,
    countCheckd,
  } = useContext(InprogressContext);
  const [getRecipeForRende, setGetRecipeForRende] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const history = useHistory();

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

      setIsDisabled(() => (igredient.length !== countCheckd));

      setIgredientsMeasures(igrendientAndMeasure);
    };

    ingredientAndMeasure();
  }, [countCheckd, getRecipeForRende, setIgredientsMeasures]);

  return (
    igredientsMeasures.length > 0 ? (
      <Container>
        <CardInProgressHeader
          image={ getRecipeForRende.strDrinkThumb }
          title={ getRecipeForRende.strDrink }
          dataTestImg="recipe-photo"
          recipe={ getRecipeForRende }
          inProgress
        />
        <ListGroup>
          {igredientsMeasures.map((igred, index) => (
            <ListIngredientsInProgress
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
          onClick={ () => history.push('/done-recipes') }
          disabled={ isDisabled }
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
