import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import copy from 'clipboard-copy';
import { CardGroup, Container, Row, Card, Col, Button, Alert } from 'react-bootstrap';
import useLocalStorage from '../../../context/hooks/useLocalStorage';
// import { requestById } from '../../../services/requestsApi';
import doneRecipeManger from '../../../functions/doneRecipeManager';
import ShareIcons from '../../../images/shareIcon.svg';

export default function RecipeDoneCard() {
  const [storageInProgress, setStorageInProgress] = useState([]);
  const [drinkFilter, setDrinkfilter] = useState([]);
  const [mealFilter, setMealFilter] = useState([]);
  const [mapArray, setMapArray] = useState([]);
  const [doneRecipe, setDoneRecipe] = useLocalStorage('doneRecipes', []);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const FIFTY_THOUSAND = 50000;

  useEffect(() => {
    const MEALS = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
    const COCKTAILS = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
    setStorageInProgress(
      Object.keys({
        ...MEALS.meals,
        ...COCKTAILS.cocktails,
      }),
    );
  }, []);

  useEffect(() => {
    let newArray = [];
    storageInProgress
      .forEach((id) => doneRecipeManger(id)
        .then((values) => {
          newArray = [...newArray, values];
          setDoneRecipe(newArray);
        }));
    console.log(location.pathname);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const copyLink = (url, id) => {
    console.log(url);
    let urlCopy = window.location.href;
    switch (url) {
    case 'food':
      urlCopy = urlCopy.replace('/done-recipes', `/foods/${id}`);
      break;
    case 'drink':
      urlCopy = urlCopy.replace('/done-recipes', `/drinks/${id}`);
      break;
    default:
      break;
    }
    copy(urlCopy);
    setShow(true);
  };

  return (
    <Container>
      {show ? (
        <Alert variant="success" onClose={ () => setShow(false) } dismissible>
          <Alert.Heading>Link copied!</Alert.Heading>
        </Alert>
      ) : null}
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
      { mapArray.length > 0
        ? (
          <CardGroup>
            <Row md={ 2 } className="g-4">
              { mapArray
                .map(({
                  image,
                  nationality,
                  category,
                  name,
                  doneDate,
                  id,
                  tags,
                  type,
                  alcoholicOrNot,
                }, index) => (
                  <Container key={ index }>
                    <Col
                      data-testid={ `${index}-recipe-card` }
                    >
                      <Card>
                        <Link to={ `/${type}s/${id}` }>
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
                        </Link>
                        <Card.Body>
                          <img
                            src={ ShareIcons }
                            alt="Share recipe"
                            onClick={ () => copyLink(type, id) }
                            data-testid={ `${index}-horizontal-share-btn` }
                            aria-hidden="true"
                            style={ { marginRight: '10px', cursor: 'pointer' } }
                          />
                          <Card.Text
                            data-testid={ `${index}-horizontal-top-text` }
                          >
                            {alcoholicOrNot && <span>Alcoholic</span>}
                            {nationality}
                            {' '}
                            -
                            {' '}
                            {category}
                          </Card.Text>
                          <Card.Text
                            data-testid={ `${index}-horizontal-done-date` }
                          >
                            {doneDate}

                          </Card.Text>
                          {tags ? tags.map((tag, ind) => (
                            <span
                              style={ { display: 'inline-block', marginRight: '3px' } }
                              key={ ind }
                              data-testid={ `${index}-${tag}-horizontal-tag` }
                            >
                              {tag}

                            </span>
                          )) : ''}

                        </Card.Body>
                      </Card>
                    </Col>
                  </Container>
                )) }
            </Row>
          </CardGroup>
        ) : (
          <h1>sem receitas Feitas</h1>
        )}
    </Container>
  );
}
