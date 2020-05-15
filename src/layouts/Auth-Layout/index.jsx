import React from 'react';
import { Route, Switch } from 'react-router';

import SignIn from '../../pages/Auth/Sign-In';

import styles from './styles.module.scss';

const AuthLayout = () => {
  console.log('<-- Render AuthLayout -->');

  return (
    <div className={styles.auth}>
      <Switch>
        <Route path="/auth/login" component={SignIn} />
        <Route path="/auth/registration" component={SignIn} />
      </Switch>
    </div>
  );
};

export default AuthLayout;
