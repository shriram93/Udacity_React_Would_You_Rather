import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from './store/persistStorage'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      < BrowserRouter >
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>, document.getElementById('root'));