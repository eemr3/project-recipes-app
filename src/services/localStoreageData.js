export const setEmailInStorage = (email) => localStorage.setItem('user', JSON.stringify({
  email }));

export const setMealsTokenInStorage = (token) => localStorage
  .setItem('mealsToken', token);

export const setCocktailsTokenInStorage = (token) => localStorage
  .setItem('cocktailsToken', token);

export const handleStorageDone = (recipes) => {
  /* alcoholicOrNot: 'Alcoholic',
      area: '',
      category: 'Ordinary Drink',
      doneDate: '02/02/2022',
      id: '17837',
      image: 'https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg',
      name: 'Adam',
      tags: ['Alcoholic', 'Holiday'],
      type: 'bebida',
  */
  localStorage.setItem('doneRecipe', JSON.stringify(recipes));
};

export const handleStorageInProgress = () => {
  const inProgressRecipes = {
    cocktails: {
      17203: {},
      17225: {},
    },
    meal: {
      52821: {},
      52948: {},
      53026: {},
    },
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
};
handleStorageInProgress();
