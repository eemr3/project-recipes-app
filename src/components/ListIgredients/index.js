import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { localStorageManager,
  getLocalStorageInProgress } from '../../functions/inProgressLocalStorageManager';
// import InprogressContext from '../../context/InprogressContext';

function ListIgredients({
  igredient,
  measure,
  index,
  isvisibility,
  idDrink,
  dataTestIdIg,

}) {
  const [checkThrough, setCheckThrough] = useState(false);
  const location = useLocation();
  const { id } = useParams();

  const handleChangeCheck = ({ target }) => {
    const type = location.pathname.includes('/drinks') ? 'cocktails' : 'meals';
    setCheckThrough((prev) => {
      localStorageManager(target, type, !prev);
      return !prev;
    });
  };

  useEffect(() => {
    const route = location.pathname.includes('/drinks') ? 'drinks' : 'foods';
    getLocalStorageInProgress(route, id, setCheckThrough, igredient);
  }, [id, igredient, location.pathname]);

  return (
    <li>
      <label
        data-testid={ dataTestIdIg }
        htmlFor={ `${index}-${igredient}` }
        style={ { textDecoration: checkThrough ? 'line-through' : '' } }
      >
        {isvisibility ? <input
          onChange={ handleChangeCheck }
          type="checkbox"
          name={ idDrink }
          value={ `${igredient},${measure}` }
          id={ `${index}-${igredient}` }
          checked={ checkThrough || false }
        /> : ''}
        {igredient}
        {' '}
        -
        {' '}
        {measure}

      </label>
    </li>
  );
}

ListIgredients.propTypes = {
  igredient: PropTypes.string,
  measure: PropTypes.string,
  index: PropTypes.number,
  isvisibility: PropTypes.bool,
  idDrink: PropTypes.string,
  dataTestIdIg: PropTypes.string,
};

ListIgredients.defaultProps = {
  igredient: '',
  measure: '',
  index: '',
  isvisibility: false,
  idDrink: '',
  dataTestIdIg: '',

};

export default ListIgredients;
