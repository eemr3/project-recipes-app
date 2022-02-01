import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

import './Explore.css';

function Explore() {
  const history = useHistory();
  return (
    <div>
      <Header
        classNameContent="header-explore-content"
        name="Explore"
        enableSearch={ false }
      />
      <h1>Explore</h1>
      <button
        data-testid="explore-foods"
        type="button"
        onClick={ () => history.push('/explore/foods') }
      >
        Explore Foods
      </button>

      <button
        data-testid="explore-drinks"
        type="button"
        onClick={ () => history.push('/explore/drinks') }
      >
        Explore Drinks
      </button>

      <Footer />
    </div>
  );
}

export default Explore;
