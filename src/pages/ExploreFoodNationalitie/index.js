import React, { useEffect, useState, useContext } from 'react';
import {
  Container,
  Row,
  CardGroup,
  Spinner,
} from 'react-bootstrap';
import CardResults from '../../components/cardsResult/Card';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import { requestAllNationality, requestByNationality } from '../../services/requestsApi';
import AppContext from '../../context/AppContext';

import './ExploreFoodNationalitie.css';

const DOZE = 12;
function ExploreFoodNationalitie() {
  const [allNationality, setAllNationality] = useState([]);
  const [filteredByArea, setFilteredByArea] = useState([]);
  const [newArray, setNewArray] = useState([]);
  const { getMeals } = useContext(AppContext);

  useEffect(() => {
    requestAllNationality().then(({ meals }) => setAllNationality(meals));
    const controlArray = () => {
      if (filteredByArea.length > 0) {
        return filteredByArea;
      }
      return getMeals;
    };
    setNewArray(controlArray());
  }, [getMeals, filteredByArea]);

  const handleSelectedNationalites = (target) => {
    if (target.value === 'All') {
      setNewArray(getMeals);
      setFilteredByArea([]);
    } else {
      requestByNationality(target.value).then(({ meals }) => setFilteredByArea(meals));
    }
  };

  return (
    <div>
      <Header
        classNameContent="header-ExploreFoodNationalitie-content"
        name="Explore Nationalities"
        enableSearch
      />
      <div className="content-select">
        <select
          data-testid="explore-by-nationality-dropdown"
          onChange={ ({ target }) => handleSelectedNationalites(target) }
        >
          <option data-testid="All-option">All</option>
          {
            allNationality.length >= 1
              ? allNationality.map(({ strArea }, index) => (
                <option
                  data-testid={ `${strArea}-option` }
                  key={ index }
                >
                  {strArea}
                </option>)) : <option>oI</option>
          }
        </select>
      </div>
      <Container mt={ 3 } className="mt-4 mb-5 text-center">
        {newArray.length > 0
          ? (
            <CardGroup>
              <Row md={ 2 } className="g-4">
                { newArray
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
                      mealId={ idMeal }
                    />
                  )) }
              </Row>
            </CardGroup>)
          : (
            <Spinner className="align-middle" animation="border" role="status" />
          )}

      </Container>
      <Footer />
    </div>
  );
}

export default ExploreFoodNationalitie;
