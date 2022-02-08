import React, { useContext, useEffect, useState } from 'react';
import { CardGroup, Container, Row, Spinner } from 'react-bootstrap';
import AppContext from '../../context/AppContext';

import CardResults from '../cardsResult/Card';

const DOZE = 12;
function GridDrinks() {
  const { arrayMeals,
    handleInputHeader,
    handleSectedButton,
    setArrayMeals,
    getMeals,
    specifiCategory,
    toggle,
    toggleBtnCategory,
    allCategory,
  } = useContext(AppContext);

  const [newArrayMeals, setNewArrayMeals] = useState([]);

  useEffect(() => {
    const controlArray = () => {
      if (arrayMeals.length > 0) {
        return arrayMeals;
      }
      if (specifiCategory.length !== 0 && toggle && allCategory !== 'All') {
        return specifiCategory;
      }
      toggleBtnCategory();
      return getMeals;
    };
    setNewArrayMeals(controlArray());
  }, [arrayMeals, getMeals, specifiCategory, toggle, toggleBtnCategory, allCategory]);

  useEffect(() => () => {
    handleInputHeader('');
    handleSectedButton('');
    setArrayMeals([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container mt={ 3 } className="mt-4 mb-5 text-center">
      {newArrayMeals.length > 0 ? (
        <CardGroup>
          <Row md={ 2 } className="g-4">
            {newArrayMeals
              .slice(0, DOZE).map(({
                idDrink,
                strDrinkThumb,
                strDrink,
                strInstructions },
              index) => (
                <CardResults
                  recipe={ strInstructions }
                  index={ index }
                  key={ index }
                  name={ strDrink }
                  image={ strDrinkThumb }
                  mealId={ idDrink }
                  url="/drinks/"
                />
              ))}
          </Row>
        </CardGroup>
      ) : (
        <Spinner animation="border" role="status" />
      )}
    </Container>
  );
}

export default GridDrinks;
