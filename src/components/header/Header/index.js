import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profile from '../../images/profileIcon.svg';
import searchImage from '../../images/searchIcon.svg';

import './Header.css';

function Header(props) {
  const { name, enableSearch, classNameContent } = props;
  const [searchBar, setsearchBar] = useState(true);
  // const history = useHistory();

  // const handleClickProfile = () => {
  //   history.push('/profile');
  // };

  const validaSearchBar = () => {
    // if (searchBar === 1) {
    //   setsearchBar(2);
    // } else if (searchBar === 2) {
    //   setsearchBar(1);
    // }
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
        <div className="header-content-search">
          <Form.Control
            type="text"
            data-testid="search-input"
            placeholder="Search"
          />
        </div>
      )}
      { /* <input type="text" data-testid="search-input" /> */ }
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  enableSearch: PropTypes.bool.isRequired,
  classNameContent: PropTypes.string.isRequired,
};

export default Header;
