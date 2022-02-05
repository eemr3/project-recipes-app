export const localStorageManager = (target, idDrink, type, prev) => {
  const { name } = target;
  const key = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
  if (prev) {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...key,
      [type]: {
        ...key[type],
        [idDrink]: key[type]
        && key[type][idDrink] ? [...key[type][idDrink], name] : [name],
      },
    }));
  } else {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...key,
      [type]: {
        ...key[type],
        [idDrink]: key[type][idDrink].filter((item) => item !== name),
      },
    }));
  }
};

export const getLocalStorageInProgress = (route,
  // eslint-disable-next-line max-params
  id, setCheckThrough, igredient, setCountCheckd) => {
  const itemLST = JSON.parse(localStorage.getItem('inProgressRecipes')) || null;
  switch (route) {
  case 'drinks':
    if (itemLST && itemLST.cocktails) {
      setCheckThrough(itemLST.cocktails[id]
        .some((item) => item.includes(igredient)));
      console.log(itemLST.cocktails[id]);
      setCountCheckd(itemLST.cocktails[id].length);
    }
    break;
  case 'foods':
    if (itemLST && itemLST.meals) {
      setCheckThrough(itemLST.meals[id]
        .some((item) => item.includes(igredient)));
    }
    break;
  default:
    break;
  }
};
