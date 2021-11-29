import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './insta.css';
import { BrowserRouter } from 'react-router-dom';
import Instagram from './Instagram';
import store from './Store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Instagram />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
