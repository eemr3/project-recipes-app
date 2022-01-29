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

export const requestNationality = () => {
  console.log('Requisição a Api dos Nacionalidade');
};

export const requestCategories = () => {
  console.log('Requisição a Api dos Categorias');
};
