import MediumCardComponent from '../cardComponents/MediumCardComponent'
import styles from '../../styles/components/category/cardsTableComponent.module.scss'
import { useMediaQuery } from '../../utils/helpers'
import BannerComponent from './BannerComponent'
import React from 'react'

export default function CardsTableComponent({productsArr, promoProduct}){

  const isBreakpointCards = useMediaQuery(500)

  return(
    <div className={styles.body + ' row'}>

      {productsArr.map((product, index)=>(
          <div
            className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3'
            style={{padding:0}}
          >
            <MediumCardComponent product={product} key={index} />
          </div>
        ) )
      }

      <BannerComponent
        promo = {promoProduct}
        action={true}
      />

      {productsArr.map((product, index)=>(
          <div
            className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3'
            style={{padding:0}}
          >
            <MediumCardComponent product={product} key={index} />
          </div>
        ) )
      }
    </div>
  )
}