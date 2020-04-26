import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

import MainMenuItem from '../Main-Menu-Item';
import { MenuContext } from '../../../../context/Menu-Context';
import { menuStages } from '../../../../constants';

import styles from './styles.module.scss';

const MainMenu = ({ closed }) => {
  const { mainItems, menuStatus, handleMenuClick } = useContext(MenuContext);

  return (
    <div className={
      `${styles['main-menu']} ${closed ? styles['menu-closed'] : ''} \
      ${menuStatus.stage === menuStages.mainOpened
      || menuStatus.stage === menuStages.subClosed
        ? styles['menu-rounded'] : ''}`
    }
    >
      <div className={styles.scroll}>
        <PerfectScrollbar options={{
          suppressScrollX: true,
          wheelPropagation: false,
        }}
        >
          <Nav vertical className="list-unstyled">
            {mainItems.map((item) => (
              <MainMenuItem
                key={item.id}
                item={item}
                onClick={() => handleMenuClick(item)}
              />
            ))}
          </Nav>
        </PerfectScrollbar>
      </div>
    </div>
  );
};

MainMenu.propTypes = { closed: PropTypes.bool };

MainMenu.defaultProps = { closed: false };

export default MainMenu;
