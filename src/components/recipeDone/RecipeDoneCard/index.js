import React, { useEffect, useState } from 'react';
import { CardGroup, Container, Row, Card, Col, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import useLocalStorage from '../../../context/hooks/useLocalStorage';
import { requestById } from '../../../services/requestsApi';

export default function RecipeDoneCard() {
  const [storageInProgress, setStorageInProgress] = useState([]);
  const [doneRecipe, setDoneRecipe] = useLocalStorage('doneRecipe', []);

  useEffect(() => {
    setStorageInProgress(
      Object.keys({
        ...JSON.parse(localStorage.getItem('inProgressRecipes')).meal,
        ...JSON.parse(localStorage.getItem('inProgressRecipes')).cocktails,
      }),
    );
    /* setIsLoading(true); */
  }, []);

  useEffect(() => {
    let newArray = [];
    storageInProgress
      .forEach((id) => requestById(id)
        .then((values) => {
          newArray = [...newArray, values];
          setDoneRecipe(newArray);
        }));
  }, [storageInProgress]);

  return doneRecipe.length > 0
    ? (
      <Container>
        <Button data-testid="filter-by-all-btn">All</Button>
        <Button
          data-testid="filter-by-food-btn"
        >
          Food

        </Button>
        <Button data-testid="filter-by-drink-btn">Drinks</Button>
        <CardGroup>
          <Row md={ 2 } className="g-4">
            { doneRecipe
              .map(({
                image,
                area,
                name,
                doneDate, tags, id, strAlcoholic,
              }, index) => (
                <Link key={ index } to="/">
                  <Col
                    onClick={ () => handleDoneRecipes(id) }
                    data-testid={ `${index}-recipe-card` }
                  >
                    <Card>
                      <Card.Img
                        variant="top"
                        src={ image }
                        data-testid={ `${index}-horizontal-image ` }
                      />
                      <Card.Body>
                        <Card.Title
                          data-testid={ `${index}-horizontal-name` }
                        >
                          {name}

                        </Card.Title>
                        <Card.Text
                          data-testid={ `${index}-horizontal-top-text` }
                        >
                          {strAlcoholic && <span>Alcoholic</span>}
                          {area}
                        </Card.Text>
                        <Card.Text
                          data-testid={ `${index}-horizontal-done-date` }
                        >
                          {doneDate}

                        </Card.Text>
                        <Button data-testid={ `${index}-horizontal-share-btn` } />
                        <span>{tags}</span>

                      </Card.Body>
                    </Card>
                  </Col>
                </Link>
              )) }
          </Row>
        </CardGroup>
      </Container>
    )
    : (
      <h1>sem receitas Feitas</h1>
    );
}
