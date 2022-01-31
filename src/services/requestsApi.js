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
  const response = await fetch('https://themealdb.com/api/json/v1/1/search.php?s=A');
  const object = await response.json();
  return object;
};

export const requestAllDrinks = async () => {
  const response = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=A');
  const object = await response.json();
  return object;
};

export const requestNationality = () => {
  console.log('Requisição a Api dos Nacionalidade');
};

export const requestCategories = () => {
  console.log('Requisição a Api dos Categorias');
};

export const requestSurprise = async (url) => {
  const response = await fetch(url);
  const object = await response.json();
  return object;
};
