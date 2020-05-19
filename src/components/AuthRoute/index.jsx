/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ component: Component, authUser, ...rest }) => (
  <Route
    {...rest}
    render={({ location, match }) => (
      authUser
        ? <Component match={match} />
        : <Redirect to={{ pathname: '/auth/login', state: { from: location } }} />
    )}
  />
);


PrivateRoute.propTypes = {
  component: PropTypes.objectOf(PropTypes.any).isRequired,
  authUser: PropTypes.bool,
};

PrivateRoute.defaultProps = { authUser: false };

export default PrivateRoute;
