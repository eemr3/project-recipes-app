import React from 'react';
import Header from '../../componentes/header/Header';
// import { Container } from './styles';
import Footer from '../../componentes/Footer';

function Profile() {
  return (
    <div>
      <Header name="Profile" enableSearch={ false } />
      <h1>Profile</h1>
      <Footer />
    </div>
  );
}

export default Profile;
