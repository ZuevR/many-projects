import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MenuCtx from './context/Menu-Context';

const App = () => {
  console.log('<-- Render App -->');

  return (
    <div className="h-100">
      <div id="app-container" className="menu-default">
        <MenuCtx>
          <Header />
          <Sidebar />
        </MenuCtx>
      </div>
    </div>
  );
};

export default App;
