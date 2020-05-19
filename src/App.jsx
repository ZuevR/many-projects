import React, { lazy, Suspense, useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import MenuCtx from './context/Menu-Context';
import Header from './components/Header';
import PrivateRoute from './components/AuthRoute';
import { AppContext } from './context/App-Context';

const AppView = lazy(() => import('./views/App-View'));
const AuthView = lazy(() => import('./views/Auth-View'));
const MainView = lazy(() => import('./views/Main-View'));

const Err = () => (<div>Error</div>);

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
              <PrivateRoute path="/app" component={AppView} authUser={isAuth} />
              <Route path="/auth" component={AuthView} />
              <Route path="/error" component={Err} />
              <Route path="/" exact component={MainView} />
              <Redirect to="/error" />
            </Switch>
          </Suspense>
        </MenuCtx>
      </div>
    </div>
  );
};

export default App;
