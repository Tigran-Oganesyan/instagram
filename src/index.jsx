import React from 'react';
import ReactDOM from 'react-dom';
import './insta.css';
import { BrowserRouter } from 'react-router-dom';
import Instagram from './Instagram';

ReactDOM.render(
  <BrowserRouter>
    <Instagram />
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
