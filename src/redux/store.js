import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rockets from './rockets/rockets';

const middleware = [thunk, logger];

const reducer = combineReducers({
  rockets,
});

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
