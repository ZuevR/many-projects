import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import { MenuContext } from '../../context/Menu-Context';
import { MenuIcon, MobileMenuIcon } from '../Menu-Icon';
import { menuStages } from '../../constants';

import styles from './Header.module.scss';

const Header = () => {
  const { menuStatus, toggleMenu } = useContext(MenuContext);

  return (
    <nav className={`navbar fixed-top ${styles.navbar}`}>
      <div className={`d-flex align-items-center ${styles['navbar-left']}`}>
        <NavLink
          to="#"
          className={`${styles['menu-button']} d-none d-md-block`}
          onClick={toggleMenu}
        >
          <MenuIcon
            activeMain={menuStatus.stage !== menuStages.mainClosed}
            activeSub={menuStatus.stage === menuStages.subOpened}
          />
        </NavLink>
        <NavLink
          to="#"
          className={`${styles['menu-button-mobile']} d-xs-block d-sm-block d-md-none`}
        >
          <MobileMenuIcon />
        </NavLink>
      </div>
      <NavLink
        style={{
          color: 'grey',
          fontSize: '30px',
          textDecoration: 'none',
        }}
        to="/"
      >
        Logo
      </NavLink>
      <div className={styles['navbar-right']}>
        <div className={`${styles.user} d-inline-block`}>
          <UncontrolledDropdown className="dropdown-menu-right">
            <DropdownToggle className="p-0 shadow-none" color="empty">
              <span className="name mr-1">Zuev Roman</span>
              <span>
                <img alt="Profile" src="/assets/img/default-user-image.png" />
              </span>
            </DropdownToggle>
            <DropdownMenu className="mt-3" right>
              <DropdownItem onClick={() => console.log('account')}>Account</DropdownItem>
              <div tabIndex="-1" className="dropdown-divider" />
              <DropdownItem onClick={() => console.log('logged out')}>
                Sign out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </nav>
  );
};

export default Header;
