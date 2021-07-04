import tabsReducer from './tabsReducer';
import {combineReducers} from 'redux';
import cartReducer from "./cartReducer";
import recentViewReducer from "./recentViewReducer";
import cityReducer from "./cityReducer"
import modalReducer from "./modalReducer"
import orderFormReducer from "./orderFormReducer"

const rootReducer = combineReducers({
  tabs: tabsReducer,
  cart: cartReducer,
  recentView: recentViewReducer,
  city: cityReducer,
	modal: modalReducer,
	orderForm: orderFormReducer
});

export default rootReducer;