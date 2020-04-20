import React from 'react';
import PropTypes from 'prop-types';

import styles from './Menu-Button.module.scss';

const MenuButton = ({ classNames, openMain, openSub, onClickFunc }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClickFunc();
  };

  return (
    <a href="/" className={`${styles['menu-button']} ${classNames}`} onClick={handleClick}>
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
  );
};

MenuButton.propTypes = {
  classNames: PropTypes.string,
  openMain: PropTypes.bool,
  openSub: PropTypes.bool,
  onClickFunc: PropTypes.func,
};

MenuButton.defaultProps = {
  classNames: '',
  openMain: false,
  openSub: false,
  onClickFunc: () => {},
};

export default MenuButton;
