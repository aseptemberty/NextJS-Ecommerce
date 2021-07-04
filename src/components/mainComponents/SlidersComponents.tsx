import styles from '../../styles/components/main/main.module.scss'
import SmallSlider from '../ui/smallSlider'
import { TYPES } from '../../../types/constants'
import React from 'react'

export default function MainSlider({type, title, itemsToSlider}){
  return(
    <>{
      type ==='new'?
        <div className={styles.new}>
          <div className={styles.title}>
            <h2>{title}</h2>
          </div>
          <div className={styles.slider}>
            <SmallSlider type={TYPES.SLIDERS.RECENTVIEWS} itemsToSlider={itemsToSlider}/>
          </div>
        </div>
        :
        <div className={styles.news}>
          <div className={styles.title}>
            <h2>{title}</h2>
            <p>Читать все</p>
          </div>
          <div className={styles.slider}>
            <SmallSlider itemsToSlider={itemsToSlider} type={TYPES.SLIDERS.OVERVIEWS}/>
          </div>
        </div>
    }</>
  )
}
