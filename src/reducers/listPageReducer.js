import {
  ACTION_SET_LIST_FILTER_MENU1,
  ACTION_SET_LIST_FILTER_MENU2,
  ACTION_SET_LIST_FILTER_MENU3,
} from './actions';

export default {
  listFilterMenu1(state = '最新', action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_LIST_FILTER_MENU1:
        return payload;
      default:
        return state;
    }
  },
  listFilterMenu2(state = '全部分类', action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_LIST_FILTER_MENU2:
        return payload;
      default:
        return state;
    }
  },
  listFilterMenu3(state = '全部事件', action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_LIST_FILTER_MENU3:
        return payload;
      default:
        return state;
    }
  },
}