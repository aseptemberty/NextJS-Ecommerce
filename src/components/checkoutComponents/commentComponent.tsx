import React from 'react'
import styles from '../../styles/components/checkout/checkout.module.scss'
import { RiWechat2Line} from 'react-icons/ri'

export default function CommentComponent(){
  return(
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Комментарий к заказу</h3>
        <span ><RiWechat2Line size={24} /></span>
      </div>
      <div className={styles.comment}>
        <label htmlFor='comment'>На что нам обратить внимание про обработке вашего заказа?</label>
        <input type='text' id='comment' />
      </div>
    </div>
  )
}