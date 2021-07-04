import styles from '../../styles/components/card/brandCardComponent.module.scss'

export default function BrandCardComponent({ name, src }){

  return(
    <div className={styles.card}>
      <img src={src} alt={name}/>
    </div>
  )
}