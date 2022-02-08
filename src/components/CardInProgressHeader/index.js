import React, { useState } from 'react';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import ShareIcons from '../../images/shareIcon.svg';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

import './CardInProgressHeader.css';

function CardInProgressHeader({
  image,
  title,
  dataTestImg,
  inProgress,
  recipe,
}) {
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
      <div className="card-inprogress-header-icons">
        <img
          src={ ShareIcons }
          alt="share icon"
          data-testid="share-btn"
          onClick={ copyLink }
          aria-hidden="true"
        />

        <FavoriteButton recipe={ recipe } />
      </div>
    </header>);
}

CardInProgressHeader.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  dataTestImg: PropTypes.string.isRequired,
  inProgress: PropTypes.bool,
  recipe: PropTypes.shape({}),
};

CardInProgressHeader.defaultProps = {
  image: '',
  title: '',
  inProgress: false,
  recipe: {},
};

export default CardInProgressHeader;
