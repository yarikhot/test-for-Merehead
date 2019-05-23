import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducer from './reducer';

const state = {
  arrival: [],
  departure: [],
};

export default createStore(reducer, state, composeWithDevTools(applyMiddleware(promise, thunk)));
