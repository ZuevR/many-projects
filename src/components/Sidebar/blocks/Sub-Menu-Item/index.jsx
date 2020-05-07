import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

const SubMenuItem = ({ item }) => {
  console.log('<-- Render SubMenuitem -->');

  return (
    <NavItem className={styles['menu-item']}>
      <NavLink to={item.to} className={styles['menu-item-link']} activeClassName={styles.active}>
        {item.icon}
        <span className={styles['label-text']}>{item.label}</span>
      </NavLink>
    </NavItem>
  );
};

SubMenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    to: PropTypes.string,
    active: PropTypes.bool,
    icon: PropTypes.node,
  }).isRequired,
};

export default React.memo(SubMenuItem);
