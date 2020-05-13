import React from 'react';
import { Redirect } from 'react-router';

const Dashboard = () => {
  console.log('<-- Render Dashboard -->');

  return (
    <Redirect to="/dashboard/main-page" />
  );
};

export default Dashboard;
