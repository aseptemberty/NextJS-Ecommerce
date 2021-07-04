import styles from '../styles/components/ordering/ordering.module.scss'
import BreadcrumbComponent from '../components/ui/Breadcrumb'
import TitleComponent from '../components/productComponents/TitleComponent'
import React from 'react'

export default function Ordering(){
  return(
    <>
      <div className={styles.mainTitle}>
        <BreadcrumbComponent />
        <TitleComponent title={'Оформление заказа' } />
      </div>
      <div className={styles.wrapper}>
        <h2>Ваш заказ #2003200-112935 успешно оформлен</h2>
        <ul>
          <li>Консультант свяжется с вами в течение часа.</li>
          <li>Обработка поступивших заказов осуществляется только в рабочие часы магазинов.</li>
          <li>Задать вопрос или получить дополнительную информацию по статусу заказа можно по телефону   магазина, в котором вы разместили заказ.</li>
          <li>Для получения справки назовите номер заказа.</li>
        </ul>
        <button>Перейти в личный кабинет</button>
      </div>
    </>
  )
}