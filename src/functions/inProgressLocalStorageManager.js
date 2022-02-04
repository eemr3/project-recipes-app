export const localStorageManager = (target, type, prev) => {
  const { name, value } = target;
  const key = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
  if (prev) {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...key,
      [type]: {
        ...key[type],
        [name]: key[type]
        && key[type][name] ? [...key[type][name], value] : [value],
      },
    }));
  } else {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      ...key,
      [type]: {
        ...key[type],
        [name]: key[type][name].filter((item) => item !== value),
      },
    }));
  }
};

export const getLocalStorageInProgress = (route, id, setCheckThrough, igredient) => {
  const itemLST = JSON.parse(localStorage.getItem('inProgressRecipes')) || null;
  switch (route) {
  case 'drinks':
    if (itemLST && itemLST.cocktails) {
      setCheckThrough(itemLST.cocktails[id]
        .some((item) => item.includes(igredient)));
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
