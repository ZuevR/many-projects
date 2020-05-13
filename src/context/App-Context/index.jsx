import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import Storage from '../../helpers/Storage';

export const AppContext = createContext({});

export const storage = new Storage();

const AppCtx = ({ children }) => {
  const [isAuth, setAuth] = useState(storage.getData().isAuth || false);

  return (
    <AppContext.Provider value={{
      isAuth,
      setAuth,
    }}
    >
      {children}
    </AppContext.Provider>
  );
};


AppCtx.propTypes = { children: PropTypes.node };

AppCtx.defaultProps = { children: <></> };

export default AppCtx;
