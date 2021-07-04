import Link from 'next/link';
import React from 'react';
import ReactStars from "react-rating-stars-component";
import styles from '../../styles/components/category/yaMarketComponent.module.scss'
import { BsStarHalf, BsStar, BsStarFill } from 'react-icons/bs'

export default function YaMarketComponent(){
  return(
    <Link href='#' >
      <a>
        <div className={styles.body}>
          <div className={styles.logo}/>
          <p className={styles.rating}>Рейтинг магазина</p>
          <ReactStars
                      filledIcon={<BsStarFill/>}
                      emptyIcon={<BsStar/>}
                      halfIcon={<BsStarHalf />}
                      size={24}
                      edit={false}
                      isHalf={true}
                      activeColor='#2D2D2D'
                      color='#2D2D2D'
                      value='4'
          />
          <button>Оставить отзыв</button>
          <p>Читать отзывы</p>
        </div>
      </a>
    </Link>
  )
}