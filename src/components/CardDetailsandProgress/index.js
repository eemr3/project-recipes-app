import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import ShareIcons from '../../images/shareIcon.svg';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

import './CardDetailsandProgress.css';

function CardDetailsandProgress({
  image,
  title,
  category,
  alcoholicOrNot,
  instructions,
  dataTestIdTitle,
  dataTestImg,
  dataTestIdCategory,
  dataTestIdInstruction,
  recipe,
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
    <div style={ { padding: '10px' } }>
      {show ? (
        <Alert variant="success" onClose={ () => setShow(false) } dismissible>
          <Alert.Heading>Link copied!</Alert.Heading>
        </Alert>
      ) : null}
      <div>
        <img
          data-testid={ dataTestImg }
          src={ image }
          alt={ title }
          style={ { marginTop: '8px', width: '95%' } }
        />
      </div>
      <div>
        <img
          src={ ShareIcons }
          alt="Share recipe"
          onClick={ copyLink }
          data-testid="share-btn"
          aria-hidden="true"
          style={ { marginRight: '10px', cursor: 'pointer' } }
        />
        <FavoriteButton dataTestId="favorite-btn" recipe={ recipe } />
      </div>
      <h1 data-testid={ dataTestIdTitle }>{title}</h1>
      <p data-testid={ dataTestIdCategory }>{`${category} - ${alcoholicOrNot}`}</p>
      <p data-testid={ dataTestIdInstruction }>{instructions}</p>
    </div>
  );
}
CardDetailsandProgress.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  alcoholicOrNot: PropTypes.string,
  instructions: PropTypes.string,
  dataTestIdTitle: PropTypes.string.isRequired,
  dataTestImg: PropTypes.string.isRequired,
  dataTestIdCategory: PropTypes.string.isRequired,
  dataTestIdInstruction: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
};

CardDetailsandProgress.defaultProps = {
  image: '',
  title: '',
  category: '',
  instructions: '',
  alcoholicOrNot: '',
};
export default CardDetailsandProgress;
