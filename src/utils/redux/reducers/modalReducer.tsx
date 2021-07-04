import { SHOWMODAL } from "../actions/modalActions"


const modalReducer = (state = {modal: 'close', context: null}, action) => {
	switch (action.type) {
		case SHOWMODAL:
			return {...state, modal: action.modal, context: action.context };
		default:
			return {...state};
	}
};

export default modalReducer;