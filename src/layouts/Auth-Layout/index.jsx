import React from 'react';

import styles from './styles.module.scss';

const AuthLayout = () => {
  console.log('<-- Render AuthLayout -->');

  return (
    <div className={`container ${styles.auth}`}>
      AuthLayout
    </div>
  );
};

export default AuthLayout;
