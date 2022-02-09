import React, { useContext, useEffect, useState } from 'react';
import { CardGroup, Container, Row, Spinner } from 'react-bootstrap';
import AppContext from '../../context/AppContext';
import CardResults from '../cardsResult/Card';

const DOZE = 12;
function GridMeals() {
  const { arrayMeals,
    handleInputHeader,
    handleSectedButton,
    setArrayMeals,
    getMeals,
    specifiCategory,
    setSpecifiCategory,
    toggle,
    allCategory,
  } = useContext(AppContext);

  const [newArrayMeals, setNewArrayMeals] = useState([]);

  useEffect(() => {
    const controlArray = () => {
      if (specifiCategory.length > 0 && toggle === false && allCategory !== 'All') {
        setNewArrayMeals(specifiCategory);
      } else if (arrayMeals.length > 0) {
        setNewArrayMeals(arrayMeals);
      } else if (allCategory === 'All') {
        setNewArrayMeals(getMeals);
      }
    };
    controlArray();
  }, [arrayMeals, getMeals, specifiCategory, toggle, allCategory]);

  useEffect(() => () => {
    handleInputHeader('');
    handleSectedButton('');
    setArrayMeals([]);
    setSpecifiCategory([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container mt={ 3 } className="mt-4 mb-5 text-center">
      {newArrayMeals.length > 0
        ? (
          <CardGroup>
            <Row md={ 2 } className="g-4">
              { newArrayMeals
                .slice(0, DOZE).map(({
                  idMeal,
                  strMealThumb,
                  strMeal,
                }, index) => (
                  <CardResults
                    key={ index }
                    index={ index }
                    image={ strMealThumb }
                    name={ strMeal }
                    url="/foods/"
                    mealId={ idMeal }
                  />
                )) }
            </Row>
          </CardGroup>)
        : (
          <Spinner className="align-middle" animation="border" role="status" />
        )}

    </Container>
  );
}

export default GridMeals;
