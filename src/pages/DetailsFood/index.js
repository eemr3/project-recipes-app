import React from 'react';
import { useHistory } from 'react-router-dom';

// import { Container } from './styles';

function DetailsFood() {
  const history = useHistory();
  return (
    <div>
      <h1>Details Food</h1>
      <button type="button" onClick={ () => history.push('/done-recipes') }>
        DoneRecipe
      </button>
    </div>
  );
}

export default DetailsFood;
