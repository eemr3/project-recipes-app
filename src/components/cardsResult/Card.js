import React, { } from 'react';
import PropTypes from 'prop-types';

import { Container, Card } from 'react-bootstrap';

export default function CardResults({ image, name, recipe, index }) {
  return (
    <Container>
      <Card style={ { width: '162px' } }>
        <Card.Img variant="top" src={ image } data-testid={ `${index}-card-img` } />
        <Card.Body>
          <Card.Title data-testid={ `${index}-card-name` }>{name}</Card.Title>
          <Card.Text data-testid={ `${index}-recipe-card` }>
            {recipe}
          </Card.Text>
        </Card.Body>
        {/*         <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body> */}
      </Card>
    </Container>
  );
}

CardResults.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  recipe: PropTypes.string.isRequired,
};
