import Link from 'next/link';
import React from 'react';
import ReactStars from "react-rating-stars-component";
import styles from '../../styles/components/product/subtitleComponent.module.scss'
import {ActionsComponent} from "./ActionsComponent";

export default function SubtitleComponent({code1c, sku, rating}) {

  const ratingExample = {
    color: "#C6C8CD",
    activeColor: "#FFD500",
    size: 20,
    value: rating.average,
    edit: false
  };

  return (
    <div className={styles.subtitle}>
      <div className={styles.top}>
        <div className={styles.rating}>
          <ReactStars {...ratingExample} />
          <Link href='#'>
            <a>
              <p>
                {rating.count} отзывов
              </p>
            </a>
          </Link>
        </div>
        <div className='hidden 2xl:flex'>
          <ActionsComponent />
        </div>
        <div className={styles.artCode}>
          <p>
            Код товара : {code1c}
          </p>
          <p>
            Артикул : {sku}
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className='hidden md:flex lg:flex 2xl:hidden'>
          <ActionsComponent />
        </div>
      </div>
    </div>
  //  Отзывы

  // Иконки сравнения и закладок
  )
}