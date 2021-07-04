//Action Types
export const REMEMBERVIEW = "REMEMBER_VIEW";


//Action Creator
export const rememberView = (product) => ({
  type: REMEMBERVIEW,
  product: product
});
