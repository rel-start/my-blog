export const ACTION_SET_LIST_FILTER_MENU1 = 'SET_LIST_FILTER_MENU1';
export const ACTION_SET_LIST_FILTER_MENU2 = 'SET_LIST_FILTER_MENU2';
export const ACTION_SET_LIST_FILTER_MENU3 = 'SET_LIST_FILTER_MENU3';

export function setListFilterMenu1(listFilterMenu1) {
  return {
    type: ACTION_SET_LIST_FILTER_MENU1,
    payload: listFilterMenu1,
  }
}
export function setListFilterMenu2(listFilterMenu2) {
  return {
    type: ACTION_SET_LIST_FILTER_MENU2,
    payload: listFilterMenu2,
  }
}
export function setListFilterMenu3(listFilterMenu3) {
  return {
    type: ACTION_SET_LIST_FILTER_MENU3,
    payload: listFilterMenu3,
  }
}