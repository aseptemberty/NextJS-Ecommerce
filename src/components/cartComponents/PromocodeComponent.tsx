import styles from '../../styles/components/cart/promocodeComponent.module.scss'

export default function PromocodeComponent(){
  return(
    <div className={styles.body}>
      <div className={styles.item}>
        <label htmlFor='code'>Промокод</label>
        <input type='text'  id='code'/>
        <button className={styles.apply}>
          <p>Применён</p>
        </button>
      </div>
    </div>
  )
}