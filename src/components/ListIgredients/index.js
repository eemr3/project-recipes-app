import React from 'react';
import PropTypes from 'prop-types';

function ListIgredients({ igredient, measure, index, isvisibility }) {
  return (
    <li data-testid={ `${index}-ingredient-step` }>
      {isvisibility ? <input
        type="checkbox"
        name=""
        id=""
      /> : ''}
      {igredient}
      {' '}
      -
      {' '}
      {measure}
    </li>
  );
}

ListIgredients.propTypes = {
  igredient: PropTypes.string.isRequired,
  measure: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isvisibility: PropTypes.bool.isRequired,
};
export default ListIgredients;
