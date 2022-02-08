import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import InprogressContext from '../../context/InprogressContext';

function ListIgredients({
  igredient,
  measure,
  index,
  isvisibility,
  idDrink,
  dataTestIdIg,
}) {
  // const { setSaveInLocalStorage } = useContext(InprogressContext);
  const [checkThrough, setCheckThrough] = useState(false);
  const [dataCheck, setDataCheck] = useState([]);

  const handleChangeCheck = ({ target }) => {
    setCheckThrough(target.checked);
    setDataCheck([]);
    setSaveInLocalStorage({
      cocktails: {
        [idDrink]: [dataCheck],
      },
    });
  };

  return (
    <li data-testid={ dataTestIdIg } style={ { listStyle: 'none', padding: '10px' } }>
      <label
        htmlFor={ `${index}-step` }
        style={ { textDecoration: checkThrough ? 'line-through' : '' } }
      >
        {isvisibility ? <input
          onChange={ handleChangeCheck }
          type="checkbox"
          name={ idDrink }
          id={ `${index}-step` }
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
  idDrink: PropTypes.number,
  dataTestIdIg: PropTypes.string,
};

ListIgredients.defaultProps = {
  igredient: '',
  measure: '',
  index: '',
  isvisibility: false,
  idDrink: 0,
  dataTestIdIg: '',
};

export default ListIgredients;
