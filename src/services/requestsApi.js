export const requestByRadioChoice = async (URL) => {
  try {
    const response = await fetch(URL);
    const object = response.json();
    return object;
  } catch (error) {
    return (
      console.log('deu ruim'),
      console.error(error)
    );
  }
};

export const requestAllFoods = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export const requestAllDrinks = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(URL);
  const data = await response.json();
  return data.drinks;
};

export const requestCategoriesMeals = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(URL);
  const data = await response.json();
  return data.meals;
};

export const requestCategoriesDrinks = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(URL);
  const data = await response.json();
  return data.drinks;
};

export const requestSpecificCategoryOfFood = async (foods) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${foods}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data.meals;
};

export const requestSpecificCategoryOfDrinks = async (drinks) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drinks}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data.drinks;
};

export const requestAllNationality = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const response = await fetch(URL);
  const object = await response.json();
  return object;
};

export const requestAllIngredients = async (route) => {
  const URL = `https://www.${route}.com/api/json/v1/1/list.php?i=list`;
  const response = await fetch(URL);
  const object = await response.json();
  return object;
};

export const requestByIngredients = async (route, ingredient) => {
  const URL = `https://www.${route}.com/api/json/v1/1/filter.php?i=${ingredient}`;

  const response = await fetch(URL);
  const object = await response.json();
  return object;
};

export const requestSurprise = async (url) => {
  const response = await fetch(url);
  const object = await response.json();
  return object;
};
