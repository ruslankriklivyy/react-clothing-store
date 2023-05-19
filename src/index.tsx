import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";

import App from "./App";
import store from "./redux/store";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
    text-decoration: none;
  }
  html {
    &::-webkit-scrollbar {
      width: 0;
    }
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
  }
  body,
  html {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  ol,
  ul {
    list-style: none;
  }
`;

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Global />
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
