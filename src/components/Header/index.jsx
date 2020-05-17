import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import { MenuContext } from '../../context/Menu-Context';
import { menuStages } from '../../constants';

import styles from './styles.module.scss';
import MenuButton from './blocks/Menu-Button';

const Header = ({ isAuth, login, logout }) => {
  const { menuStatus, toggleMenu } = useContext(MenuContext);

  return (
    <nav className={`navbar fixed-top ${styles.navbar}`}>
      <div className={`d-flex align-items-center ${styles['navbar-left']}`}>
        {isAuth && (
          <MenuButton
            handleClick={toggleMenu}
            activeMain={menuStatus !== menuStages.mainClosed}
            activeSub={menuStatus === menuStages.subOpened}
          />
        )}
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
              <DropdownItem onClick={login}>
                Sign in
              </DropdownItem>
              <DropdownItem onClick={logout}>
                Sign out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  isAuth: PropTypes.bool,
  login: PropTypes.func,
  logout: PropTypes.func,
};

Header.defaultProps = {
  isAuth: false,
  login: () => {},
  logout: () => {},
};

export default Header;
