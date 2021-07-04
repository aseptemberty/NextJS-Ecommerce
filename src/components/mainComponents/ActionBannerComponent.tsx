import styles from '../../styles/components/main/actionBannerComponent.module.scss'
import React from 'react'

export default function ActionBannerComponent(){
  return(
      <div className={styles.actionBanner}>
        <div className={styles.half}>
          <h2>Хотите купить технику дешевле?</h2>
          <p>Протестируйте Б/У технику до заключения договора купли-продажи.</p>
          <button>Купить</button>
        </div>
        <div className={styles.half}>
          <h2>Завалялась старая техника?</h2>
          <p>Покупаем фотоаппараты, объективы и другую фототехнику.</p>
          <button>Продать</button>
        </div>
      </div>
    )
}