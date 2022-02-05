import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CardGroup, Container, Row, Card, Col, Button } from 'react-bootstrap';
import useLocalStorage from '../../../context/hooks/useLocalStorage';
import { requestById } from '../../../services/requestsApi';

export default function RecipeDoneCard() {
  const [storageInProgress, setStorageInProgress] = useState([]);
  const [drinkFilter, setDrinkfilter] = useState([]);
  const [mealFilter, setMealFilter] = useState([]);
  const [mapArray, setMapArray] = useState([]);
  const [doneRecipe, setDoneRecipe] = useLocalStorage('doneRecipe', []);
  const location = useLocation();
  const FIFTY_THOUSAND = 50000;
  useEffect(() => {
    setStorageInProgress(
      Object.keys({
        ...JSON.parse(localStorage.getItem('inProgressRecipes')).meal,
        ...JSON.parse(localStorage.getItem('inProgressRecipes')).cocktails,
      }),
    );
  }, []);

  useEffect(() => {
    let newArray = [];
    storageInProgress
      .forEach((id) => requestById(id)
        .then((values) => {
          newArray = [...newArray, values];
          setDoneRecipe(newArray);
        }));
    console.log(location.pathname);
  }, [storageInProgress]);

  useEffect(() => {
    const handleMap = () => {
      if (drinkFilter.length > 0) {
        setMapArray(drinkFilter);
      } else if (mealFilter.length > 0) {
        setMapArray(mealFilter);
      } else {
        setMapArray(doneRecipe);
      }
    };
    handleMap();
  }, [mapArray, mealFilter, drinkFilter, doneRecipe, setDoneRecipe]);

  const handleFilters = () => {
    setDrinkfilter([]);
    setMealFilter(doneRecipe.filter((value) => value.id > FIFTY_THOUSAND));
  };

  return mapArray.length > 0
    ? (
      <Container>
        <Button
          data-testid="filter-by-all-btn"
          onClick={ () => {
            setMealFilter([]);
            setDrinkfilter([]);
          } }
        >
          All

        </Button>
        <Button
          data-testid="filter-by-food-btn"
          onClick={ handleFilters }
        >
          Food

        </Button>
        <Button
          onClick={
            () => setDrinkfilter(doneRecipe.filter((value) => value.id < FIFTY_THOUSAND))
          }
          data-testid="filter-by-drink-btn"
        >
          Drinks

        </Button>
        <CardGroup>
          <Row md={ 2 } className="g-4">
            { mapArray
              .map(({
                image,
                area,
                name,
                date,
                tags,
                id,
                route,
                strAlcoholic,
              }, index) => (
                <Container key={ index }>
                  <Col
                    data-testid={ `${index}-recipe-card` }
                  >
                    <Card>
                      <a href={ `${route}/${id}` }>
                        <Card.Img
                          variant="top"
                          src={ image }
                          data-testid={ `${index}-horizontal-image` }
                        />
                        <Card.Title
                          data-testid={ `${index}-horizontal-name` }
                        >
                          {name}

                        </Card.Title>
                      </a>
                      <Card.Body>
                        <Card.Text
                          data-testid={ `${index}-horizontal-top-text` }
                        >
                          {strAlcoholic && <span>Alcoholic</span>}
                          {area}
                        </Card.Text>
                        <Card.Text
                          data-testid={ `${index}-horizontal-done-date` }
                        >
                          {date}

                        </Card.Text>
                        <Button data-testid={ `${index}-horizontal-share-btn` } />
                        <span
                          data-testid={ `${index}-${tags}-horizontal-tag` }
                        >
                          {tags}

                        </span>

                      </Card.Body>
                    </Card>
                  </Col>
                </Container>
              )) }
          </Row>
        </CardGroup>
      </Container>
    )
    : (
      <h1>sem receitas Feitas</h1>
    );
}
