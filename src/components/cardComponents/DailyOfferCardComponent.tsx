import styles from '../../styles/components/card/dailyOfferCardComponent.module.scss'
import AddToCartButton from '../AddToCartButton'
import React from 'react'


function DailyOfferCardComponent({product}){
  // @ts-ignore
    return(
    <div className={styles.card}>
      <div className={styles.top}>
        <h4>Товар дня</h4>
        <div className={styles.action}>
          15:13:38
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.image}>
          <img src={product.image}  alt="Showcase item" />
        </div>
        <p>Объектив Samyang 8mm T3.1 Cine UMC Fisheye II VDSLR Canon EF-M</p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.priceBlock}>
          <p className={styles.oldPrice}>200 000 ₽</p>
          <p className={styles.newPrice}>158 490 ₽</p>
        </div>
        <AddToCartButton type={'short'} product={product}/>
      </div>
    </div>
  )
}

export default DailyOfferCardComponent;