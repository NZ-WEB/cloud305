import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import { store } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
