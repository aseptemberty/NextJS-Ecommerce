import styles from '../../styles/components/category/actionsComponent.module.scss'
import { FiAward, FiTruck } from 'react-icons/fi'
import { BiBadge, BiCheckShield, BiGift, BiStar } from 'react-icons/bi'

export default function ActionsComponent(){
  return(
    <div className={styles.body}>
      <div className={styles.half}>
        <button className={styles.item}>
        <span>
          <FiTruck />
        </span>
          <p>Бесплатная доставка
            по России</p>
        </button>
        <button className={styles.item}>
        <span>
          <BiBadge size={30}/>
          <p>
          %
          </p>
        </span>
          <p>Беспроцентная
            рассрочка 0-0-12</p>
        </button>
        <button className={styles.item}>
        <span>
          <FiAward />
        </span>
          <p>Официальный партнер
            ведущих брендов</p>
        </button>
      </div>
      <div className={styles.half}>
        <button className={styles.item}>
        <span>
          <BiCheckShield />
        </span>
          <p>Официальная
            гарантия</p>
        </button>
        <button className={styles.item}>
        <span>
          <BiStar />
        </span>
          <p>24 года
            на рынке</p>
        </button>
        <button className={styles.item}>
        <span>
          <BiGift />
        </span>
          <p>Выгодные
            акции</p>
        </button>
      </div>
    </div>
  )
}