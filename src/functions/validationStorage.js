const validationStorage = (id, type) => {
  const localS = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
  if (localS && localS[type] && localS[type][id]) {
    return true;
  }
  return false;
};

export default validationStorage;
