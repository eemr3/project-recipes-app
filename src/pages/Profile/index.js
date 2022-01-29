import React from 'react';
import Header from '../../components/header/Header';
// import { Container } from './styles';
import Footer from '../../components/Footer';

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
