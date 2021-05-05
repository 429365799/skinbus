import React from "react";
import ReactDOM from "react-dom";
import { ToastProvider } from 'react-toast-notifications';
import { HashRouter } from "react-router-dom";
import "./index.less";
import App from "./App";

function initApp() {
  const APP = {
    modals: {
    },
  }

  window.APP = APP
}

initApp()

ReactDOM.render(
  <HashRouter>
    <ToastProvider>
      <App />
    </ToastProvider>
  </HashRouter>,
  document.getElementById("root")
);
