import React, { useState, useEffect, useContext } from 'react';
import PropType from 'prop-types';
import AppContext from '../../context/AppContext';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function FavoriteButton({ recipe, dataTestId }) {
  let currentRecipe = {};
  const recipeName = Object.values(recipe)[1];
  const recipeId = Object.keys(recipe)[0];
  const { setFavoriteList } = useContext(AppContext);

  if (recipeId === 'idMeal') {
    currentRecipe = {
      id: recipe.idMeal,
      type: 'food',
      nationality: recipe.strArea,
      category: recipe.strCategory,
      alcoholicOrNot: '',
      name: recipe.strMeal,
      image: recipe.strMealThumb,
    };
  } else if (recipeId === 'idDrink') {
    currentRecipe = {
      id: recipe.idDrink,
      type: 'drink',
      nationality: '',
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
    };
  } else if (recipeName === 'food' || recipeName === 'drink') {
    currentRecipe = recipe;
  }

  const [stateHeart, setStateHeart] = useState(false);
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    const idType = Object.keys(recipe)[0];
    function checkFavoriteList() {
      let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if (!favoriteRecipes) {
        favoriteRecipes = [];
      }
      return ({
        checkFavorite: favoriteRecipes.some((element) => element.id === recipe[idType]),
        favoriteRecipes,
      });
    }
    const { favoriteRecipes, checkFavorite } = checkFavoriteList();
    setStateHeart(checkFavorite);
    setFavList(favoriteRecipes);
  }, [recipe, stateHeart]);

  function handleFavoriteClick() {
    if (stateHeart) {
      const indexFav = favList.findIndex((element) => (
        element.id === currentRecipe.id));
      console.log(indexFav);
      favList.splice(indexFav, 1);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favList));
      setFavoriteList(favList);
      setStateHeart(false);
    } else {
      favList.push(currentRecipe);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favList));
      setFavoriteList(favList);
      setStateHeart(true);
    }
  }

  return (
    <img
      data-testid={ dataTestId }
      src={ stateHeart ? blackHeartIcon : whiteHeartIcon }
      alt="fav button"
      onClick={ handleFavoriteClick }
      aria-hidden="true"
    />
  );
}

FavoriteButton.propTypes = {
  recipe: PropType.objectOf(PropType.string).isRequired,
  dataTestId: PropType.string.isRequired,
};

export default FavoriteButton;
