import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [selectedButton, setSelectedButton] = useState('');
  const handleSectedButton = (id) => {
    setSelectedButton(id);
  };

  const [headerInputText, setHeaderInputText] = useState('');
  const handleInputHeader = (input) => {
    setHeaderInputText(input);
  };

  const [arrayMeals, setArrayMeals] = useState();
  const handleArrayMeals = ({ meals }) => {
    setArrayMeals(meals);
  };

  return (
    <AppContext.Provider
      value={ {
        handleSectedButton,
        selectedButton,
        handleInputHeader,
        headerInputText,
        handleArrayMeals,
        arrayMeals,

      } }
    >
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
