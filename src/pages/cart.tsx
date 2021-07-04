import Link from 'next/link'
import {connect} from "react-redux";
import {
  decrementProductInCart,
  incrementProductInCart,
  removeProductFromCart,
  purgeCart
} from "../utils/redux/actions/cartActions";
import Breadcrumb from "../components/ui/Breadcrumb"
import ShopppingListComponent from '../components/cartComponents/ShoppingListComponent'
import ProductInCartComponent from '../components/cartComponents/ProductInCartComponent'
import styles from '../styles/components/cart/cart.module.scss'
import { IoIosArrowBack } from 'react-icons/io'
import EmptyCartComponent from '../components/cartComponents/EmptyCartComponent'
import React from "react";



function Cart(props) {
  return (
    <>
      <Breadcrumb type={'pagePath'}/>
      <div style={{position:'relative'}}>
        <div className={styles.title}>
          <h1>Моя корзина</h1>
          <Link href='#'>
            <a>
              <div className={styles.linkBack}>
                <span className='flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden '><IoIosArrowBack size={16}/></span>
                <p >Вернуться к покупкам</p>
              </div>
            </a>
          </Link>
        </div>

        {props.numberOfItemsInCart != 0
        && (<div className={styles.body}>
          <div className={styles.left}>
            <ProductInCartComponent />
          </div>
          <div className={styles.right}>
            <ShopppingListComponent />
          </div>
        </div>)}
      </div>
      {props.numberOfItemsInCart == 0 && <EmptyCartComponent/>}
    </>
  )
}


const mapStateToProps = state => ({
  cart: state.cart.cart,
  numberOfItemsInCart: state.cart.numberOfItemsInCart,
  total: state.cart.total
});

const mapDispatchToProps = {
  incrementProductInCart: incrementProductInCart,
  decrementProductInCart: decrementProductInCart,
  removeProductFromCart: removeProductFromCart,
  purgeCart: purgeCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart)