import React from 'react';
import PropTypes from 'prop-types';

function CardInProgressFooter({
  titleRecipe,
  category,
  instructions,
  dataTestIdTitle,
  dataTestIdCategory,
  dataTestIdInstruction,
}) {
  return (
    <footer style={ { padding: '10px' } }>
      <h1 data-testid={ dataTestIdTitle }>{titleRecipe}</h1>
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
  titleRecipe: PropTypes.string,
};

CardInProgressFooter.defaultProps = {
  titleRecipe: '',
  category: '',
  instructions: '',
};
export default CardInProgressFooter;
