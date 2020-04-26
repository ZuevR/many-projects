import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'reactstrap';

import styles from './styles.module.scss';

const SubMenuItem = ({ item }) => (
  <NavItem
    className={`${styles['sub-menu-item']}`}
  >
    {item.label}
  </NavItem>
);

export default SubMenuItem;
