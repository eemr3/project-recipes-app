import React from 'react';
import PropTypes from 'prop-types';
import profile from '../../images/profileIcon.svg';
import searchImage from '../../images/searchIcon.svg';

function Header(props) {
  const { name, enableSearch } = props;
  return (
    <header>
      <img
        src={ profile }
        alt="profile"
        data-testids="profile-top-btn"
      />
      <span data-testids="page-title">{name}</span>
      {enableSearch ? <img src={ searchImage } alt="search" /> : ''}
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  enableSearch: PropTypes.bool.isRequired,
};

export default Header;
