import styles from '../../../../styles/components/ui/notifications/modals/lowerPriceRequest.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import React from 'react'
import Link from 'next/link'

export default function LowerPriceRequest(){
  return(
    <div className={styles.card}>
      <span className={styles.close}><AiOutlineClose /></span>
      <h3>Нашли дешевле? Снизим цену</h3>
      <p>Если у конкурента цена ниже – вернем разницу.</p>
      <ul>
        <li>Найдите магазин в <Link href={'#'}>списке утвержденных конкурентов.</Link></li>
        <li>Проверьте все <Link href={'#'}>условия акции.</Link></li>
      </ul>
      <form>
        <div className={styles.input}>
          <input type='text' id={'link'}/>
          <label htmlFor={'link'}>Ссылка на товар конкурента*</label>
        </div>
        <div className={styles.input}>
          <input type='text' id={'price'}/>
          <label htmlFor={'price'}>Цена на товар  у конкурента, руб.*</label>
        </div>
        <div className={styles.quantity}>
          <input type='text' id={'quantity'}/>
          <label htmlFor={'quantity'}>Цена на товар  у конкурента, руб.*</label>
        </div>
      </form>
    </div>
  )
}