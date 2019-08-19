import React, { lazy, Suspense } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const Listing = lazy(() => import(/* webpackChunkName: "listing" */ './pages/Listing'));
const Listings = lazy(() => import(/* webpackChunkName: "listings" */ './pages/Listings'));
const Profile = lazy(() => import(/* webpackChunkName: "profile" */ './pages/Profile'));

const history = createBrowserHistory();

const Routing = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Listings} />
          <Route exact path="/listing/:id" component={Listing} />
          <Route exact path="/profile/:id" component={Profile} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default Routing;
