export const setEmailInStorage = (email) => localStorage.setItem('user', JSON.stringify({
  email }));

export const setMealsTokenInStorage = (token) => localStorage
  .setItem('mealsToken', token);

export const setCocktailsTokenInStorage = (token) => localStorage
  .setItem('cocktailsToken', token);

export const setRecepeProgressInStorage = (recipe) => localStorage
  .setItem('inProgressRecipes', JSON.stringify(recipe));
