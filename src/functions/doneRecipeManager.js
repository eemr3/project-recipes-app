import { requestMealById, requestCocktailById } from '../services/requestsApi';

async function doneRecipeManger(id) {
  const now = new Date();
  const date = { data: `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}` };
  const MAGIC = 50000;

  if (Number(id) > MAGIC) {
    const dataMeals = await requestMealById(id);
    // console.log(dataMeals);
    const newMeals = { ...dataMeals[0], ...date };
    const { idMeal, strArea, strCategory, strMealThumb, strTags, strMeal } = newMeals;

    const mealObject = {
      doneDate: newMeals.data,
      id: idMeal,
      image: strMealThumb,
      name: strMeal,
      tags: strTags.split(','),
      nationality: strArea,
      category: strCategory,
      type: 'food',
    };
    return mealObject;
  }

  const object2 = await requestCocktailById(id);
  const { drinks } = object2;
  const newDrinks = { ...drinks[0], ...date };
  const { idDrink, strDrinkThumb, strTags, strDrink, strAlcoholic } = newDrinks;
  const drinkObject = {
    doneDate: newDrinks.data,
    id: idDrink,
    image: strDrinkThumb,
    tags: strTags !== null ? strTags.split(',') : [],
    name: strDrink,
    alcoholicOrNot: strAlcoholic,
    type: 'drink',
  };
  return drinkObject;
}

export default doneRecipeManger;
