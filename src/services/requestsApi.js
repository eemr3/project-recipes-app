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
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const requestSpecificCategoryOfDrinks = async (drinks) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drinks}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
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

// export const requestById = async (id) => {
//   const now = new Date();
//   const date = { data: `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}` };
//   const MAGIC = 50000;

//   if (Number(id) > MAGIC) {
//     try {
//       const response1 = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
//       const object1 = await response1.json();
//       // console.log(object1);
//       const datameals = object1.meals !== null ? object1.meals : [];
//       // console.log(meals);
//       const newMeals = { ...datameals[0], ...date };
//       const { idMeal, strArea, strCategory, strMealThumb, strTags, strMeal } = newMeals;

//       const mealObject = {
//         doneDate: newMeals.data,
//         id: idMeal,
//         image: strMealThumb,
//         name: strMeal,
//         tags: strTags !== null ? strTags.split(',') : [],
//         nationality: strArea,
//         category: strCategory,
//         type: 'food',
//       };
//       return mealObject;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   try {
//     const response2 = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
//     const object2 = await response2.json();
//     const { drinks } = object2;
//     const newDrinks = { ...drinks[0], ...date };
//     const { idDrink, strDrinkThumb, strTags, strDrink, strAlcoholic } = newDrinks;
//     const drinkObject = {
//       doneDate: newDrinks.data,
//       id: idDrink,
//       image: strDrinkThumb,
//       tags: strTags !== null ? strTags.split(',') : [],
//       name: strDrink,
//       alcoholicOrNot: strAlcoholic,
//       type: 'drink',
//     };
//     return drinkObject;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const requestDetailsDrinks = async (idDrink) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
  try {
    const response = await fetch(URL);
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error);
  }
};

export const requestDetailsFoods = async (idFood) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idFood}`;
  try {
    const response = await fetch(URL);
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error);
  }
};

export const requestMealById = async (id) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const requestCocktailById = async (id) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};
