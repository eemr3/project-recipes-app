import React from 'react';
import PropType from 'prop-types';
import './RecomendedCard.css';
import { Link } from 'react-router-dom';

function RecomendedCard({ foods, index, str, thumb, link }) {
  return (
    <Link to={ link }>
      <div
        key={ index }
        data-testid={ `${index}-recomendation-card` }
        className="containerCardRecomendation"
        style={ {
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '70px',
          marginRight: '3px',
          color: 'rgb(228, 28, 21)',
        } }
      >
        <img
          src={ foods[thumb] }
          alt=""
          className="recomendedImg"
        />
        <span
          data-testid={ `${index}-recomendation-title` }
        >
          { foods[str] }
        </span>
      </div>
    </Link>
  );
}

RecomendedCard.propTypes = {
  foods: PropType.objectOf(PropType.string).isRequired,
  index: PropType.number.isRequired,
  str: PropType.string.isRequired,
  thumb: PropType.string.isRequired,
  link: PropType.string.isRequired,
};

export default RecomendedCard;
