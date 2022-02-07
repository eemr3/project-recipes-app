import React, { useState } from 'react';
import PropTypes from 'prop-types';

import InprogressContext from './InprogressContext';

function InprogressProvider({ children }) {
  const [getRecipeForRende, setGetRecipeForRende] = useState({});
  const [igredientsMeasures, setIgredientsMeasures] = useState([]);
  const [isStarted, setIsStarted] = useState({
    bool: false,
    idItem: 0,
  });
  const [countCheckd, setCountCheckd] = useState(0);
  const [isComplet, setIsComplet] = useState(false);

  return (
    <InprogressContext.Provider
      value={ {
        igredientsMeasures,
        setIgredientsMeasures,
        getRecipeForRende,
        setGetRecipeForRende,
        countCheckd,
        setCountCheckd,
        isComplet,
        setIsComplet,
        isStarted,
        setIsStarted,
      } }
    >
      {children}
    </InprogressContext.Provider>
  );
}

InprogressProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default InprogressProvider;
