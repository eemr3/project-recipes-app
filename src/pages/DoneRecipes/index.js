import React, { } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import RecipeDoneCard from '../../components/recipeDone/RecipeDoneCard';

import './DoneRecipes.css';

function DoneRecipes() {
  return (
    <Container fluid>
      <Header
        classNameContent="header-donerecipes-content"
        name="Done Recipes"
        enableSearch={ false }
      />
      <h1>Done Recipes</h1>
      <RecipeDoneCard />
    </Container>
  );
}

export default DoneRecipes;
