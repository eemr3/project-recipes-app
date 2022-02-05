import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import {
  requestAllDrinks,
  requestAllFoods,
  requestByIngredients,
  requestCategoriesDrinks,
  requestSpecificCategoryOfDrinks,
  requestSpecificCategoryOfFood,
  requestCategoriesMeals } from '../services/requestsApi';

const AppProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const [getMeals, setGetMeals] = useState([]);
  const [allCategory, setAllCategory] = useState('');
  const [nameBtn, setNameBtn] = useState('');
  const [categoryButtons, setCategaryButtons] = useState([]);
  const [specifiCategory, setSpecifiCategory] = useState([]);
  const [selectedButton, setSelectedButton] = useState('');
  const [favoriteList, setFavoriteList] = useState([]);
  const handleSectedButton = (id) => {
    setSelectedButton(id);
  };

  const [headerInputText, setHeaderInputText] = useState('');
  const handleInputHeader = (input) => {
    setHeaderInputText(input);
  };

  const [arrayMeals, setArrayMeals] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const handleMeals = (data) => {
    setArrayMeals(data.meals);
    if (data.meals.length === 1) {
      history.push(`/foods/${data.meals[0].idMeal}`);
    }
  };
  const handleDrinks = (data) => {
    setArrayMeals(data.drinks);
    if (data.drinks.length === 1) {
      history.push(`/drinks/${data.drinks[0].idDrink}`);
    }
  };

  const handleIngredientsFilter = (ingredientName) => {
    console.log(ingredientName);
    if (location.pathname === '/explore/drinks/ingredients') {
      const COCKTAIL = 'thecocktaildb';
      requestByIngredients(COCKTAIL, ingredientName)
        .then(({ drinks }) => setArrayMeals(drinks));
    } else if (location.pathname === '/explore/foods/ingredients') {
      const MEAL = 'themealdb';
      requestByIngredients(MEAL, ingredientName)
        .then(({ meals }) => setArrayMeals(meals));
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

  useEffect(() => {
    if (location.pathname === '/drinks') {
      const getDrinksData = async () => {
        const response = await requestAllDrinks();
        setGetMeals(response);
      };
      const getCategoryBtnMeals = async () => {
        const response = await requestCategoriesDrinks();
        setCategaryButtons(response);
      };
      getDrinksData();
      getCategoryBtnMeals();
    } else if (
      location.pathname === '/foods'
      || location.pathname === '/explore/foods/nationalities') {
      const getMealsData = async () => {
        const response = await requestAllFoods();
        setGetMeals(response.meals);
      };
      const getCategoryBtnDrink = async () => {
        const response = await requestCategoriesMeals();
        setCategaryButtons(response);
      };
      getMealsData();
      getCategoryBtnDrink();
    }
  }, [location.pathname]);

  const getSpecificCategories = async (category) => {
    console.log(category);
    if (location.pathname === '/foods') {
      const response = await requestSpecificCategoryOfFood(category);
      setSpecifiCategory(response);
    } else if (location.pathname === '/drinks') {
      const response = await requestSpecificCategoryOfDrinks(category);
      setSpecifiCategory(response);
    }
  };

  const setAllCategoryBtn = (category) => {
    setAllCategory(category);
  };

  const toggleBtnCategory = (value) => {
    if (nameBtn === value) {
      setToggle(!toggle);
    }
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
        setArrayMeals,
        handleIngredientsFilter,
        getMeals,
        categoryButtons,
        setNameBtn,
        specifiCategory,
        getSpecificCategories,
        toggleBtnCategory,
        toggle,
        setAllCategory,
        allCategory,
        setAllCategoryBtn,
        favoriteList,
        setFavoriteList,
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
