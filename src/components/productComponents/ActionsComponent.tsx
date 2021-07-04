import styles from '../../styles/components/product/actionsComponent.module.scss'
import {AiOutlineCheckCircle} from "react-icons/ai";

export function ActionsComponent(){
  return(
    <div className={styles.body}>
      <div className={styles.item}>
        <span><AiOutlineCheckCircle /></span>
        <p>Курс “Знакомьтесь, фотоаппарат” в подарок!</p>
      </div>
      <div className={styles.item}>
        <span><AiOutlineCheckCircle /></span>
        <p>Trade-in</p>
      </div>
      <div className={styles.item}>
        <span><AiOutlineCheckCircle /></span>
        <p>Текст-драйв</p>
      </div>
      <div className={styles.item}>
        <span><AiOutlineCheckCircle /></span>
        <p>Беспроцентная рассрочка</p>
      </div>
    </div>
  )
}