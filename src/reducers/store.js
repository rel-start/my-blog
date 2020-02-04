import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

import listPageReducer from './listPageReducer';
import thunk from 'redux-thunk';

export default createStore(
  combineReducers({
    ...listPageReducer,
  }),
  {
    listFilterMenu1: '最新',
    listFilterMenu2: '全部分类',
    listFilterMenu3: '全部时间',
  },
  applyMiddleware(thunk)
);