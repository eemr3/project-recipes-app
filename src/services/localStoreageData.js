export const setEmailInStorage = (email) => localStorage.setItem('user', JSON.stringify({
  email }));

export const setMealsTokenInStorage = (token) => localStorage
  .setItem('mealsToken', token);

export const setCocktailsTokenInStorage = (token) => localStorage
  .setItem('cocktailsToken', token);

/* export const handleStorageDone = () => {
  const DataStorage = [
    {
      alcoholicOrNot: '',
      area: 'Indian',
      category: 'Vegetarian',
      doneDate: '27/00/2022',
      id: '52785',
      image: 'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
      name: 'Dal fry',
      tags: ['Curry', 'Vegetarian', 'Cake'],
      type: 'comida',
    },
    {
      alcoholicOrNot: '',
      area: 'Italian',
      category: 'Pasta',
      doneDate: '03/01/2022',
      id: '52844',
      image: 'https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg',
      name: 'Lasagne',
      tags: [],
      type: 'comida',
    },
    {
      alcoholicOrNot: 'Alcoholic',
      area: '',
      category: 'Ordinary Drink',
      doneDate: '01/02/2022',
      id: '17203',
      image: 'https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg',
      name: 'Kir',
      tags: ['IBA', 'ContemporaryClassic'],
      type: 'bebida',
    },
    {
      alcoholicOrNot: 'Alcoholic',
      area: '',
      category: 'Ordinary Drink',
      doneDate: '02/02/2022',
      id: '17837',
      image: 'https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg',
      name: 'Adam',
      tags: ['Alcoholic', 'Holiday'],
      type: 'bebida',
    },

  ];
  localStorage.setItem('doneRecipe', JSON.stringify(DataStorage));
};
handleStorage(); */

export const handleStorageInProgress = () => {
  const inProgressRecipes = {
    cocktails: {
      17203: {},
      17225: {},
    },
    meal: {
      52948: {},
      53026: {},
    },
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
};
handleStorageInProgress();
