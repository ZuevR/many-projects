import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';

const AuthRoute = ({ component: Component, authUser }) => (
  <Route
    render={({ location }) => (
      authUser
        ? <Component />
        : <Redirect to={{ pathname: '/auth/login', state: { from: location } }} />
    )}
  />
);

AuthRoute.propTypes = {
  component: PropTypes.objectOf(PropTypes.any).isRequired,
  authUser: PropTypes.bool,
};

AuthRoute.defaultProps = { authUser: false };

export default AuthRoute;
