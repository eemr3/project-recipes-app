import React, { useState } from 'react';
// import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import ShareIcons from '../../images/shareIcon.svg';
import BlackHeartIcon from '../../images/blackHeartIcon.svg';
import BhiteHeartIcon from '../../images/whiteHeartIcon.svg';

function CardInProgressHeader({
  image,
  title,
  dataTestImg,

}) {
  const [isFavorite, setIsFavorite] = useState(false);
  // const
  // const copy = require('clipboard-copy')
  return (
    <header>
      <div>
        <img data-testid={ dataTestImg } src={ image } alt={ title } width="100%" />
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

    </header>);
}

CardInProgressHeader.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  dataTestImg: PropTypes.string.isRequired,

};

CardInProgressHeader.defaultProps = {
  image: '',
  title: '',
};

export default CardInProgressHeader;
