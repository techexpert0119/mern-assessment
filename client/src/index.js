import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import "./App.css";
import store from "./store";
import AuthProvider from "./AuthProvider";
// import history from "./history";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
