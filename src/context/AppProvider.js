import React from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const AppProvider = ({ children }) => (
  <AppContext.Provider value="Oi começamos">
    {children}
  </AppContext.Provider>
);

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppProvider;
