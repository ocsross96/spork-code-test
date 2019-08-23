import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const Listing = lazy(() => import(/* webpackChunkName: "listing" */ './pages/Listing'));
const Listings = lazy(() => import(/* webpackChunkName: "listings" */ './pages/Listings'));
const Profile = lazy(() => import(/* webpackChunkName: "profile" */ './pages/Profile'));

const Routing = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Listings} />
          <Route exact path="/listing/:id" component={Listing} />
          <Route exact path="/profile/:id" component={Profile} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default Routing;
