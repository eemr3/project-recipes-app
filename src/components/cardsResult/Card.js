import React, { } from 'react';
import PropTypes from 'prop-types';

import { Card, Col } from 'react-bootstrap';

export default function CardResults({ image, name, index }) {
  return (

    <Col data-testid={ `${index}-recipe-card` }>
      <Card>
        <Card.Img variant="top" src={ image } data-testid={ `${index}-card-img` } />
        <Card.Body>
          <Card.Title data-testid={ `${index}-card-name` }>{name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>

  );
}

CardResults.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  // recipe: PropTypes.string.isRequired,
};
