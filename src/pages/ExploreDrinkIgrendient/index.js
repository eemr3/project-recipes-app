import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardGroup, Col, Container } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import { requestAllIngredients } from '../../services/requestsApi';
import AppContext from '../../context/AppContext';

import './ExploreDrinkIgrendient.css';

function ExploreDrinkIgrendient() {
  const [arrayIngredients, setArrayIngredients] = useState('');
  const { handleIngredientsFilter } = useContext(AppContext);

  const DOZE = 12;
  const URL = 'thecocktaildb';
  useEffect(() => {
    requestAllIngredients(URL).then(({ drinks }) => setArrayIngredients(drinks));
  }, []);

  const history = useHistory();
  const handleIngredient = ({ target }) => {
    const { name } = target;
    handleIngredientsFilter(name);
    history.push('/drinks');
  };

  return (
    <div>
      <Header
        classNameContent="header-ExploreDrinkIgrendient-content"
        name="Explore Ingredients"
        enableSearch={ false }
      />
      <Container mt={ 3 } className="mt-4 mb-5 text-center">
        {
          arrayIngredients.length
            ? arrayIngredients
              .slice(0, DOZE)
              .map(({ strIngredient1 }, index) => (
                <CardGroup
                  key={ index }
                  className="mb-2"
                  data-testid={ `${index}-recipe-card` }
                >
                  <Col>
                    <Card
                      onClick={ (e) => handleIngredient(e) }
                      data-testid={ `${index}-ingredient-card` }
                    >
                      <Card.Img
                        variant="top"
                        src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
                        alt="food-logo"
                        data-testid={ `${index}-card-img` }
                        name={ strIngredient1 }
                      />
                      <Card.Body>
                        <Card.Title
                          data-testid={ `${index}-card-name` }
                          style={ { color: '#fd4d05' } }
                        >
                          {strIngredient1}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </CardGroup>
              )) : <p>OI</p>
        }
      </Container>
      <Footer />

    </div>
  );
}

export default ExploreDrinkIgrendient;
