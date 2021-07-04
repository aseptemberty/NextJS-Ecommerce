import styles from '../../styles/components/category/bannerComponent.module.scss'
import Link from "next/link"
import AddToCartButton from "../AddToCartButton"
import { PATHS } from "../../../types/paths"
import React from "react";

export default function BannerComponent({ action, promo }){
  const {id, title, price } = promo
  return(
    <div className={styles.card}>
      {action?
      <button className={styles.action}>Акция</button>
        :<></>
      }
      <div className={styles.promo}>
        <h2 className={styles.title}>Предзаказ Olympus E-M1 Mark III </h2>
        <p>Аккумулятор BLH-1 и повседневный рюкзак Olympus в подарок</p>
      </div>
      <div className={styles.buttons}>
        <Link href={`${PATHS.base}/${PATHS.PRODUCT}/${id}`}>
          <a>
            <button className={styles.dark}>
              <p>Подробнее</p>
            </button>
          </a>
        </Link>
        <AddToCartButton type={'lightBanner'}  product={promo}/>
      </div>
    </div>
  )
}