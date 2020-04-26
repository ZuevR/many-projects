import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

import MainMenuItem from '../Main-Menu-Item';
import { MenuContext } from '../../../../context/Menu-Context';

import styles from './styles.module.scss';

const MainMenu = ({ showMenu }) => {
  const { mainItems, handleMenuClick } = useContext(MenuContext);

  return (
    <div className={`${styles['main-menu']} ${showMenu ? '' : styles['menu-hidden']}`}>
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

MainMenu.propTypes = { showMenu: PropTypes.bool };

MainMenu.defaultProps = { showMenu: false };

export default MainMenu;
