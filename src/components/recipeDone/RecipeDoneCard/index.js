import React, { useEffect, useState } from 'react';
/* import { CardGroup, Container, Row, Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; */
import { requestById } from '../../../services/requestsApi';

const FIVE_THOUSAND = 5000;
export default function RecipeDoneCard() {
  const [storageInProgress, setStorageInProgress] = useState([]);
  const [requisitionData, setRequisitionData] = useState([]);
  /*   const handleRequisitionData = () => {
    setStorageInProgress({ ...JSON.parse(localStorage.getItem('inProgressRecipes')).meal,
      ...JSON.parse(localStorage.getItem('inProgressRecipes')).cocktails });
    return setRequisitionData(Object.keys(storageInProgress).forEach((id) => {
      if (Number(id) > FIVE_THOUSAND) {
        requestById('themealdb', id)
          .then((newMeals) => setRequisitionData([...requisitionData, newMeals]));
      } else {
        requestById('thecocktaildb', id)
          .then((newDrinks) => setRequisitionData([...requisitionData, newDrinks]));
      }
    }));
  }; */
  console.log(requisitionData);

  useEffect(() => {
    setStorageInProgress({ ...JSON.parse(localStorage.getItem('inProgressRecipes')).meal,
      ...JSON.parse(localStorage.getItem('inProgressRecipes')).cocktails });
    setRequisitionData(Object.keys(storageInProgress).forEach((id) => {
      if (Number(id) > FIVE_THOUSAND) {
        requestById('themealdb', id)
          .then((newMeals) => setRequisitionData([...requisitionData, newMeals]));
      } else {
        requestById('thecocktaildb', id)
          .then((newDrinks) => setRequisitionData([...requisitionData, newDrinks]));
      }
    }));
  }, []);
  /*  console.log(Object.keys(storageInProgress)); */
  return (
    <h1>sem receitas Feitas</h1>
  /*  <Container mt={ 3 } className="mt-4 mb-5 text-center">
      {localStorageData.length > 0
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
                { localStorageData
                  .map(({
                    image,
                    area,
                    name,
                    doneDate, tags, alcoholicOrNot, id,
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
                              {alcoholicOrNot.length > 0 && alcoholicOrNot }
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
    )

     </Container> */
  );
}
