import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import BurgerBuilderreducer from './store/reducer/BurgerBuilder'
import Orderreducer from './store/reducer/order'
import Authreducer from './store/reducer/Auth'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { logout } from './store/sagas/Auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  Burger: BurgerBuilderreducer,
  Order: Orderreducer,
  Auth: Authreducer
})

const SagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, SagaMiddleware)))

SagaMiddleware.run(logout)
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider >
)

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

