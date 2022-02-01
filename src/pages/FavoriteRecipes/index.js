import React from 'react';
import Header from '../../components/Header/Header';

import './FavoriteRecipes.css';

function FavoriteRecipes() {
  return (
    <div>
      <Header
        classNameContent="header-FavoriteRecipes-content"
        name="Favorite Recipes"
        enableSearch={ false }
      />
      <h1>Favorite Recipes</h1>
    </div>
  );
}

export default FavoriteRecipes;
