import BigCardComponent from '../cardComponents/BigCardComponent'
import React from 'react'
import BannerComponent from './BannerComponent'



export default function TileTableComponent ({productsArr, promoProduct}){
  return(
    <div style={{marginBottom:60, paddingTop:18}}>
      {
        productsArr.map((product, index)=>(
          <div>
            <BigCardComponent product={product} key={index} />
          </div>
        ))
      }
      <BannerComponent
        promo = {promoProduct}
        action={true}
      />
      {
        productsArr.map((product, index)=>(
          <div>
            <BigCardComponent product={product} key={index} />
          </div>
        ))
      }
    </div>
  )
}