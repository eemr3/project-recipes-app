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
            <Card.Title
              data-testid={ `${index}-card-name` }
              style={ { color: '#fd4d05' } }
            >
              {name}

            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Link>
  );
}

CardResults.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
  mealId: PropTypes.string,
  url: PropTypes.string,
};

CardResults.defaultProps = {
  image: '',
  name: '',
  index: 0,
  mealId: '',
  url: '',
};
