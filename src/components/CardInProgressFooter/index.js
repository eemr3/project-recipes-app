import React from 'react';
import PropTypes from 'prop-types';

function CardInProgressFooter({
  title,
  category,
  instructions,
  dataTestIdTitle,
  dataTestIdCategory,
  dataTestIdInstruction,
}) {
  return (
    <footer>
      <h1 data-testid={ dataTestIdTitle }>{title}</h1>
      <p data-testid={ dataTestIdCategory }>{category}</p>
      <p
        data-testid={ dataTestIdInstruction }
      >
        {instructions}

      </p>
    </footer>
  );
}

CardInProgressFooter.propTypes = {
  category: PropTypes.string,
  instructions: PropTypes.string,
  dataTestIdTitle: PropTypes.string.isRequired,
  dataTestIdCategory: PropTypes.string.isRequired,
  dataTestIdInstruction: PropTypes.string.isRequired,
  title: PropTypes.string,
};

CardInProgressFooter.defaultProps = {
  title: '',
  category: '',
  instructions: '',
};
export default CardInProgressFooter;
