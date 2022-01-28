import React from 'react';
import Header from '../../componentes/header/Header';
// import { Container } from './styles';

function DoneRecipes() {
  return (
    <div>
      <Header name="Done Recipes" enableSearch={ false } />
      <h1>Done Recipes</h1>
    </div>
  );
}

export default DoneRecipes;
