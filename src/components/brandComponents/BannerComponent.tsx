import styles from '../../styles/components/brand/bannerComponent.module.scss'

export default function BannerComponent(){
  return(
    <div className={styles.body}>
      <div className={styles.half}>
        <img src={"https://www.yarkiy.ru/system/uploads/preview/brand/2/medium_logo_fujifilm.png"}  alt={''} className={styles.logo}/>
        <p>«Яркий фотомаркет» является "Профессиональным дилером Nikon", что говорит о высокой степени доверия к компании как к партнеру, а также о профессионализме сотрудников и отличном уровне обслуживания.</p>
        <button className={styles.showMoreButton}>Смотреть все товары</button>
      </div>
      <div className={styles.half}>

      </div>
    </div>
  )
}