import styles from '../../styles/components/card/categoryCardComponent.module.scss'

export default function CategoryCardComponent({name}){
  return(
    <div className={styles.body}>
      <div className={styles.card}>
      </div>
      <p>{name}</p>
    </div>
  )
}