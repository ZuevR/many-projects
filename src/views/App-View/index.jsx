import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router';

import AppLayout from '../../layouts/App-Layout';

const Dashboard = lazy(() => import('../../pages/Dashboard'));
const Dictionary = lazy(() => import('../../pages/Dictionary'));

const AppView = ({ match }) => (
  <AppLayout>
    <Suspense fallback="Loading...">
      <Switch>
        <Redirect exact from={`${match.path}/`} to={`${match.path}/dashboard`} />
        <Route path={`${match.path}/dashboard`} component={Dashboard} />
        <Route path={`${match.path}/dictionary`} component={Dictionary} />
      </Switch>
    </Suspense>
  </AppLayout>
);


AppView.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.any),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};


export default AppView;
