import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import reducer from './store/reducers'
import middleware from './store/middleware'

// Creating redux store
const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    < BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));