import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardGroup, Col, Container, Spinner } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import { requestAllIngredients } from '../../services/requestsApi';
import Footer from '../../components/Footer';
import AppContext from '../../context/AppContext';

import './ExploreFoodIgrendient.css';

function ExploreFoodIgrendient() {
  const [arrayIngredients, setArrayIngredients] = useState('');
  const { handleIngredientsFilter } = useContext(AppContext);

  const ROUTE = 'themealdb';
  useEffect(() => {
    requestAllIngredients(ROUTE).then(({ meals }) => setArrayIngredients(meals));
  }, []);

  const history = useHistory();
  const handleIngredient = ({ target }) => {
    const { name } = target;
    handleIngredientsFilter(name);
    history.push('/foods');
  };

  const DOZE = 12;
  return (
    <div>
      <Header
        name="Explore Ingredients"
        enableSearch={ false }
        classNameContent="header-ExploreFoodIgrendient-content"
      />
      <Container mt={ 3 } className="mt-4 mb-5 text-center">
        {
          arrayIngredients.length
            ? arrayIngredients
              .slice(0, DOZE)
              .map(({ strIngredient }, index) => (

                <CardGroup key={ index } className="mb-2">
                  <Col>
                    <Card
                      data-testid={ `${index}-ingredient-card` }
                      onClick={ (e) => handleIngredient(e) }
                    >
                      <Card.Img
                        variant="top"
                        src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
                        data-testid={ `${index}-card-img` }
                        alt="food-logo"
                        name={ strIngredient }
                      />
                      <Card.Body>
                        <Card.Title
                          data-testid={ `${index}-card-name` }
                          style={ { color: '#fd4d05' } }
                        >
                          {strIngredient}

                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </CardGroup>
              )) : <Spinner animation="border" role="status" />
        }
      </Container>
      <Footer />
    </div>
  );
}

export default ExploreFoodIgrendient;
