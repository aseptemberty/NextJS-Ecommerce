import React from 'react';
import styles from "../styles/components/menu/addToCartButton.module.scss"
import { FaShoppingCart } from "react-icons/fa"
import {connect} from 'react-redux';
import {addProductToCart} from "../utils/redux/actions/cartActions"
import { currencyFormat } from "../utils/helpers"


export function AddToCartButton({ type, product, cart, addProductToCart }) {
  let classname = styles.buyButton
  let title = ''
  switch (type) {
    case 'short':
      classname = styles.buyButton
      title = ""
      break
    case 'withTitle':
      classname = styles.buyButtonBig
      title = 'Купить'
      break
    case 'darkBanner':
      classname = styles.buyButtonDark
      title = currencyFormat(product.price)
      break
    case 'lightBanner':
      classname = styles.buyButtonLight
      title = currencyFormat(product.price)
      break
  }


  return (
    <button className={classname} onClick={()=>{addProductToCart(product)}}>
      <div className={styles.buyButtonIcon}>
        <FaShoppingCart/>
      </div>
        <div className={styles.buyButtonTitle}>
          <p >
          {title}
          </p>
      </div>
    </button>
  )
}
const mapStateToProps = state => ({
  cart: state.cart.cart
});

const mapDispatchToProps = {
  addProductToCart: addProductToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton);