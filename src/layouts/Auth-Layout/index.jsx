import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const AuthLayout = ({ children }) => {

  console.log('<-- Render AuthLayout -->');
  return (
    <div className={styles.auth}>
      { children }
    </div>
  );
};

AuthLayout.propTypes = { children: PropTypes.node };

AuthLayout.defaultProps = { children: <></> };

export default AuthLayout;
