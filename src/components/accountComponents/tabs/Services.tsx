import styles from '../../../styles/components/account/tabs/services.module.scss'

export default function Services(){

  const services=[
    {
      artikul:'200314-15',
      date:'2 февраля 2001',
      process:'process',
      
    }
  ]

  return(
    <div className={styles.body}>
      <div className={styles.item}>
        <div className={styles.half}>
          <p>200314-15</p>
          <p></p>
        </div>
        <div className={styles.half}></div>
      </div>
    </div>
  )
}