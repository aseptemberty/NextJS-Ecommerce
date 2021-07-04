import Link from 'next/link'
import React from 'react'
import TitleComponent from "../TitleComponent";
import styles from '../../../styles/components/product/tabs/review.module.scss'

export default function Overview(){
  return(
    <div className={styles.body}>
      <TitleComponent  title='Наш обзор' />
      <div className={styles.card}>
        <div className={styles.image}>

        </div>
        <div className={styles.right}>
          <Link href='#'>
            <a>
              <span>
                <p className={styles.date}>22 февраля</p>
                <p className={styles.name}>Тест Canon EOS 4000D</p>
                <p className={styles.desc}>Съемка видео на Canon 4000D. Раскрываем все серкреты профессионального видеографа.</p>
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}