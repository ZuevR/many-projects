import React from 'react';

import Sidebar from '../../components/Sidebar';
import Page from '../../components/Page';

const AppLayout = () => {
  console.log('<-- Render AppLayout -->');

  return (
    <>
      <Sidebar />
      <Page />
    </>
  );
};

export default AppLayout;
