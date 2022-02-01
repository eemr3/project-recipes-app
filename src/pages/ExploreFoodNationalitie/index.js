import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
// import { Container } from './styles';
import Footer from '../../components/Footer';
import { requestAllNationality } from '../../services/requestsApi';

function ExploreFoodNationalitie() {
  const [allNationality, setAllNationality] = useState([]);

  useEffect(() => {
    requestAllNationality().then(({ meals }) => setAllNationality(meals));
  }, []);

  return (
    <div>
      <Header name="Explore Nationalities" enableSearch />
      <h1>Explore Food Nationalitie</h1>

      <select
        data-testid="explore-by-nationality-dropdown"
      >
        <option data-testid="All-category-filter">All</option>
        {
          allNationality.length
            ? allNationality.map(({ strArea }, index) => (
              <option
                data-testid={ `${strArea}-option` }
                key={ index }
              >
                {strArea}
              </option>)) : <option>oI</option>
        }
      </select>
      <Footer />
    </div>
  );
}

export default ExploreFoodNationalitie;
