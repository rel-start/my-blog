import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

import homeReducer from './homeReducer';
import thunk from 'redux-thunk';

export default createStore(
  combineReducers(homeReducer),
  {
    trainNumber: null,
  },
  applyMiddleware(thunk)
);