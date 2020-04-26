import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'reactstrap';

import styles from './styles.module.scss';

const MainMenuItem = ({ item, onClick }) => (
  <NavItem
    className={`${styles['main-menu-item']} ${item.active ? styles.active : ''}`}
    onClick={onClick}
  >
    <NavLink
      to={item.to}
      data-flag={item.id}
      className={styles['main-menu-link']}
    >
      {item.icon}
      <span>{item.label}</span>
    </NavLink>
  </NavItem>
);


MainMenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    to: PropTypes.string,
    hasSubMenu: PropTypes.bool,
    active: PropTypes.bool,
    icon: PropTypes.node,
  }).isRequired,
  onClick: PropTypes.func,
};

MainMenuItem.defaultProps = {
  onClick: () => {
  },
};

export default MainMenuItem;
