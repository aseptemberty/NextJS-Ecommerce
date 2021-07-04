// @ts-ignore
import { Buttons, menuIcons, menuIcon, menuIconCircle, menuButton, menuButtonIcon }from '../../../styles/components/menu/menuInfoPanel.module.scss'
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import { BiBarChart } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import Link from "next/link"

import {connect} from "react-redux";
import {PATHS} from "../../../../types/paths";
import React from "react";
import { currencyFormat } from "../../../utils/helpers"


function MenuInfoPanel(props){
  return(
    <div className={Buttons}>
      <div className={menuIcons}>
        <div className={menuIcon +' xs:block sm:block md:hidden lg:hidden'}>
          <AiOutlineSearch  size={24}/>
        </div>
        <div className={menuIcon +' '}>
          <AiOutlineUser size={22}/>
        </div>
        <div className={menuIcon +' hidden sm:hidden md:block'}>
          <BiBarChart size={22}/>
          <div className={menuIconCircle}>
            1
          </div>
        </div>
        <div className={menuIcon +' hidden sm:hidden md:block'}>
          <BsBookmark size={20}/>
          <div className={menuIconCircle}>
            1
          </div>
        </div>
      </div>
      <Link href={`${PATHS.base}/${PATHS.CARTS}`}>
        <a>
          <button className={menuButton}>
                <span className={menuButtonIcon}>
                  <div className={menuIconCircle}>
                    {props.numberOfItemsInCart}
                </div>
                </span>
            <FaShoppingCart />
            <p className='hidden md:flex'>{currencyFormat(props.total)}</p>
          </button>
        </a>
      </Link>
    </div>
  )
}

const mapStateToProps = state => ({
  numberOfItemsInCart: state.cart.numberOfItemsInCart,
  total: state.cart.total,
  cart: state.cart.cart

});


export default connect(mapStateToProps)(MenuInfoPanel);