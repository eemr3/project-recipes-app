import React, { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import { Alert } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import ShareIcons from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

import './FavoriteRecipes.css';

function FavoriteRecipes() {
  const [arrayFavorites, setArrayFavorites] = useState([]);
  const [drinkFilter, setDrinkfilter] = useState([]);
  const [mealFilter, setMealFilter] = useState([]);
  const [mapArray, setMapArray] = useState([]);
  const [show, setShow] = useState(false);

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
    const favorite = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setArrayFavorites(favorite);
  }, []);

  const handleFilters = () => {
    setDrinkfilter([]);
    setMealFilter(arrayFavorites.filter((value) => value.type === 'comida'));
  };

  const copyLink = (url, id) => {
    let urlCopy = window.location.href;
    switch (url) {
    case 'food':
      urlCopy = urlCopy.replace('/favorite-recipes', `/foods/${id}`);
      break;
    case 'drink':
      urlCopy = urlCopy.replace('/favorite-recipes', `/drinks/${id}`);
      break;
    default:
      break;
    }
    copy(urlCopy);
    setShow(true);
  };

  const handleFavorite = (id) => {
    const resultFavorite = arrayFavorites.filter((fav) => fav.id !== id);
    setArrayFavorites(resultFavorite);
    localStorage.setItem('favoriteRecipes', JSON.stringify(resultFavorite));
  };

  return (
    <div>
      {show ? (
        <Alert variant="success" onClose={ () => setShow(false) } dismissible>
          <Alert.Heading>Link copied!</Alert.Heading>
        </Alert>
      ) : null}
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
              nationality,
              id,
              category,
              type,
              alcoholicOrNot,
            }, index) => (
              <div key={ index } data-testid={ `${index}-recipe-card` }>
                <a href={ `/${type}s/${id}` }>
                  <img
                    data-testid={ `${index}-horizontal-image` }
                    style={ { width: '290px' } }
                    src={ image }
                    alt="recipe-favorite"
                  />
                </a>
                <h2 data-testid={ `${index}-horizontal-name` }>{name}</h2>
                <span
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {
                    alcoholicOrNot || `${nationality} - ${category}`
                  }
                </span>
                <img
                  src={ ShareIcons }
                  alt="Share recipe"
                  onClick={ () => copyLink(type, id) }
                  data-testid={ `${index}-horizontal-share-btn` }
                  aria-hidden="true"
                  style={ { marginLeft: '10px', cursor: 'pointer' } }
                />
                <img
                  src={ blackHeartIcon }
                  alt="Share recipe"
                  onClick={ () => handleFavorite(id) }
                  aria-hidden="true"
                  style={ { marginLeft: '10px', cursor: 'pointer' } }
                  data-testid={ `${index}-horizontal-favorite-btn` }
                />
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
