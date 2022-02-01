import React from 'react';
import Header from '../../components/Header/Header';

import './DoneRecipes.css';

function DoneRecipes() {
  return (
    <div>
      <Header
        classNameContent="header-donerecipes-content"
        name="Done Recipes"
        enableSearch={ false }
      />
      <h1>Done Recipes</h1>
    </div>
  );
}

export default DoneRecipes;
