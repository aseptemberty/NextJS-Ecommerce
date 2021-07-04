import styles from '../../styles/components/card/overviewsCardComponent.module.scss'

export default function OverviewsCardComponent({ date, name }){

  return(
    <div className={styles.item}>
      <div className={styles.card}/>
      <p className={styles.date}>{date}</p>
      <p>{name}</p>
    </div>
  )
}