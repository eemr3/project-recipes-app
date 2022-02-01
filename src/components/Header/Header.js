import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

import profile from '../../images/profileIcon.svg';
import searchImage from '../../images/searchIcon.svg';
import SearchBarHeader from '../searchBarHeader/SearchBarHeader';
import AppContext from '../../context/AppContext';

import './Header.css';

function Header(props) {
  const { name, enableSearch, classNameContent } = props;
  const [searchBar, setsearchBar] = useState(true);

  const { headerInputText, handleInputHeader } = useContext(AppContext);

  const validaSearchBar = () => {
    setsearchBar(!searchBar);
  };

  return (
    <header className="header-container">
      <div className={ classNameContent }>
        <Link to="/profile" type="button">
          <img src={ profile } alt="profile" data-testid="profile-top-btn" />
        </Link>
        <span data-testid="page-title">{name}</span>
        {enableSearch ? (
          <Button variant="link" type="button" onClick={ validaSearchBar }>
            <img src={ searchImage } alt="search" data-testid="search-top-btn" />
          </Button>
        ) : (
          ''
        )}
      </div>
      {searchBar ? '' : (
        <Container>
          <input
            value={ headerInputText }
            onChange={ ({ target }) => handleInputHeader(target.value) }
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
  classNameContent: PropTypes.string.isRequired,
};

export default Header;
