import React from 'react';
import Header from '../../componentes/header/Header';
// import { Container } from './styles';

function Profile() {
  return (
    <div>
      <Header name="Profile" enableSearch={ false } />
      <h1>Profile</h1>
    </div>
  );
}

export default Profile;
