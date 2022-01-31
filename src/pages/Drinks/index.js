import React, { useContext, useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/Footer';
import AppContext from '../../context/AppContext';
import { requestAllDrinks } from '../../services/requestsApi';
import CardResults from '../../components/cardsResult/Card';

function Drinks() {
  const { arrayMeals } = useContext(AppContext);
  /* const [allDrinks, setAllDrinks] = useState(); */

  useEffect(() => {
    requestAllDrinks().then((drinks) => setAllDrinks(drinks));
  });
  return (
    <div>
      <Header name="Drinks" enableSearch />
      <h1>Drinks</h1>
      {arrayMeals ? arrayMeals
        .map(({
          idDrink, strDrinkThumb, strDrink, strInstructions, index,
        }) => (<CardResults
          key={ idDrink }
          index={ index }
          recipe={ strInstructions }
          image={ strDrinkThumb }
          name={ strDrink }
        />)) : <h1>sem bebida pesquisada</h1>}
      <Footer />
    </div>
  );
}

export default Drinks;
