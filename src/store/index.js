import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import promise from 'redux-promise';
import logger from 'redux-logger';

const state = {
    users: []
};


export default createStore(
    reducer,
    state,
    applyMiddleware(promise, logger)
);