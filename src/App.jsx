import React, { lazy, Suspense, useContext } from 'react';
import { Route, Redirect } from 'react-router';

import MenuCtx from './context/Menu-Context';
import Header from './components/Header';
import { AppContext } from './context/App-Context';

const AppLayout = lazy(() => import('./layouts/App-Layout'));
const AuthLayout = lazy(() => import('./layouts/Auth-Layout'));

const AuthRoute = ({ component: Component, authUser }) => (
  <Route component={authUser ? Component : <Redirect to="/auth/login" />} />
);


const App = () => {
  console.log('<-- Render App -->');
  const { isAuth, setAuth } = useContext(AppContext);

  return (
    <div className="h-100">
      <div id="app-container" className="menu-default">
        <MenuCtx>
          <Header isAuth={isAuth} setAuth={setAuth} />

          <Suspense fallback="...Loading">
            {isAuth ? <AppLayout /> : <AuthLayout />}
          </Suspense>

        </MenuCtx>
      </div>
    </div>
  );
};

export default App;
