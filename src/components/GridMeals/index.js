import React, { useContext, useEffect } from 'react';
import { CardGroup, Container, Row, Spinner } from 'react-bootstrap';
import AppContext from '../../context/AppContext';
import CardResults from '../cardsResult/Card';

const DOZE = 12;
function GridMeals() {
  const { arrayMeals,
    handleInputHeader,
    handleSectedButton,
    setArrayMeals,
  } = useContext(AppContext);

  useEffect(() => () => {
    handleInputHeader('');
    handleSectedButton('');
    setArrayMeals([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container mt={ 3 } className="mt-4 mb-5 text-center">
      {arrayMeals.length > 0
        ? (
          <CardGroup>
            <Row md={ 2 } className="g-4">
              { arrayMeals
                .slice(0, DOZE).map(({
                  idMeal,
                  strMealThumb,
                  strMeal,
                }, index) => (
                  <CardResults
                    key={ idMeal }
                    index={ index }
                    image={ strMealThumb }
                    name={ strMeal }
                    url="/foods/"
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
