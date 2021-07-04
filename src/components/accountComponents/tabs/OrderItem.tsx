import styles from '../../../styles/components/account/tabs/orderItem.module.scss'
import { FiList, FiTruck } from 'react-icons/fi'
import { BiCreditCard } from 'react-icons/bi'

export default function OrderItem(option){
  return(
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Заказ {option.number} от {option.date}
      </div>
      <div className={styles.status}>
        <div className={styles.item } style={{backgroundColor:'rgba(60, 165, 50, 0.3)'}}>В процессе</div>
        <div className={styles.item} style={{backgroundColor:'rgba(255, 218, 0, 0.3)'}}>Оплачен</div>
      </div>
      <div className={styles.info}>
        <div className={styles.item}>
          <span>
            <FiTruck size={20}/>
          </span>
          <div className={styles.column}>
            <p className={styles.bold}>Информация об оплате</p>
            <p>Оплата банковской картой в магазине</p>
          </div>
        </div>
        <div className={styles.item}>
          <span><BiCreditCard size={20}/></span>
          <div className={styles.column}>
            <p className={styles.bold}>Доставка</p>
            <p>Забрать в розничном магазине по адресу: Санкт-Петербург, Большевиков просп., 8</p>
          </div>
        </div>
        <div className={styles.item}>
          <span><FiList size={20}/></span>
          <div className={styles.column}>
            <p className={styles.bold}>Содержимое заказа</p>
          </div>
        </div>
      </div>
      <div className={styles.product}>
        <div className={styles.half}>
          <div className={styles.imageBox} />
          <p className={styles.name}>Зеркальный фотоаппарат со сменной оптикой PANASONIC Lumix DMC-G80 Kit 12-60mm, черный</p>
        </div>
        <div className={styles.half}>
          <p>1 шт.</p>
          <p className={styles.price}>291 970 ₽</p>
        </div>
      </div>
      <div className={styles.summary}>
        <div className={styles.inner}>
          <p>Общая сумма заказа</p>
          <h2>291 970 ₽</h2>
        </div>
      </div>
    </div>
  )
}