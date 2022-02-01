import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
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
  const history = useHistory();
  const location = useLocation();

  const handleMeals = (data) => {
    setArrayMeals(data.meals);
    if (data.meals.length === 1) {
      history.push(`/foods/${data.meals[0].idMeal}`);
      console.log(data.meals);
    }
  };
  const handleDrinks = (data) => {
    setArrayMeals(data.drinks);
    if (data.drinks.length === 1) {
      history.push(`/drinks/${data.drinks[0].idDrink}`);
    }
  };

  const verifyerArrayMeals = (data) => {
    if (location.pathname === '/drinks') {
      handleDrinks(data);
    } else if (location.pathname === '/foods') {
      handleMeals(data);
    }
  };

  const handleArrayMeals = (value) => {
    if (value.meals === null || value.drinks === null) {
      return (global.alert('Sorry, we haven\'t found any recipes for these filters.'));
    }

    verifyerArrayMeals(value);
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
