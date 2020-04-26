import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { menuStages } from '../../constants';
import { mainMenuItems, subMenuItems } from './items';

export const MenuContext = createContext({});

const MenuCtx = ({ children }) => {
  const [menuStatus, setMenuStatus] = useState({
    forward: 'increase',
    stage: menuStages.mainOpened,
  });
  const [mainItems, setMenuItems] = useState(mainMenuItems);
  const [subItems, setSubItems] = useState(subMenuItems);

  const getSubItems = (mainMenuId) => subMenuItems.filter((item) => item.refId === mainMenuId);

  useEffect(() => {
    const { id } = mainItems.filter((item) => item.active)[0];
    const menuItems = getSubItems(id);
    setSubItems(menuItems);
  }, [mainItems]);

  const showSubMenu = (id) => {
    const menuItems = getSubItems(id);
    setSubItems(menuItems);
    setMenuStatus({ forward: 'decrease', stage: menuStages.subOpened });
  };

  const toggleMenu = () => {
    let newMenuStatus = {};
    if (menuStatus.forward === 'increase' && menuStatus.stage === menuStages.mainOpened) {
      newMenuStatus = { forward: 'decrease', stage: menuStages.subOpened };
    } else if (menuStatus.forward === 'decrease' && menuStatus.stage === menuStages.subOpened) {
      newMenuStatus = { forward: 'decrease', stage: menuStages.subClosed };
    } else if (menuStatus.forward === 'decrease' && menuStatus.stage === menuStages.subClosed) {
      newMenuStatus = { forward: 'increase', stage: menuStages.mainClosed };
    } else if (menuStatus.forward === 'increase' && menuStatus.stage === menuStages.mainClosed) {
      newMenuStatus = { forward: 'increase', stage: menuStages.mainOpened };
    }
    setMenuStatus(newMenuStatus);
  };

  const handleMenuClick = ({ id, hasSubMenu }) => {
    const newItems = mainItems.map((item) => {
      if (item.id === id) return { ...item, active: true };
      return { ...item, active: false };
    });
    if (hasSubMenu) showSubMenu(id);
    setMenuItems(newItems);
  };

  return (
    <MenuContext.Provider value={{
      menuStatus,
      mainItems,
      subItems,
      toggleMenu,
      showSubMenu,
      handleMenuClick,
    }}
    >
      {children}
    </MenuContext.Provider>
  );
};

MenuCtx.propTypes = { children: PropTypes.node };

MenuCtx.defaultProps = { children: <></> };

export default MenuCtx;
