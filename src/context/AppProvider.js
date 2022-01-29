import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [selectedButton, setSelectedButton] = useState('');
  const handleSectedButton = (id) => {
    setSelectedButton(id);
  };

  return (
    <AppContext.Provider value={ { handleSectedButton, selectedButton } }>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppProvider;
