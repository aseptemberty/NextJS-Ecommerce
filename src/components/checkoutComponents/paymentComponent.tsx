import styles from  '../../styles/components/checkout/checkout.module.scss'
import { AiOutlineCreditCard, AiOutlineQuestionCircle } from 'react-icons/ai'
import { RadioButton } from '../ui/Inputs'
import React from 'react'
import Link from 'next/link'

export default function PaymentComponent(){
  return(
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Оплата</h3>
        <span><AiOutlineCreditCard size={24}/></span>
      </div>
      <div className={styles.listItem}>
        <ul>
          <li>
            <div className={styles.left}>
              <RadioButton />
              <p>Наличными в магазине</p>
            </div>
            <div className={styles.right}>
              <Link href='#'>
                <div className={styles.link}>
                  <span><AiOutlineQuestionCircle /></span>
                  <p>подробнее</p>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div className={styles.left}>
              <RadioButton />
              <p>Наличными в магазине</p>
            </div>
            <div className={styles.right}>
              <Link href='#'>
                <div className={styles.link}>
                  <span><AiOutlineQuestionCircle /></span>
                  <p>подробнее</p>
                </div>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}