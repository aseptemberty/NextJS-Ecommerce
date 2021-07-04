import styles from '../../styles/components/cart/productInCartComponent.module.scss'
import QuantityPicker from '../ui/QuantityPicker'
import { BsBookmark } from 'react-icons/bs'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { BiCheckCircle } from 'react-icons/bi'
import { AiOutlineGift, AiOutlineQuestionCircle } from 'react-icons/ai'
import React from 'react'
import Link from 'next/link'
import Image from "../Image"
import {
  decrementProductInCart,
  incrementProductInCart,
  removeProductFromCart,
} from "../../utils/redux/actions/cartActions"
import { connect } from "react-redux"
import { Checkbox, RadioButton } from "../ui/Inputs"
import { currencyFormat } from "../../utils/helpers"

function ProductInCartComponent({cart, numberOfItemsInCart, incrementProductInCart, decrementProductInCart, removeProductFromCart}){

  return (
    <>
      { cart.map((product, index) => (
        <div className={styles.container} key={index}>
        <div className={styles.image}>
          <Image src={product.image} className="w-10 " alt="Showcase item" />
        </div>
        <div className={styles.rightPart}>
          <div className={styles.body}>
            <div className={styles.left}>
              <p className={styles.title}>
                {product.title}
              </p>
              <div className={styles.artAndCode}>
                <p>Код товара: {product.code_1c}</p>
                <p>Артикул: {product.sku}</p>
              </div>
              <div className={styles.availability}>
                <p>В наличии</p>
                <Link href="#">
                  <a>
                    в 13 магазинах
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.top}>
                <div className={styles.quantityPicker}>
                  <QuantityPicker
                    numberOfitems={product.quantity}
                    increment={()=>incrementProductInCart(product)}
                    decrement={()=>decrementProductInCart(product)}

                  />
                </div>
                <div className={styles.priceBlock}>
                  <p className={styles.oldPrice}>
                    {currencyFormat(product.oldPrice * product.quantity)}
                  </p>
                  <p className={styles.newPrice}>
                    {currencyFormat(product.price * product.quantity)}
                  </p>
                </div>
              </div>
              <div className={styles.bottom}>
                <button>
                  <span> <BsBookmark size={22} /></span>
                  <p>В закладки</p>
                </button>
                <button onClick={()=>removeProductFromCart(product)}>
                  <span><RiDeleteBin7Line size={22} /></span>
                  <p>Удалить</p>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.action}>
            <div className={styles.item}>
              <div className={styles.title}>
                <p>Выбор акций</p>
                <span><BiCheckCircle size={20} /></span>
              </div>
              <ul>
                <li>
                  <Checkbox/>
                  <p>Объектив в подарок</p>
                </li>
                <li>
                  <Checkbox/>
                  <div>
                    <p>Онлайн-кредит от банка HomeCredit</p>
                    <p className={styles.inactive}>Не все товары в заказе можно оплатить в рамках этой
                      акции <span><AiOutlineQuestionCircle /></span></p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>
                <p>Выбор подарков</p>
                <span><AiOutlineGift size={20} style={{ color: " #3CA532" }} /></span>
              </div>
              <ul>
                <div className={styles.radioButtons}>
                  <li>
                    <RadioButton/>
                    <p>Объектив PANASONIC Lumix G 25mm f/1.7 ASPH (H-H025ME-K), черный</p>
                  </li>
                  <li>
                    <RadioButton/>
                    <p>Объектив PANASONIC Lumix G 25mm f/1.7 ASPH (H-H025ME-K), серебряный</p>
                  </li>
                </div>
                <li>
                  <Checkbox/>
                  <p>Сертификат "Яркая фотошкола" - Экспресс-курс «Знакомьтесь, фотоаппарат!»</p>
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>
                <p>Действующие акции</p>
              </div>
              <ul className={styles.current}>
                <li>
                  <p>Подарок по акции «Объектив в подарок»</p>
                  <Link href="#">
                    <a>
                      подробнее
                    </a>
                  </Link>
                </li>
                <li>
                  <p>Сертификат "Яркая фотошкола" - Экспресс-курс «Знакомьтесь, фотоаппарат!»</p>
                  <Link href="#">
                    <a>
                      подробнее
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>))}
    </>
  )
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
  numberOfItemsInCart: state.cart.numberOfItemsInCart,
});

const mapDispatchToProps = {
  incrementProductInCart: incrementProductInCart,
  decrementProductInCart: decrementProductInCart,
  removeProductFromCart: removeProductFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInCartComponent)