import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import SignIn from '../../pages/Auth/Sign-In';
import SignUp from '../../pages/Auth/Sign-Up';

import styles from './styles.module.scss';

const AuthLayout = () => {
  console.log('<-- Render AuthLayout -->');

  return (
    <div className={styles.auth}>
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/auth/login" />} />
        <Route path="/auth/login" component={SignIn} />
        <Route path="/auth/registration" component={SignUp} />
      </Switch>
    </div>
  );
};

export default AuthLayout;
