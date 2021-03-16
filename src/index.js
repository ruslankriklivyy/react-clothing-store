import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import styled, { createGlobalStyle } from 'styled-components';
import store from './redux/store';

const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
    text-decoration: none;
  }
  body,html {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  ol,
  ul {
    list-style: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Global />
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
