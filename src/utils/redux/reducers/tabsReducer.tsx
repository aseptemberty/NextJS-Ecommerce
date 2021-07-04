import {SETCURRENTTAB } from "../actions/tabsActions"

const tabsReducer = (state = {currentTab: ""}, action) => {
  switch (action.type) {
    case SETCURRENTTAB:
      return {...state, currentTab: action.currentTab};
    default:
      return {...state};
  }
};

export default tabsReducer;