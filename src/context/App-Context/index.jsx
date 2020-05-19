import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import Storage from '../../helpers/Storage';

export const AppContext = createContext({});

const storage = new Storage();

const AppCtx = ({ children }) => {
  const [isAuth, setAuth] = useState(storage.getData().isAuth || false);

  const login = () => {
    storage.setData({ isAuth: true });
    setAuth(true);
  };

  const logout = () => {
    storage.setData({ isAuth: false });
    setAuth(false);
  };

  return (
    <AppContext.Provider value={{
      isAuth,
      login,
      logout,
    }}
    >
      {children}
    </AppContext.Provider>
  );
};


AppCtx.propTypes = { children: PropTypes.node };

AppCtx.defaultProps = { children: <></> };

export default AppCtx;
