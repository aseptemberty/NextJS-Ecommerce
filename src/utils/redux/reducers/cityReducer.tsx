import {SETCITY} from "../actions/cityActions"

const cityReducer = (state = {city: ""}, action) => {
	switch (action.type) {
		case SETCITY:
			return {...state, city: action.city};
		default:
			return {...state};
	}
};

export default cityReducer;