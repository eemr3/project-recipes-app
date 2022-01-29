import React, { useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import AppContext from '../../context/AppContext';

export default function SearchBarHeader() {
  const { handleSectedButton } = useContext(AppContext);
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
            >
              Search
            </Button>
          </div>
        ))}
      </Form>
    </Container>
  );
}
