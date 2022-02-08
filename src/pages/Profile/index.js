import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
        <p className="user-email" data-testid="profile-email">{emailUser.email}</p>
      ) : null}
      <div className="content-buttons">
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ clearLocalStorage }
        >
          Logout
        </button>

      </div>

      <Footer />
    </div>
  );
}

export default Profile;
