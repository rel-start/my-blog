import {
  ACTION_SET_TRAIN_NUMBER,
} from './actions';

export default {
  trainNumber(state = null, action) {
    const { type, payload } = action;
    switch (type) {
      case ACTION_SET_TRAIN_NUMBER:
        return payload;
      default:
        return state;
    }
  }
}