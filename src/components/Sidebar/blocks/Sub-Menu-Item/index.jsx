import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'reactstrap';

import styles from './styles.module.scss';

const SubMenuItem = ({ item, onClick }) => (
  <NavItem
    className={`${styles['sub-menu-item']} ${item.active ? styles.active : ''}`}
    onClick={onClick}
  >
    <NavLink className={styles['sub-menu-link']}>
      {item.icon}
      <span className={styles.icon}>{item.label}</span>
    </NavLink>

  </NavItem>
);

SubMenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    refId: PropTypes.number,
    label: PropTypes.string,
    active: PropTypes.bool,
    icon: PropTypes.node,
  }).isRequired,
  onClick: PropTypes.func,
};

SubMenuItem.defaultProps = {
  onClick: () => {
  },
};

export default SubMenuItem;
