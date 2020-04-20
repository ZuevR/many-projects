import React from 'react';
import { Link } from 'react-router-dom';

import MenuButton from '../Menu-Button';

import styles from './Header.module.css';

const Header = () => (
  <nav className={`navbar fixed-top ${styles.navbar}`}>
    <div className="d-flex align-items-center navbar-left">
      <MenuButton
        classNames="d-none d-md-block"
      />
      left
    </div>
    <Link to="/">center</Link>
    <div className="navbar-right">
      right
    </div>
  </nav>
);

export default Header;
