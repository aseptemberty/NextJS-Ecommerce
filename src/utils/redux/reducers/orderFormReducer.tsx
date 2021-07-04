import { INPUTDATA } from "../actions/orderFormActions"

const initialState = {
	//user
	userName: String,
	lastName: String,
	middleName: String||null,
	phone: String,
	email: String,

	//cart
	cart: Object,

	//delivery
	deliveryType: String,
	pickupStore: String||null,

	//payment
	paymentType: String

}

const orderFormReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INPUT_DATA':
			return {...state, [action.field]: action.value}
		default:
			return {...state};
	}
};

export default orderFormReducer;