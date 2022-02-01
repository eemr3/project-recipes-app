import React, { } from 'react';
import PropTypes from 'prop-types';

import { Card } from 'react-bootstrap';

export default function CardResults({ image, name, index }) {
  return (

    <Card style={ { width: '162px' } } data-testid={ `${index}-recipe-card` }>
      <Card.Img variant="top" src={ image } data-testid={ `${index}-card-img` } />
      <Card.Body>
        <Card.Title data-testid={ `${index}-card-name` }>{name}</Card.Title>
      </Card.Body>
    </Card>

  );
}

CardResults.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
