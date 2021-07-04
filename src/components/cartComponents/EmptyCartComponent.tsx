import styles from '../../styles/components/cart/emptyCartComponent.module.scss'
import React from 'react'
import Link from 'next/link'

export default function EmptyCartComponent(){
  return(
    <div className={styles.body}>
      <h3>Ваша корзина пока что пуста.</h3>
      <div className={styles.text}>
        <p >Вы можете воспользоваться
          <Link href='#'>
            <a>
              каталогом товаров
            </a>
          </Link> и посмотреть
          <Link href='#'>
            <a>
              новые товары
            </a>
          </Link>
          .
        </p>

        <p className={styles.last}>  Удачных покупок!</p>
      </div>
      <button>Перейти в каталог</button>
    </div>
  )
}