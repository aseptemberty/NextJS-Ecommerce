//Action Types
export const SETCITY = "SET_CITY";


//Action Creator
export const setCity = (city) => ({
  type: SETCITY,
  city: city
});
