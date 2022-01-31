import React, { useState, useEffect } from 'react';
import Header from '../../componentes/header/Header';
// import { Container } from './styles';
import Footer from '../../componentes/Footer';

function Profile() {
  const [emailUser, setEmailUser] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem('user');
    setEmailUser(JSON.parse(email));
  }, [setEmailUser]);

  return (
    <div>
      <Header name="Profile" enableSearch={ false } />
      <span data-testid="profile-email">{emailUser.email}</span>
      <button type="button" data-testid="profile-done-btn">Done Recipes</button>
      <button type="button" data-testid="profile-favorite-btn">Favorite Recipes</button>
      <button type="button" data-testid="profile-logout-btn">Logout</button>
      <Footer />
    </div>
  );
}

export default Profile;
