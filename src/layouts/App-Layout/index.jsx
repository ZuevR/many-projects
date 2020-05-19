import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../../components/Sidebar';
import Page from '../../components/Page';

const AppLayout = ({ children }) => {
  console.log('<-- Render AppLayout -->');
  return (
    <>
      <Sidebar />
      <Page>
        {children}
      </Page>
    </>
  );
};

AppLayout.propTypes = { children: PropTypes.node };

AppLayout.defaultProps = { children: <></> };

export default AppLayout;
