import React from 'react';
import { Link } from 'react-router-dom';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import MenuButton from '../Menu-Button';

import styles from './Header.module.scss';

const Header = () => (
  <nav className={`navbar fixed-top ${styles.navbar}`}>
    <div className={`d-flex align-items-center ${styles['navbar-left']}`}>
      <MenuButton
        classNamesDesktop="d-none d-md-block"
        classNamesMobile="d-xs-block d-sm-block d-md-none"
      />
    </div>
    <Link to="/">center</Link>
    <div className={styles['navbar-right']}>
      <div className={`${styles.user} d-inline-block`}>
        <UncontrolledDropdown className="dropdown-menu-right">
          <DropdownToggle className="p-0" color="empty">
            <span className="name mr-1">Zuev Roman</span>
            <span>
              <img alt="Profile" src="/assets/img/default-user-image.png" />
            </span>
          </DropdownToggle>
          <DropdownMenu className="mt-3" right>
            <DropdownItem onClick={() => console.log('logged out')}>
              Sign out
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </div>
  </nav>
);

export default Header;