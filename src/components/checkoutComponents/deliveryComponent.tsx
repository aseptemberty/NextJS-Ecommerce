import styles from '../../styles/components/checkout/checkout.module.scss'
import { FiTruck } from 'react-icons/fi'
import React from 'react'
import Link from 'next/link'
import { FaLocationArrow } from 'react-icons/fa'
import { BsListUl, BsQuestionCircle } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RadioButton } from '../ui/Inputs'

export default function DeliveryComponent(){
  return(
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Способ доставки</h3>
        <span><FiTruck size={22}/></span>
      </div>
      <div className={styles.choice}>
        <p>Выберите удобный для вас способ получения заказа в городе</p>
        <Link href='#' >
          <div className={styles.link}>
            <span><FaLocationArrow  size={14}/></span>
            <p>Санкт-Петербург</p>
          </div>
        </Link>
      </div>
      <div className={styles.choiceButtons}>
        <button>
          <p>Самовывоз из 13 магазинов</p>
          <p className={styles.small}>сегодня или в течение 2-3 дней</p>
        </button>
        <button>
          <p>Доставка домой или в офис</p>
          <p className={styles.small}>курьером, в течении 1-2 дней</p>
        </button>
      </div>
 {/*и вот потом тут будет выводиться доставка или пункты*/}
 {/*      для пунктов кнопки выбора карты или списка*/}
      <div className={styles.viewButtons}>
        <button>
          <span><BsListUl size={20}/></span>
          <p>Списком</p>
        </button>
        <button>
          <span><HiOutlineLocationMarker size={20}/></span>
          <p>На карте</p>
        </button>
      </div>

      {/* возможно это уйдет в отдельный компонент*/}
      <div className={styles.listItem}>
        <p className={styles.titleDelivery} >Забрать сегодня</p>
        <ul>
          <li>
            <div className={styles.left}>
              <RadioButton />
              <p>Санкт-Петербург, Некрасова ул., 1 - Pro-Center</p>
            </div>
            <p className={styles.right}>сегодня с 15:00</p>
          </li>
        </ul>
      </div>

      <div className={styles.listItem}>
        <p className={styles.titleDelivery}>Забрать позже</p>
        <ul>
          <li>
            <div className={styles.left}>
              <RadioButton />
              <p>Санкт-Петербург, Некрасова ул., 1 - Pro-Center</p>
            </div>
            <p className={styles.right}>в течении 2-3 дней с 15:00</p>
          </li>
          <li>
            <div className={styles.left}>
              <RadioButton />
              <p>Санкт-Петербург, Некрасова ул., 1 - Pro-Center</p>
            </div>
            <p className={styles.right}>в течении 2-3 дней с 15:00</p>
          </li>
        </ul>
      </div>
      <div className={styles.condition}>
        <Link href='#'>
          <div className={styles.link}>
            <span><BsQuestionCircle/></span>
            <p>Условия самовывоза</p>
          </div>
        </Link>
      </div>
    </div>
  )
}