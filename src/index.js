import './polyfills.js';

import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvier } from 'react-redux'
import { ToastProvider } from 'react-toast-notifications';
import { HashRouter } from "react-router-dom";
import "./index.less";
import App from "./App";
import configureStore from './store'

const store = configureStore()

function initApp() {
  const APP = {
    modals: {
    },
    store
  }

  window.APP = APP
}

initApp()

ReactDOM.render(
  <ReduxProvier store={store}>
    <HashRouter>
      <ToastProvider>
        <App />
      </ToastProvider>
    </HashRouter>
  </ReduxProvier>,
  document.getElementById("root")
);
