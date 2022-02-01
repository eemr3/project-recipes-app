import React from 'react';
import Header from '../../components/header/Header';
// import { Container } from './styles';

function FavoriteRecipes() {
  return (
    <div>
      <Header name="Favorite Recipes" enableSearch={ false } />
      <h1>Favorite Recipes</h1>
    </div>
  );
}

export default FavoriteRecipes;
