import Image from '../Image'
import Link from 'next/link'
import classes from "../../styles/components/card/bigCartComponent.module.scss"
import ReactStars from "react-rating-stars-component";
import {BiBarChart} from "react-icons/bi";
import {BsBookmark} from "react-icons/bs";
import {BsCheckCircle} from "react-icons/bs"
import React from 'react';
import AddToCartButton from "../AddToCartButton"
import { PATHS } from "../../../types/paths"
import { currencyFormat, useMediaQuery } from "../../utils/helpers"



function BigCardComponent ({ product }) {
  const imageSrc = product.image
  const title = product.title
  const code1c = product.code1c
  const sku = product.sku
  const price = product.price
  const oldPrice = product.oldPrice
  const link=`${PATHS.base}/${PATHS.PRODUCT}/${product.id}`
  const isBreakpoint = useMediaQuery(500)

  const firstExample = {
    color: "#C6C8CD",
    activeColor: "#FFD500",
    size: 20,
    value: product.rating.average,
    edit: false
  };

  return (
    <div className="w-full">
      <div className={classes.cardBody}>
        <div className={classes.colLeft}>
          <div className={classes.imageBox}>
            <p className={classes.action}>Акция</p>
            <div className={classes.imageBoxIcons}>
              <BiBarChart/>
              <BsBookmark/>
            </div>
            <Link href={link}>
              <a>
                <div className={classes.imageBoxInner}>
                  <Image src={imageSrc} alt="Showcase item" />
                </div>
              </a>
            </Link>
          </div>
          <div className={classes.colCenter}>
            <Link href={link}>
              <a>
                <p className={classes.title}>{title}</p>
              </a>
            </Link>
            <div className={classes.rating}>
              <Link href={""}>
                <a>
                  <ReactStars {...firstExample} />
                </a>
              </Link>
              <p>{product.rating.count} отзывов</p>
            </div>
            <div className={classes.description}>
              <div className={classes.descriptionArtAndCode}>
                <p className={classes.descriptionGrey}>Артикул: &nbsp;</p><p>{sku}</p>
                <p className={classes.descriptionGrey}>Код товара: &nbsp;</p><p>{code1c}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.colRight}>
          <div className={classes.cardDash}/>
          <div className={classes.colRightInner}>
            <div className={classes.colRightTop}>
              <div className={classes.oldPrice}>
                <div className={classes.oldPriceDash}/>
                {currencyFormat(oldPrice)}
              </div>
              <div className={classes.newPrice}>
                {currencyFormat(price)}
              </div>
            </div>
            <div className={classes.colRightBottom}>
              <div className={classes.specials}>
                <BsCheckCircle />
                <p className={classes.specialsPar}>Беспроцентная рассрочка</p>
              </div>
              <div className={classes.specials}>
                <BsCheckCircle />
                <p className={classes.specialsPar}>18 000 рублей в подарок!</p>
              </div>
              <a href="" className={classes.specialsMore}>еще 2 акции</a>
            </div>

            {!!isBreakpoint?<AddToCartButton type={'short'} product={product}/>
              :<AddToCartButton type={'withTitle'} product={product}/>
            }

          </div>
        </div>
      </div>
    </div>
  )
}
export default BigCardComponent