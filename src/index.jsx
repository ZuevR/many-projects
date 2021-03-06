import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import AppCtx from './context/App-Context';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppCtx>
        <App />
      </AppCtx>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
