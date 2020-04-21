import React from 'react';
import PropTypes from 'prop-types';

import styles from './Menu-Button.module.scss';

const MenuButton = ({ classNamesDesktop, classNamesMobile, openMain, openSub, onClickFunc }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClickFunc();
  };

  return (
    <>
      <a href="/" className={`${styles['menu-button']} ${classNamesDesktop}`} onClick={handleClick}>
        <svg className={`${styles.main} ${openMain ? styles.opened : ''}`} viewBox="0 0 9 17">
          <rect x="0.48" y="0.5" width="7" height="1" />
          <rect x="0.48" y="7.5" width="7" height="1" />
          <rect x="0.48" y="15.5" width="7" height="1" />
        </svg>
        <svg className={`${styles.sub} ${openSub ? styles.opened : ''}`} viewBox="0 0 18 17">
          <rect x="1.56" y="0.5" width="16" height="1" />
          <rect x="1.56" y="7.5" width="16" height="1" />
          <rect x="1.56" y="15.5" width="16" height="1" />
        </svg>
      </a>
      <a href="/" className={`${styles['menu-button-mobile']} ${classNamesMobile}`} onClick={handleClick}>
        <svg viewBox="0 0 26 17">
          <rect x="0.5" y="0.5" width="25" height="1" />
          <rect x="0.5" y="7.5" width="25" height="1" />
          <rect x="0.5" y="15.5" width="25" height="1" />
        </svg>
      </a>
    </>
  );
};

MenuButton.propTypes = {
  classNamesDesktop: PropTypes.string,
  classNamesMobile: PropTypes.string,
  openMain: PropTypes.bool,
  openSub: PropTypes.bool,
  onClickFunc: PropTypes.func,
};

MenuButton.defaultProps = {
  classNamesDesktop: '',
  classNamesMobile: '',
  openMain: false,
  openSub: false,
  onClickFunc: () => {
  },
};

export default MenuButton;
