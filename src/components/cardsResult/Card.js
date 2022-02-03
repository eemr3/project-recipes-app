import React, { } from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CardResults({
  image, name, index, url, mealId }) {
  return (
    <Link to={ `${url}${mealId}` }>
      <Col
        data-testid={ `${index}-recipe-card` }
      >
        <Card>
          <Card.Img variant="top" src={ image } data-testid={ `${index}-card-img` } />
          <Card.Body>
            <Card.Title data-testid={ `${index}-card-name` }>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Link>
  );
}

CardResults.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  mealId: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
