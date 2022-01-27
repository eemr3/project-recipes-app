import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DetailsDrink from '../pages/DetailsDrink';
import DetailsFood from '../pages/DetailsFood';
import DoneRecipes from '../pages/DoneRecipes';
import Drinks from '../pages/Drinks';
import Explore from '../pages/Explore';
import ExploreDrink from '../pages/ExploreDrink';
import ExploreDrinkIgrendient from '../pages/ExploreDrinkIgrendient';
import ExploreFood from '../pages/ExploreFood';
import ExploreFoodIgrendient from '../pages/ExploreFoodIgrendient';
import ExploreFoodNationalitie from '../pages/ExploreFoodNationalitie';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import Foods from '../pages/Foods';
import InProgressDrink from '../pages/InProgressDrink';
import InProgressFood from '../pages/InProgressFood';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/foods/:id" component={ DetailsFood } />
      <Route exact path="/drinks/:id" component={ DetailsDrink } />
      <Route exact path="/foods/:id/in-progress" component={ InProgressFood } />
      <Route exact path="/drinks/:id/in-progress" component={ InProgressDrink } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFood } />
      <Route exact path="/explore/drinks" component={ ExploreDrink } />
      <Route
        exact
        path="/explore/foods/ingredients"
        component={ ExploreFoodIgrendient }
      />
      <Route
        exact
        path="/explore/drinks/ingredients"
        component={ ExploreDrinkIgrendient }
      />
      <Route
        exact
        path="/explore/foods/nationalities"
        component={ ExploreFoodNationalitie }
      />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route exact path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
