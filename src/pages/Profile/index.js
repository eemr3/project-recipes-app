import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

import './Profile.css';

function Profile() {
  const [emailUser, setEmailUser] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setEmailUser(JSON.parse(localStorage.getItem('user')));
  }, [setEmailUser]);

  const clearLocalStorage = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header
        classNameContent="header-profile-content"
        name="Profile"
        enableSearch={ false }
      />

      {emailUser ? (
        <span data-testid="profile-email">{emailUser.email}</span>
      ) : null}

      <Link to="/done-recipes">
        <button type="button" data-testid="profile-done-btn">
          Done Recipes
        </button>
      </Link>

      <Link to="/favorite-recipes">
        <button type="button" data-testid="profile-favorite-btn">
          Favorite Recipes
        </button>
      </Link>

      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ clearLocalStorage }
      >
        Logout
      </button>

      <Footer />
    </div>
  );
}

export default Profile;
