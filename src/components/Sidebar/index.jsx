import React, { useContext } from 'react';

import MainMenu from './blocks/Main-Menu';
import { MainMenuIconCtx, SubMenuIconCtx } from '../../context/Icon-Context';
import { MenuContext } from '../../context/Menu-Context';
import { menuStages } from '../../constants';

import styles from './Sidebar.module.scss';
import SubMenu from './blocks/Sub-Menu';

const Sidebar = () => {
  const { menuStatus } = useContext(MenuContext);

  return (
    <div className={styles.sidebar}>
      <MainMenuIconCtx>
        <MainMenu
          showMenu={menuStatus.stage !== menuStages.mainClosed}
        />
      </MainMenuIconCtx>
      <SubMenuIconCtx>
        <SubMenu
          hidden={
            menuStatus.stage === menuStages.subClosed || menuStatus.stage === menuStages.mainOpened
          }
          closed={menuStatus.stage === menuStages.mainClosed}
        />
      </SubMenuIconCtx>
    </div>
  );
};

export default Sidebar;
