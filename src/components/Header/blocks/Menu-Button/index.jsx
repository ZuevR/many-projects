import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { MenuIcon, MobileMenuIcon } from '../Menu-Icon';

import styles from './syles.module.scss';

const MenuButton = ({ handleClick, activeMain, activeSub }) => (
  <>
    <NavLink
      to="#"
      className={`${styles['menu-button']} d-none d-md-block`}
      onClick={handleClick}
    >
      <MenuIcon
        activeMain={activeMain}
        activeSub={activeSub}
      />
    </NavLink>
    <NavLink
      to="#"
      className={`${styles['menu-button-mobile']} d-xs-block d-sm-block d-md-none`}
    >
      <MobileMenuIcon />
    </NavLink>
  </>
);

MenuButton.propTypes = {
  handleClick: PropTypes.func,
  activeMain: PropTypes.bool,
  activeSub: PropTypes.bool,
};

MenuButton.defaultProps = {
  handleClick: () => {
  },
  activeMain: false,
  activeSub: false,
};

export default MenuButton;
