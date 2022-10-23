import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import myReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( 
    myReducer,
    composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById('root')
);