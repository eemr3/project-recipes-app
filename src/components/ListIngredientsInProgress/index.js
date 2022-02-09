import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { localStorageManager,
  getLocalStorageInProgress } from '../../functions/inProgressLocalStorageManager';
import InprogressContext from '../../context/InprogressContext';

function ListIngredientsInProgress({
  igredient,
  measure,
  index,
  idDrink,
  dataTestIdIg,
  // getRecipeForRende,
}) {
  const { setCountCheckd } = useContext(InprogressContext);
  const [checkThrough, setCheckThrough] = useState(false);
  const location = useLocation();
  const { id } = useParams();
  const handleChangeCheck = ({ target }) => {
    const type = location.pathname.includes('/drinks') ? 'cocktails' : 'meals';
    setCheckThrough((prev) => {
      localStorageManager(target, idDrink, type, !prev);
      setCountCheckd((prevS) => (checkThrough ? prevS - 1 : prevS + 1));
      return !prev;
    });
  };

  useEffect(() => {
    const route = location.pathname.includes('/drinks') ? 'drinks' : 'foods';
    const params = {
      route, id, setCheckThrough, igredient, setCountCheckd,
    };
    getLocalStorageInProgress(params);
  }, [id, igredient, location.pathname, setCountCheckd]);

  return (
    <div>
      <li>
        <label
          data-testid={ dataTestIdIg }
          htmlFor={ `${index}-${igredient}` }
          style={ { textDecoration: checkThrough ? 'line-through' : '' } }
        >
          <input
            style={ { marginRight: '4px' } }
            onChange={ handleChangeCheck }
            type="checkbox"
            name={ `${igredient},${measure}` }
            id={ `${index}-${igredient}` }
            defaultChecked={ checkThrough }
          />
          {igredient}
          {' '}
          -
          {' '}
          {measure}
        </label>
      </li>
    </div>
  );
}

ListIngredientsInProgress.propTypes = {
  igredient: PropTypes.string,
  measure: PropTypes.string,
  index: PropTypes.number,
  idDrink: PropTypes.string,
  dataTestIdIg: PropTypes.string,
};

ListIngredientsInProgress.defaultProps = {
  igredient: '',
  measure: '',
  index: '',
  idDrink: '',
  dataTestIdIg: '',

};

export default ListIngredientsInProgress;
