import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { mockfavorites } from '../../services/requestsApi';

import './FavoriteRecipes.css';

function FavoriteRecipes() {
  const [arrayFavorites, setArrayFavorites] = useState([]);
  const [drinkFilter, setDrinkfilter] = useState([]);
  const [mealFilter, setMealFilter] = useState([]);
  const [mapArray, setMapArray] = useState([]);

  useEffect(() => {
    const handleMap = () => {
      if (drinkFilter.length > 0) {
        setMapArray(drinkFilter);
      } else if (mealFilter.length > 0) {
        setMapArray(mealFilter);
      } else {
        setMapArray(arrayFavorites);
      }
    };
    handleMap();
  }, [mapArray, mealFilter, drinkFilter, arrayFavorites]);

  useEffect(() => {
    mockfavorites();
    setArrayFavorites(
      JSON.parse(localStorage.getItem('favoriteRecipe')),
    );
  }, []);

  const handleFilters = () => {
    setDrinkfilter([]);
    setMealFilter(arrayFavorites.filter((value) => value.type === 'comida'));
  };

  return (
    <div>
      <Header
        classNameContent="header-FavoriteRecipes-content"
        name="Favorite Recipes"
        enableSearch={ false }
      />
      <h1>Favorite Recipes</h1>

      <section>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => {
            setMealFilter([]);
            setDrinkfilter([]);
          } }
        >
          All
        </button>

        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ handleFilters }
        >
          Foods
        </button>

        <button
          onClick={
            () => setDrinkfilter(arrayFavorites
              .filter((value) => value.type === 'bebida'))
          }
          data-testid="filter-by-drink-btn"
          type="button"
        >
          Drinks
        </button>
      </section>

      <section>
        {
          mapArray.length ? (
            mapArray.map(({
              image,
              name,
              area,
              id,
              category,
              type,
              alcoholicOrNot,
            }, index) => (
              <div key={ index } data-testid={ `${index}-recipe-card` }>
                <a href={ `/${type}/${id}` }>
                  <img
                    data-testid={ `${index}-horizontal-image ` }
                    style={ { width: '300px' } }
                    src={ image }
                    alt="recipe-favorite"
                  />
                </a>
                <h2 data-testid={ `${index}-horizontal-name` }>{name}</h2>
                <span
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {
                    alcoholicOrNot.length ? alcoholicOrNot : `${area} - ${category}`
                  }
                </span>
              </div>
            ))
          ) : (
            <h1>Nenhuma receita aidna</h1>
          )
        }
      </section>
    </div>
  );
}

export default FavoriteRecipes;
