import { toast } from "react-toastify";

//Action Types
export const ADDPRODUCTTOCARD = "ADD_TO_CART";
export const REMOVEPRODUCTFROMCARD = "REMOVE";
export const DECREMENTPRODUCTINCART = "DECREMENT";
export const INCREMENTPRODUCTINCART = "INCREMENT"
export const PURGECART = "PURGE"


//Action Creator
export const addProductToCart = (item) => ({
  type: ADDPRODUCTTOCARD,
  item: item
});

export const removeProductFromCart = (item) => ({
  type: REMOVEPRODUCTFROMCARD,
  item: item
});

export const incrementProductInCart = (item) => ({
  type: INCREMENTPRODUCTINCART,
  item: item
});

export const decrementProductInCart = (item) => ({
  type: DECREMENTPRODUCTINCART,
  item: item
})

export const purgeCart = () => ({
  type:PURGECART,
});
