import styles from '../../styles/components/category/brandsComponent.module.scss'
import React from 'react'
import SmallSlider from "../ui/smallSlider";
import {TYPES} from "../../../types/constants";


let testBrands=[
  {name:'Nikon', link: "https://www.yarkiy.ru/system/uploads/preview/brand/2/medium_logo_fujifilm.png"},
  {name:'Canon', link: "https://www.yarkiy.ru/system/uploads/preview/brand/2/medium_logo_fujifilm.png"},
  {name:'Samsung', link: "https://www.yarkiy.ru/system/uploads/preview/brand/2/medium_logo_fujifilm.png"},
  {name:'Nikon', link: "https://www.yarkiy.ru/system/uploads/preview/brand/2/medium_logo_fujifilm.png"},
  {name:'Canon', link: "https://www.yarkiy.ru/system/uploads/preview/brand/2/medium_logo_fujifilm.png"},
  {name:'Samsung', link: "https://www.yarkiy.ru/system/uploads/preview/brand/2/medium_logo_fujifilm.png"},
]

export default function BrandsComponent(){
  return(
    <div className={styles.body}>
      <h2 className={styles.title}>Бренды</h2>
      <SmallSlider itemsToSlider={testBrands} type={TYPES.SLIDERS.BRANDS}/>
    </div>
  )
}