import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rockets from './rockets/rockets';
import missions from './missions/missions';

const middleware = [thunk, logger];

const reducer = combineReducers({
  rockets,
  missions,
});

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
