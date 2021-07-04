import styles from '../../styles/components/main/topBannerComponent.module.scss'
import { PATHS } from '../../../types/paths'
import Image from '../Image'
import React from 'react'

export default function TopBannerComponent({title,text,color}){
  // @ts-ignore
  return(
    <div className={styles.card} style={{backgroundColor:color}}>
      <div className={styles.image} >
        <Image src={`${PATHS.base}/images/1580.png`}/>
      </div>
      <div className={styles.right}>
        <h3>{title}</h3>
        <p>{text}</p>
        <button>Купить</button>
      </div>
    </div>
  )
}