import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from 'redux';
import myReducer from './reducers/index';
import { Provider } from 'react-redux';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootSaga from './saga/rootSaga';

const initialState = {};
const store = configureStore(initialState, null, myReducer);
store.runSaga(rootSaga);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById('root')
);