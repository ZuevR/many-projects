import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { menuStages } from '../../constants';
import { mainMenuItems, subMenuItems, items } from './items';

export const MenuContext = createContext({});

const MenuCtx = ({ children }) => {
  const history = useHistory();
  const [menuStatus, setMenuStatus] = useState(menuStages.mainOpened);
  const [mainItems, setMenuItems1] = useState(mainMenuItems);
  const [subItems, setSubItems] = useState(subMenuItems);
  const [menuItems, setMenuItems] = useState(items);

  const getSubItems = (mainMenuId) => subMenuItems.filter((item) => item.refId === mainMenuId);

  const initActiveMenuItems = () => {
    console.log(history);
  };

  useEffect(() => {
    console.log(history);
    // const { id } = mainItems.filter((item) => item.active)[0];
    // const menuItems1 = getSubItems(id);
    // setSubItems(menuItems1);
  }, []);

  const showSubMenu = (id) => {
    const menuItems1 = getSubItems(id);
    setSubItems(menuItems1);
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
    setMenuItems1(newItems);
  };

  const handleSubMenuClick = ({ id }) => {
    const newItems = subItems.map((item) => {
      if (item.id === id) return { ...item, active: true };
      return { ...item, active: false };
    });
    setSubItems(newItems);
  };

  return (
    <MenuContext.Provider value={{
      menuItems,
      menuStatus,
      mainItems,
      subItems,
      toggleMenu,
      showSubMenu,
      handleMenuClick,
      handleSubMenuClick,
    }}
    >
      {children}
    </MenuContext.Provider>
  );
};

MenuCtx.propTypes = { children: PropTypes.node };

MenuCtx.defaultProps = { children: <></> };

export default MenuCtx;
