import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

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
        <Link to="/profile">
          <img
            src={ profile }
            alt="profile"
            data-testid="profile-top-btn"
            className="header-icons"
          />
        </Link>
        <h1 className="header-title" data-testid="page-title">{name}</h1>
        {enableSearch ? (
          <img
            src={ searchImage }
            alt="search"
            data-testid="search-top-btn"
            onClick={ validaSearchBar }
            aria-hidden="true"
            style={ { cursor: 'pointer' } }
          />
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
            style={ { width: '100%', border: '1px solid #fd4d05' } }
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
