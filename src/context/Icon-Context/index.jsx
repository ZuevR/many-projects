import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';

const MainMenuIconCtx = ({ children }) => (
  <IconContext.Provider value={{
    size: '42px',
    color: '#303030',
  }}
  >
    {children}
  </IconContext.Provider>
);

MainMenuIconCtx.propTypes = { children: PropTypes.node };

MainMenuIconCtx.defaultProps = { children: <></> };

const SubMenuIconCtx = ({ children }) => (
  <IconContext.Provider value={{
    size: '20px',
    color: '#303030',
  }}
  >
    {children}
  </IconContext.Provider>
);


SubMenuIconCtx.propTypes = { children: PropTypes.node };

SubMenuIconCtx.defaultProps = { children: <></> };

export {
  MainMenuIconCtx,
  SubMenuIconCtx,
};
