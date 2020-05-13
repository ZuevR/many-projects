import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Nav } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import cx from 'classnames';

import MainMenuItem from './blocks/Main-Menu-Item';
import SubMenuItem from './blocks/Sub-Menu-Item';
import { MenuContext } from '../../context/Menu-Context';
import { MainMenuIconCtx, SubMenuIconCtx } from '../../context/Icon-Context';
import { menuStages, items, menuSize as size } from '../../constants';

import styles from './styles.module.scss';

const Sidebar = () => {
  console.log('<-- Render Sidebar -->');
  const { location: { pathname } } = useHistory();
  const [menuItems, setMenuItems] = useState(items);

  const { menuStatus, changeMenuBehavior } = useContext(MenuContext);

  const setActiveItemByClick = useCallback((id) => {
    const setActiveItem = (arr) => arr.map((item) => ({ ...item, active: item.id === id }));
    setMenuItems((state) => setActiveItem(state));
  }, []);

  const setActiveItemByInit = useCallback(() => {
    let itemHasSubItems = true;
    const setActiveItem = (arr) => arr.map((item) => {
      if (pathname.indexOf(item.to) !== -1) {
        itemHasSubItems = !!item.subItems.length;
        return { ...item, active: true };
      }
      return { ...item, active: false };
    });
    setMenuItems((state) => setActiveItem(state));
    changeMenuBehavior(itemHasSubItems ? size.full : size.half);
  }, [pathname, changeMenuBehavior]);

  const setMainMenuItemsStatus = ({ id, subItems }) => {
    setActiveItemByClick(id);
    if (!subItems.length) {
      changeMenuBehavior(size.half);
    } else {
      changeMenuBehavior(size.full);
    }
  };

  useEffect(() => setActiveItemByInit(), [setActiveItemByInit]);

  return (
    <div className={styles.sidebar}>
      <div className={cx({
        [styles['main-menu']]: true,
        [styles['main-menu-closed']]: menuStatus === menuStages.mainClosed,
        [styles['main-menu-rounded']]: menuStatus !== menuStages.subOpened,
      })}
      >
        <div className={styles.scroll}>
          <MainMenuIconCtx>
            <PerfectScrollbar options={{
              suppressScrollX: true,
              wheelPropagation: false,
            }}
            >
              <Nav className="d-block">
                {menuItems && menuItems.map((menuItem) => (
                  <MainMenuItem
                    key={menuItem.id}
                    item={menuItem}
                    handleItemClick={setMainMenuItemsStatus}
                  />
                ))}
              </Nav>
            </PerfectScrollbar>
          </MainMenuIconCtx>
        </div>
      </div>
      <div className={cx({
        [styles['sub-menu']]: true,
        [styles['sub-menu-hidden']]: menuStatus === menuStages.subClosed || menuStatus === menuStages.mainOpened,
        [styles['sub-menu-closed']]: menuStatus === menuStages.mainClosed,
      })}
      >
        <div className={styles.scroll}>
          <SubMenuIconCtx>
            <PerfectScrollbar
              options={{
                suppressScrollX: true,
                wheelPropagation: false,
              }}
              className={styles['scroll-container']}
            >
              {menuItems && menuItems.map((menuItem) => (menuItem.subItems.length
                ? (
                  <Nav key={menuItem.id} className={menuItem.active ? 'd-block' : 'd-none'}>
                    {menuItem.subItems && menuItem.subItems.map((subItem) => (
                      <SubMenuItem key={subItem.id} item={subItem} />
                    ))}
                  </Nav>
                ) : false))}
            </PerfectScrollbar>
          </SubMenuIconCtx>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
