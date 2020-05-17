import React, { lazy, Suspense, useContext } from 'react';
import { Route, Switch } from 'react-router';

import MenuCtx from './context/Menu-Context';
import Header from './components/Header';
import AuthRoute from './components/AuthRoute';
import { AppContext } from './context/App-Context';

const AppLayout = lazy(() => import('./layouts/App-Layout'));
const AuthLayout = lazy(() => import('./layouts/Auth-Layout'));

const App = () => {
  console.log('<-- Render App -->');
  const { isAuth, login, logout } = useContext(AppContext);

  return (
    <div className="h-100">
      <div id="app-container" className="menu-default">
        <MenuCtx>
          <Header isAuth={isAuth} login={login} logout={logout} />

          <Suspense fallback="...Loading">
            <Switch>
              <Route path="/auth/login" component={AuthLayout} />
              <AuthRoute component={AppLayout} authUser={isAuth} />
            </Switch>
          </Suspense>

        </MenuCtx>
      </div>
    </div>
  );
};

export default App;
