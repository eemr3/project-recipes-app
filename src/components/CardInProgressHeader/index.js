import React, { useState } from 'react';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import ShareIcons from '../../images/shareIcon.svg';
import BlackHeartIcon from '../../images/blackHeartIcon.svg';
import BhiteHeartIcon from '../../images/whiteHeartIcon.svg';

// const TWO_TIME = 2000;
function CardInProgressHeader({
  image,
  title,
  dataTestImg,
  inProgress,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const [show, setShow] = useState(false);

  const copyLink = () => {
    let urlCopy = window.location.href;
    if (inProgress) urlCopy = urlCopy.replace('/in-progress', '');
    copy(urlCopy);
    setShow(true);
  };

  return (
    <header>
      {show ? (
        <Alert variant="success" onClose={ () => setShow(false) } dismissible>
          <Alert.Heading>Link copied!</Alert.Heading>
        </Alert>
      ) : null}
      <div>
        <img data-testid={ dataTestImg } src={ image } alt={ title } width="100%" />
      </div>
      <div>
        <button data-testid="share-btn" type="button" onClick={ copyLink }>
          <img src={ ShareIcons } alt="share icon" />
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
  inProgress: PropTypes.string,
};

CardInProgressHeader.defaultProps = {
  image: '',
  title: '',
  inProgress: '',
};

export default CardInProgressHeader;
