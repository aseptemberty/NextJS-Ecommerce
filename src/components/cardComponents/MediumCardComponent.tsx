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

    // <div className="
    // mb-4 lg:mb-0
    // bg-light p-8 pb-0 hover:bg-light-200">
    //   <Link href={`${link}`}>
    //     <a aria-label={title}>
    //       <div className="flex flex-column justify-center items-center h-56">
    //         <Image src={imageSrc} alt={title} className="w-3/5" />
    //       </div>
    //       <div className="mb-8">
    //         <p className="text-3xl font-semibold mb-1">{title}</p>
    //         <p className="text-xs text-gray-700">{subtitle}</p>
    //       </div>
    //     </a>
    //   </Link>
    // </div>
  )
}

export default MediumCardComponent;