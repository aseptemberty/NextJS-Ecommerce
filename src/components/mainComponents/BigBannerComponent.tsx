import styles from '../../styles/components/main/bigBannerComponent.module.scss'
import React from 'react'

function BigBannerComponent(){
  return(
    <div className={styles.card}>
      <div className={styles.top}>
        <p>Беспроцентная рассрочка</p>
        <div className={styles.action}> Акции</div>
      </div>
      <h1>Меняйтесь c Nikon</h1>
      <p className={styles.sale}>Рассрочка на камеры Nikon</p>
    </div>
  )
}

// @ts-ignore
export default BigBannerComponent;