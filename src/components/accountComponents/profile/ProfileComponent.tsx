import React from 'react'
import styles from '../../../styles/components/account/profile/profileComponent.module.scss'
import { BiEdit } from 'react-icons/bi'
import { Checkbox } from '../../ui/Inputs'

export default function ProfileComponent(){
  return(
    <div className={styles.body}>
      <div className={styles.card}>
        <div className={styles.item}>
          <div className={styles.title}>
            <h4>Филиппов В.Б.</h4>
            <button><BiEdit /></button>
          </div>
          <div className={styles.info}>
            <div className={styles.row}>
              <p className={styles.grey}>E-mail</p>
              <p>fiv@crtweb.ru</p>
            </div>
            <div className={styles.row}>
              <p className={styles.grey}>Телефон</p>
              <p>+7 999 999 99 99</p>
            </div>
            <div className={styles.row}>
              <p className={styles.grey}>День рождения</p>
              <p>03 марта 2003</p>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.title}>
            <h4>Подписки</h4>
          </div>
          <div className={styles.info}>
            <div className={styles.row}>
              <div className={styles.checkbox}>
                <Checkbox />
              </div>
              <p>Новости</p>
            </div>
            <div className={styles.row}>
              <div className={styles.checkbox}>
                <Checkbox />
              </div>
              <p>Товар дня</p>
            </div>
            <div className={styles.row}>
              <div className={styles.checkbox}>
                <Checkbox />
              </div>
              <p>Новинки</p>
            </div>
            <div className={styles.row}>
              <div className={styles.checkbox}>
                <Checkbox />
              </div>
              <p>Акции</p>
            </div>
            <p className={styles.subtitle}>получать рассылку</p>
            <div className={styles.row}>
              <div className={styles.checkbox}>
                <Checkbox />
              </div>
              <p>по E-mail</p>
            </div>
            <div className={styles.row}>
              <div className={styles.checkbox}>
                <Checkbox />
              </div>
              <p>по SMS</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bonus}>
        <h4>Мои бонусы</h4>
        <h1>2 479 бонусов</h1>
        <div className={styles.row}>
          <p className={styles.regular}>Бонусы активны с</p>
          <p className={styles.bold}>03 марта 2020</p>
        </div>
        <div className={styles.row}>
          <p className={styles.regular}>Бонусы сгорят</p>
          <p className={styles.bold}>31 апреля 2020</p>
        </div>
      </div>
    </div>
  )
}