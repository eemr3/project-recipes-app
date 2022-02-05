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
export const requestByNationality = async (nationalty) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationalty}`;
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

export const requestById = async (id) => {
  const now = new Date();
  const date = { data: `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}` };
  const MAGIC = 50000;

  if (Number(id) > MAGIC) {
    const response1 = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const object1 = await response1.json();
    const { meals } = object1;
    const newMeals = { ...meals[0], ...date };
    const { idMeal, strArea, strMealThumb, strTags, strMeal } = newMeals;

    const mealObject = {
      date: newMeals.date,
      id: idMeal,
      image: strMealThumb,
      name: strMeal,
      tags: strTags,
      strArea,
      route: '/foods',
    };
    return mealObject;
  }

  const response2 = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const object2 = await response2.json();
  const { drinks } = object2;
  const newDrinks = { ...drinks[0], ...date };
  const { idDrink, strDrinkThumb, strTags, strDrink, strAlcoholic } = newDrinks;

  const drinkObject = {
    date: newDrinks.date,
    id: idDrink,
    image: strDrinkThumb,
    tags: strTags,
    name: strDrink,
    strAlcoholic,
    route: '/drinks',
  };
  return drinkObject;
};
