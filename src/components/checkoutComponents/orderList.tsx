import Link from 'next/link'
import React from 'react'
import styles from '../../styles/components/checkout/orderList.module.scss'
import { PATHS } from "../../../types/paths"
import { connect } from 'react-redux'

function OrderList({numbersOfItemsInCart}){
  return(
    <>
      <div className={styles.card}>
        <div className={styles.item}>
          <div className={styles.title}>
            <h4>Состав заказа</h4>
            <h4 className={styles.number}>{numbersOfItemsInCart}</h4>
          </div>
          <div className={styles.row}>
            <div className={styles.imageWrapper}>
              <div className={styles.img}/>
            </div>
            <div className={styles.bottom}>
              <p className={styles.productName}>Фотоаппарат со сменной оптикой PANASONIC Lumix DMC-G80 Kit 12-60mm, черный</p>
              <div className={styles.priceBlock}>
                <p className={styles.newPrice}>74 990 ₽</p>
                <p className={styles.oldPrice}>81 990 ₽</p>
              </div>
            </div>
          </div>
          <button className={styles.showMoreLink}>
            Показать еще 1 товар
          </button>
        </div>
        <div className={styles.item + ' ' +styles.middle}>
          <div className={styles.half}>
            <div className={styles.title}>
              <h4>Способ доставки</h4>
            </div>
            <p>Самовывоз из магазина, бесплатно</p>
            <p className={styles.adress}>Санкт-Петербург, Некрасова ул., 1 - Pro-Center</p>
            <button className={styles.link}>
              Изменить
            </button>
          </div>
          <div className={styles.half}>
            <div className={styles.title}>
              <h4>Способ доставки</h4>
            </div>
            <p>Самовывоз из магазина, бесплатно</p>
            <p className={styles.adress}>Санкт-Петербург, Некрасова ул., 1 - Pro-Center</p>
            <button className={styles.link}>
              Изменить
            </button>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.sumTitle}>
            <p>Общая сумма заказа</p>
            <h3>291 970 ₽</h3>
          </div>
          <div className={styles.row}>
            <p>Примененные скидки</p>
            <p>- 3 000 ₽</p>
          </div>
          <Link href={PATHS.ORDERING}>
            <button className={styles.confirm}>
              Подтвердить заказ
            </button>
          </Link>
        </div>
      </div>
      <p className={styles.agreement}>
        Нажимая кнопку «Подтвердить заказ», даю согласие на обработку персональных данных в соответствии с правилами использования сайта и политикой конфиденциальности персональных данных.
      </p>
    </>
  )
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
  numberOfItemsInCart: state.cart.numberOfItemsInCart,
});


export default connect(mapStateToProps)(OrderList)