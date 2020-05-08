import React, { createContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { menuStages, menuSize as size } from '../../constants';

export const MenuContext = createContext({});

const MenuCtx = ({ children }) => {
  const [menuSize, setMenuSize] = useState(size.full);
  const [menuStatus, setMenuStatus] = useState(menuStages.subOpened);

  const changeMenuBehavior = useCallback((option) => {
    if (option === size.half) {
      setMenuStatus(menuStages.mainOpened);
    } else {
      setMenuStatus(menuStages.subOpened);
    }
    setMenuSize(option);
  }, []);

  const toggleMenu = () => {
    if (menuSize === size.full) {
      switch (menuStatus) {
        case menuStages.mainOpened:
          return setMenuStatus(menuStages.subOpened);
        case menuStages.subOpened:
          return setMenuStatus(menuStages.subClosed);
        case menuStages.subClosed:
          return setMenuStatus(menuStages.mainClosed);
        case menuStages.mainClosed:
          return setMenuStatus(menuStages.mainOpened);
        default:
          return null;
      }
    } else {
      switch (menuStatus) {
        case menuStages.mainOpened:
          return setMenuStatus(menuStages.mainClosed);
        case menuStages.mainClosed:
          return setMenuStatus(menuStages.mainOpened);
        default:
          return null;
      }
    }
  };

  return (
    <MenuContext.Provider value={{ menuStatus, changeMenuBehavior, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

MenuCtx.propTypes = { children: PropTypes.node };

MenuCtx.defaultProps = { children: <></> };

export default MenuCtx;
