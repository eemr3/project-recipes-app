import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ShareIcons from '../../images/shareIcon.svg';
import BlackHeartIcon from '../../images/blackHeartIcon.svg';
import BhiteHeartIcon from '../../images/whiteHeartIcon.svg';

function CardDetailsandProgress({
  image,
  title,
  category,
  instructions,
  dataTestIdTitle,
  dataTestImg,
  dataTestIdCategory,
  dataTestIdInstruction,

}) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div>
      <div>
        <img data-testid={ dataTestImg } src={ image } alt={ title } />
      </div>
      <div>
        <button
          onClick={ () => {} }
          type="button"
          data-testid="share-btn"
        >
          <img src={ ShareIcons } alt="Share recipe" />
        </button>
        <button
          onClick={ () => setIsFavorite(!isFavorite) }
          type="button"
          data-testid="favorite-btn"
        >
          <img
            src={ isFavorite ? BlackHeartIcon : BhiteHeartIcon }
            alt="Favorite recipe"
          />
        </button>
      </div>
      <h1 data-testid={ dataTestIdTitle }>{title}</h1>
      <p data-testid={ dataTestIdCategory }>{category}</p>
      <p data-testid={ dataTestIdInstruction }>{instructions}</p>
    </div>
  );
}

CardDetailsandProgress.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  instructions: PropTypes.string,
  dataTestIdTitle: PropTypes.string.isRequired,
  dataTestImg: PropTypes.string.isRequired,
  dataTestIdCategory: PropTypes.string.isRequired,
  dataTestIdInstruction: PropTypes.string.isRequired,
};

CardDetailsandProgress.defaultProps = {
  image: '',
  title: '',
  category: '',
  instructions: '',
};
export default CardDetailsandProgress;
