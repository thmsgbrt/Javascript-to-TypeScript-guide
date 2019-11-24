import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Muli:400,700');
    * { margin: 0; padding: 0; box-sizing: border-box }
    body {
      font-family: 'Muli', sans-serif;
      font-weight: 400;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    h1 {
      text-align: center;
    }
    input {
      font-family: 'Muli', sans-serif;
    }
    button {
      padding:3px;
    }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
