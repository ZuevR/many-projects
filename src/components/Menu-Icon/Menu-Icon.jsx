import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const MenuIcon = ({ activeMain, activeSub }) => (
  <>
    <svg
      className={`${styles.main} ${styles.svg} ${activeMain ? styles.opened : ''}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9 17"
    >
      <rect x="0.48" y="0.5" width="7" height="1" />
      <rect x="0.48" y="7.5" width="7" height="1" />
      <rect x="0.48" y="15.5" width="7" height="1" />
    </svg>
    <svg
      className={`${styles.sub} ${styles.svg} ${activeSub ? styles.opened : ''}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 17"
    >
      <rect x="1.56" y="0.5" width="16" height="1" />
      <rect x="1.56" y="7.5" width="16" height="1" />
      <rect x="1.56" y="15.5" width="16" height="1" />
    </svg>
  </>
);

MenuIcon.propTypes = {
  activeMain: PropTypes.bool,
  activeSub: PropTypes.bool,
};

MenuIcon.defaultProps = {
  activeMain: false,
  activeSub: false,
};

export default MenuIcon;
