import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { menuStages } from '../../constants';
import { mainMenuItems, subMenuItems } from './items';

export const MenuContext = createContext({});

const MenuCtx = ({ children }) => {
  const [menuStatus, setMenuStatus] = useState(menuStages.mainOpened);
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
    setMenuStatus(menuStages.subOpened);
  };

  const toggleMenu = () => {
    let newMenuStatus = {};
    switch (menuStatus) {
      case menuStages.mainOpened:
        newMenuStatus = menuStages.subOpened;
        break;
      case menuStages.subOpened:
        newMenuStatus = menuStages.subClosed;
        break;
      case menuStages.subClosed:
        newMenuStatus = menuStages.mainClosed;
        break;
      case menuStages.mainClosed:
        newMenuStatus = menuStages.mainOpened;
        break;
      default:
        return;
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
