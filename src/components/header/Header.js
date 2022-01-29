import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import profile from '../../images/profileIcon.svg';
import searchImage from '../../images/searchIcon.svg';
import SearchBarHeader from '../searchBarHeader/SearchBarHeader';
import AppContext from '../../context/AppContext';

function Header(props) {
  const { name, enableSearch } = props;
  const [searchBar, setsearchBar] = useState(1);
  const history = useHistory();

  const { handleInputHeader, headerInputText } = useContext(AppContext);

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
    <header>
      <button onClick={ handleClickProfile } type="button">
        <img src={ profile } alt="profile" data-testid="profile-top-btn" />
      </button>

      <span data-testid="page-title">{name}</span>

      {enableSearch ? (
        <button type="button" onClick={ validaSearchBar }>
          <img src={ searchImage } alt="search" data-testid="search-top-btn" />
        </button>
      ) : (
        ''
      )}

      {searchBar === 1 ? '' : (
        <Container>
          <input
            onChange={ ({ target }) => handleInputHeader(target.value) }
            value={ headerInputText }
            type="text"
            data-testid="search-input"
          />
          <SearchBarHeader />
        </Container>

      )}

    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  enableSearch: PropTypes.bool.isRequired,
};

export default Header;
