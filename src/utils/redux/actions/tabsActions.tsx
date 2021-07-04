//Action Types
export const SETCURRENTTAB = "SET_CURRENT_TAB";


//Action Creator
export const setCurrentTab = (currentTab) => ({
  type: SETCURRENTTAB,
  currentTab: currentTab
});
