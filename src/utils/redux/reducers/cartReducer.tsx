import {
  ADDPRODUCTTOCARD,
  DECREMENTPRODUCTINCART,
  INCREMENTPRODUCTINCART,
  PURGECART,
  REMOVEPRODUCTFROMCARD,
} from "../actions/cartActions"
import {showToast} from "../../../components/ui/notifications/Toast"
import { toast } from "react-toastify"


const cartReducer = (state = {cart: [], total: 0,numberOfItemsInCart: 0}, action) => {
  switch (action.type) {
    case ADDPRODUCTTOCARD:
      return {...state,
        cart: addToCard(state.cart, action.item),
        total: countTotal(state.cart),
        numberOfItemsInCart: countNumberOfItemsInCart(state.cart)};
    case REMOVEPRODUCTFROMCARD:
      return {...state,
        cart: remove(state.cart, action.item),
        total: countTotal(state.cart),
        numberOfItemsInCart: countNumberOfItemsInCart(state.cart)};
    case INCREMENTPRODUCTINCART:
      return {...state,
        cart: increment(state.cart, action.item),
        total: countTotal(state.cart),
        numberOfItemsInCart: countNumberOfItemsInCart(state.cart)};
    case DECREMENTPRODUCTINCART:
      return{...state,
        cart: decrement(state.cart, action.item),
        total: countTotal(state.cart),
        numberOfItemsInCart: countNumberOfItemsInCart(state.cart)};
    case PURGECART:
      return{...state,
        cart: [],
        total: 0,
        numberOfItemsInCart: 0};
    default:
      return {...state};
  }
};

function addToCard(cart, item){
  if (!cart.includes(item)) {
    item['quantity'] = 1
    cart.push(item)
    showToast('Товар добавлен в корзину')
    return cart
  }
  return cart
}

function increment (cart: object[], item): {}{
  if (cart.includes(item)) {
    cart.find(element => element === item)['quantity'] += 1
    return cart
  }
  return cart
}

function decrement (cart: object[], item){
  if (cart.includes(item)) {
    let neededItem = cart.find(element => element === item)
    if (neededItem['quantity'] != 1) {
      neededItem['quantity'] -= 1
    }
    return cart
  }
  return cart
}

function remove (cart, item){
  if (cart.includes(item)){
    let neededItem = cart.indexOf(item)
    cart.splice(neededItem, 1)
    showToast('Товар добавлен в корзину')
    return cart
  }
  return cart
}

function countTotal(cart) {
  const total = cart.reduce(function(sum, current){
    return sum + current.price * current.quantity;
  }, 0);
  return total
}
function countNumberOfItemsInCart(cart) {
  const numberOfItemsInCart = cart.reduce(function(sum, current){
    return sum + current.quantity;
  }, 0);
  return numberOfItemsInCart

}



export default cartReducer;