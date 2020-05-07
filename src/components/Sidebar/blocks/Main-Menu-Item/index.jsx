import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from 'reactstrap';

import styles from './styles.module.scss';

const MainMenuItem = ({ item, handleItemClick }) => {
  console.log('<-- Render MainMenuItem -->');

  return (
    <NavItem className={styles['menu-item']}>
      <div
        role="menuitem"
        tabIndex="0"
        className={`${styles['menu-link']} ${item.active ? styles.active : ''}`}
        onClick={() => handleItemClick(item)}
        onKeyPress={() => handleItemClick(item)}
      >
        {item.icon}
        <span>{item.label}</span>
      </div>
    </NavItem>
  );
};

MainMenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    to: PropTypes.string,
    active: PropTypes.bool,
    icon: PropTypes.node,
    subItems: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        label: PropTypes.string,
        to: PropTypes.string,
        active: PropTypes.bool,
        icon: PropTypes.node,
      })),
      PropTypes.bool,
    ]),
  }).isRequired,
  handleItemClick: PropTypes.func,
};

MainMenuItem.defaultProps = {
  handleItemClick: () => {
  },
};

export default React.memo(MainMenuItem);
