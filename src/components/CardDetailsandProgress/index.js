import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import ShareIcons from '../../images/shareIcon.svg';
import BlackHeartIcon from '../../images/blackHeartIcon.svg';

import './CardDetailsandProgress.css';

function CardDetailsandProgress({
  image,
  title,
  category,
  alcohol,
  instructions,
  dataTestIdTitle,
  dataTestImg,
  dataTestIdCategory,
  dataTestIdInstruction,
}) {
  const [pageURL, setPageURL] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setPageURL(window.location.href);
  }, []);

  const copyLink = () => {
    copy(pageURL);
    setShow(true);
  };

  return (
    <div>
      {show ? (
        <Alert variant="success" onClose={ () => setShow(false) } dismissible>
          <Alert.Heading>Link copied!</Alert.Heading>
        </Alert>
      ) : null}
      <div>
        <img data-testid={ dataTestImg } src={ image } alt={ title } />
      </div>
      <div>
        <button type="button" onClick={ copyLink } data-testid="share-btn">
          <img src={ ShareIcons } alt="Share recipe" />
        </button>
        <button type="button">
          <img
            className="share-btn"
            src={ BlackHeartIcon }
            alt="Favorite recipe"
            data-testid="favorite-btn"
          />
        </button>
      </div>
      <h1 data-testid={ dataTestIdTitle }>{title}</h1>
      <p data-testid={ dataTestIdCategory }>{`${category} - ${alcohol}`}</p>
      <p data-testid={ dataTestIdInstruction }>{instructions}</p>
    </div>
  );
}
CardDetailsandProgress.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  alcohol: PropTypes.string.isRequired,
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
