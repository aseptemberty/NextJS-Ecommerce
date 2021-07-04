import styles from '../../styles/components/cart/shoppingList.module.scss'
import { connect } from "react-redux"
import Link from 'next/link'
import { PATHS } from "../../../types/paths"
import React from "react";
import { currencyFormat, useMediaQuery } from '../../utils/helpers'
import PromocodeComponent from './PromocodeComponent'

function ShopppingListComponent({ numberOfItemsInCart, total }){
  const isTablet=useMediaQuery(1230)
  const isMobile=useMediaQuery(767)

  return(
    <div className={styles.wrapper}>
      {
        isMobile?
          <PromocodeComponent />
          : <></>
      }
      <div className={styles.body}>
        <div className={styles.title}>
                <h4>Товаров в корзине</h4>
                <h4 className={styles.number}>{numberOfItemsInCart}</h4>
              </div>
        <div className={styles.sales}>
                <div className={styles.item}>
                  <p>Скидка 15% за комплект
                    с доп. объективом</p>
                  <p>- 3 000 ₽</p>
                </div>
                <div className={styles.item}>
                  <p>Скидка 15% за комплект
                    с доп. объективом</p>
                  <p>- 3 000 ₽</p>
                </div>
              </div>
        <div className={styles.summary}>
          <div className={styles.top}>
            <div className={styles.promo}>
              <PromocodeComponent />
            </div>
            <div className={styles.total}>
              <p>Общая сумма заказа</p>
              <h3>{currencyFormat(total)}</h3>
            </div>
          </div>
          <div className={styles.bottom}>
            <Link href={`${PATHS.base}/${PATHS.CHECKOUT}`}>
              <a>
                <button className={styles.button}>
                  Оформить заказ
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      {
        isTablet?
          <></>
          : <PromocodeComponent />
      }
    </div>
  )
}
const mapStateToProps = state => ({
  numberOfItemsInCart: state.cart.numberOfItemsInCart,
  total: state.cart.total
});


export default connect(mapStateToProps)(ShopppingListComponent)