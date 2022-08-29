import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { Provider } from 'react-redux'

import store from './store'
import './index.css';
import App from './App';

axios.defaults.baseURL = 'https://restcountries.com/v3.1'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

