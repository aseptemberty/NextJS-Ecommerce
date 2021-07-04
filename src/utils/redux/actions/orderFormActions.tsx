//Action Types
export const INPUTDATA = "INPUT_DATA";


//Action Creator
export const inputData = (field: String, value :any) => ({
  type: INPUTDATA,
  field: 'rating',
  value: value
});
