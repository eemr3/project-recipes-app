import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profile from '../../images/profileIcon.svg';
import searchImage from '../../images/searchIcon.svg';

function Header(props) {
  const { name, enableSearch } = props;
  const [searchBar, setsearchBar] = useState(1);
  const history = useHistory();

  const handleClickProfile = () => {
    history.push('/profile');
  };

  const validaSearchBar = () => {
    if (searchBar === 1) {
      setsearchBar(2);
    } else if (searchBar === 2) {
      setsearchBar(1);
    }
  };

  return (
    <Container>
      <Button onClick={ handleClickProfile } type="Button">
        <img src={ profile } alt="profile" data-testid="profile-top-btn" />
      </Button>

      <span data-testid="page-title">{name}</span>

      {enableSearch ? (
        <button type="button" onClick={ validaSearchBar }>
          <img src={ searchImage } alt="search" data-testid="search-top-btn" />
        </button>
      ) : (
        ''
      )}
      {searchBar === 1 ? '' : <input type="text" data-testid="search-input" />}
    </Container>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  enableSearch: PropTypes.bool.isRequired,
};

export default Header;
