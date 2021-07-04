import styles from '../../styles/components/product/priceBlock.module.scss'
import React from 'react'
import AddToCartButton from '../AddToCartButton'
import Link from 'next/link'
import { BsQuestionCircle } from 'react-icons/bs'
import { currencyFormat } from "../../utils/helpers"

export default function PriceBlockComponent(props) {
  const product = props.product
  const oldPrice = product.oldPrice
  const price = product.price
  const discount = Math.floor((1 - price/oldPrice)*100)

  return (
      <div className={styles.priceBlock}>
        <div className={styles.sale}>
          {discount} %
        </div>
        <div className={styles.oldPrice}>
          <p>{currencyFormat(oldPrice)}</p>
        </div>
        <div className={styles.newPrice}>
          {currencyFormat(price)}
        </div>
        <AddToCartButton type={'withTitle'} product={product}/>
        <Link href='#'>
          <a>
            <span className={styles.creditLink}>
              <span><BsQuestionCircle size={20}/></span>
              <p>Можно в рассрочку или кредит</p>
            </span>
          </a>
        </Link>
      </div>
  )
}