import Image from '../Image'
import Link from "next/link"
import classes from "../../styles/components/card/mediumCardComponent.module.scss"
import {BiBarChart} from "react-icons/bi";
import {BsBookmark} from "react-icons/bs";
import AddToCartButton from "../AddToCartButton"
import { PATHS } from "../../../types/paths"
import React from "react";
import { currencyFormat } from "../../utils/helpers"


function MediumCardComponent({ product }) {
  const imageSrc = product.image
  const title = product.title
  const price = product.price
  const oldPrice = product.oldPrice
  const link=`${PATHS.base}/${PATHS.PRODUCT}/${product.id}`


  return (
    <div className={classes.cardBody}>
      <div className={classes.cardInner}>
        <div className={classes.cardTop}>
          <p className={classes.action}>Акция</p>
          <div className={classes.cardIcons}>
            <BiBarChart/>
            <BsBookmark/>
          </div>
        </div>
        <div className={classes.cardCenter}>
          <div className={classes.imageBox+" flex flex-column justify-center items-center"}>
            <Image src={imageSrc} alt={title} className={classes.imageImg} />
          </div>
          <div className={classes.titleBox}>
            <Link href={link}>
              <a>
                <p className={classes.title}>{title}</p>
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.cardBottom}>
          <div>
            <div className={classes.oldPrice}>
              <p>
                {currencyFormat(oldPrice)}
              </p>
            </div>
            <div className={classes.newPrice}>
              {currencyFormat(price)}
            </div>
          </div>
          <AddToCartButton type={'short'} product={product}/>
        </div>
      </div>
    </div>
  )
}

export default MediumCardComponent;