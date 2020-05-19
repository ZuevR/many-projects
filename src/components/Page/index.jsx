import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { MenuContext } from '../../context/Menu-Context';
import { menuStages } from '../../constants';

import styles from './styles.module.scss';


const Page = ({ children }) => {
  console.log('<-- Render Page -->');

  const { menuStatus } = useContext(MenuContext);

  return (
    <main className={cx({
      [styles.page]: true,
      [styles['page-wide']]: menuStatus === menuStages.mainClosed,
      [styles['page-mid']]: menuStatus === menuStages.mainOpened || menuStatus === menuStages.subClosed,
      [styles['page-narrow']]: menuStatus === menuStages.subOpened,
    })}
    >
      <div className="container-fluid">
        {children}
      </div>
    </main>
  );
};

Page.propTypes = { children: PropTypes.node };

Page.defaultProps = { children: <>Empty Page</> };

export default Page;
