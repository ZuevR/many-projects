import React, { useContext } from 'react';
import { Switch, Route } from 'react-router';
import cx from 'classnames';

import Dashboard from '../../pages/Dashboard';
import { MenuContext } from '../../context/Menu-Context';
import { menuStages } from '../../constants';

import styles from './styles.module.scss';


const Page = () => {
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
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </div>
    </main>
  );
};

export default Page;
