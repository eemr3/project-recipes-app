import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './CategoryButtons.css';

const FIVE = 5;
function CategoryButtons({
  categoryBtn,
  handleClickCategory,
  setAllCategory,
}) {
  return (
    <div className="category-button-container">
      <Button
        data-testid="All-category-filter"
        type="button"
        onClick={ () => setAllCategory('All') }
        className="btn-all"
        variant="outline-danger"
      >
        All
      </Button>
      {
        categoryBtn.length > 0 ? categoryBtn.slice(0, FIVE).map((item) => (
          <Button
            data-testid={ `${item.strCategory}-category-filter` }
            key={ item.strCategory }
            type="button"
            name={ item.strCategory }
            variant="warning"
            onClick={ () => {
              handleClickCategory(item.strCategory);
              setAllCategory(item.strCategory);
            } }
          >
            {item.strCategory.includes('Unknown') ? item.strCategory.split('/')[0]
              : item.strCategory.split(' ')[0]}

          </Button>
        )) : <Spinner className="align-middle" animation="border" role="status" />
      }
    </div>
  );
}

CategoryButtons.propTypes = {
  categoryBtn: PropTypes.arrayOf(PropTypes.shape({})),
  handleClickCategory: PropTypes.func,
  setAllCategory: PropTypes.func,
};

CategoryButtons.defaultProps = {
  categoryBtn: [],
  handleClickCategory: () => {},
  setAllCategory: () => {},
};

export default CategoryButtons;
