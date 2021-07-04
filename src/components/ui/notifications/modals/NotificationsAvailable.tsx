import styles from '../../../../styles/components/ui/notifications/modals/notificationsAvailable.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import React from 'react'
import Link from 'next/link'

export default function NotificationsAvailable(isLogged=false){
  return(
    <div className={styles.card}>
      <button className={styles.close}><AiOutlineClose /></button>
      <h3>Узнать о поступлении товара</h3>
      {
        isLogged?
          <>
            <p>Оставьте свой e-mail и мы уведомим вас о поступлении товара в продажу.</p>
            <div className={styles.input}>
              <input type='text' id='email'/>
              <label htmlFor='email'>E-mail</label>
            </div>
            <button>Подписаться</button>
            <p className={styles.grey}>Оставляя свой e-mail, вы даете согласие на обработку персональных данных.</p>
          </>
          :
          <>
            <p>Подпишитесь на уведомления о поступлении товара. Как только товар появится в продаже мы отправим письмо на <Link href={'#'}>example@gmail.com.</Link></p>
            <button>Подписаться</button>
          </>
      }
    </div>
  )
}