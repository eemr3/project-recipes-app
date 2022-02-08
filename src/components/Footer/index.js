import React from 'react';
import { Link } from 'react-router-dom';
import DrinkImg from '../../images/drinkIcon.svg';
import ExploreImg from '../../images/exploreIcon.svg';
import FoodImg from '../../images/mealIcon.svg';

import './Footer.css';

function Footer() {
  return (
    <footer data-testid="footer" className="menu-inferior">
      <Link
        to="/drinks"
      >
        <img
          data-testid="drinks-bottom-btn"
          src={ DrinkImg }
          alt="Drinks imagem"
          className="footer-icons"
        />
      </Link>
      <Link
        to="/explore"
        className="footer-icons__middle"
      >
        <img
          data-testid="explore-bottom-btn"
          src={ ExploreImg }
          alt="Explore imagem"
          className="footer-icons"
        />
      </Link>
      <Link
        to="/foods"
      >
        <img
          data-testid="food-bottom-btn"
          src={ FoodImg }
          alt="Food imagem"
          className="footer-icons"
        />
      </Link>
    </footer>
  );
}

export default Footer;
