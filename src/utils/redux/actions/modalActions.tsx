//Action Types
export const SHOWMODAL = "SHOW_MODAL";


//Action Creator
export const showModal = (modal = 'close', context = null) => ({
  type: SHOWMODAL,
  modal: modal,
  context: context
});
