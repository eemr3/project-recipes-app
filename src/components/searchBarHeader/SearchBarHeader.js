import React, { useContext, useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { requestByRadioChoice } from '../../services/requestsApi';

export default function SearchBarHeader() {
  const {
    handleArrayMeals,
    handleSectedButton,
    selectedButton,
    headerInputText,

  } = useContext(AppContext);

  const [routeLocation, setRouteLocation] = useState('');

  const location = useLocation();

  useEffect(() => (
    location.pathname === '/drinks'
      ? setRouteLocation('thecocktaildb') : setRouteLocation('themealdb')
  ), [location]);

  const switchHandle = () => {
    switch (selectedButton) {
    case 'Ingredient':
      requestByRadioChoice(`https://www.${routeLocation}.com/api/json/v1/1/filter.php?i=${headerInputText}`)
        .then((data) => handleArrayMeals(data));
      break;

    case 'Name':
      requestByRadioChoice(`https://www.${routeLocation}.com/api/json/v1/1/search.php?s=${headerInputText}`)
        .then((data) => handleArrayMeals(data));
      break;

    case 'First letter':
      requestByRadioChoice(`https://www.${routeLocation}.com/api/json/v1/1/search.php?f=${headerInputText}`)
        .then((data) => handleArrayMeals(data));
      break;
    default:
      break;
    }
  };

  const handlefunction = () => {
    switchHandle();
  };

  const handleRequestApi = () => (
    selectedButton === 'First letter' && headerInputText.length > 1 ? (
      global.alert('Your search must have only 1 (one) character')) : (
      handlefunction()
    )
  );

  return (
    <Container>
      <Form>
        {['radio'].map((type) => (
          <div key={ `inline-${type}` } className="mb-3">
            <Form.Check
              inline
              data-testid="ingredient-search-radio"
              label="Ingredient"
              name="group1"
              onClick={ ({ target }) => handleSectedButton(target.id) }
              type={ type }
              id="Ingredient"
            />
            <Form.Check
              inline
              data-testid="name-search-radio"
              label="Name"
              onClick={ ({ target }) => handleSectedButton(target.id) }
              name="group1"
              type={ type }
              id="Name"
            />
            <Form.Check
              inline
              data-testid="first-letter-search-radio"
              label="First letter"
              onClick={ ({ target }) => handleSectedButton(target.id) }
              type={ type }
              name="group1"
              id="First letter"
            />
            <Button
              name="search-input"
              data-testid="exec-search-btn"
              variant="outline-dark"
              onClick={ handleRequestApi }
            >
              Search
            </Button>
          </div>
        ))}
      </Form>
    </Container>
  );
}
