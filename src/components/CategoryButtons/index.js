import React from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FIVE = 5;
function CategoryButtons({
  categoryBtn,
  handleClickCategory,
  setToggle,
  setNameBtn,
  setAllCategory,
}) {
  return (
    <Container>
      <Button
        data-testid="All-category-filter"
        type="button"
        onClick={ () => setAllCategory('All') }
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
            onClick={ (e) => {
              handleClickCategory(item.strCategory);
              setToggle(item.strCategory);
              setNameBtn(e.target.name);
              setAllCategory(e.target.name);
            } }
          >
            {item.strCategory}

          </Button>
        )) : <Spinner className="align-middle" animation="border" role="status" />
      }
    </Container>
  );
}

CategoryButtons.propTypes = {
  categoryBtn: PropTypes.arrayOf(PropTypes.shape({})),
  handleClickCategory: PropTypes.func,
  setToggle: PropTypes.func,
  setNameBtn: PropTypes.func,
  setAllCategory: PropTypes.func,
};

CategoryButtons.defaultProps = {
  categoryBtn: [],
  handleClickCategory: () => {},
  setToggle: () => {},
  setNameBtn: () => {},
  setAllCategory: () => {},
};

export default CategoryButtons;
