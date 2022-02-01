import React, { useContext, useEffect } from 'react';
import { CardGroup, Container, Row, Spinner } from 'react-bootstrap';
import AppContext from '../../context/AppContext';

import CardResults from '../cardsResult/Card';

const DOZE = 12;
function GridDrinks() {
  const { arrayMeals,
    handleInputHeader,
    handleSectedButton,
    setArrayMeals,
  } = useContext(AppContext);

  useEffect(() => () => {
    console.log('desmontado');
    handleInputHeader('');
    handleSectedButton('');
    setArrayMeals([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container mt={ 3 } className="mt-4 mb-5 text-center">
      {arrayMeals.length > 0 ? (
        <CardGroup>
          <Row md={ 2 } className="g-4">
            {arrayMeals
              .slice(0, DOZE).map(({
                idDrink,
                strDrinkThumb,
                strDrink,
                strInstructions },
              index) => (
                <CardResults
                  recipe={ strInstructions }
                  index={ index }
                  key={ idDrink }
                  name={ strDrink }
                  image={ strDrinkThumb }
                  drinkId={ idDrink }
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
