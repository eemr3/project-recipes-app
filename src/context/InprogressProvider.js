import React, { useState } from 'react';
import PropTypes from 'prop-types';

import InprogressContext from './InprogressContext';

function InprogressProvider({ children }) {
  const [igredientsMeasures, setIgredientsMeasures] = useState([]);

  return (
    <InprogressContext.Provider
      value={ {
        igredientsMeasures,
        setIgredientsMeasures,
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
