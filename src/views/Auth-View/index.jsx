import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import AuthLayout from '../../layouts/Auth-Layout';
import SignIn from '../../pages/Auth/Sign-In';
import SignUp from '../../pages/Auth/Sign-Up';

export default () => (
  <AuthLayout>
    <Switch>
      <Route path="/" exact component={() => <Redirect to="/auth/login" />} />
      <Route path="/auth/login" component={SignIn} />
      <Route path="/auth/registration" component={SignUp} />
    </Switch>
  </AuthLayout>
);
