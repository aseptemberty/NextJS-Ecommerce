import styles from '../../styles/components/ui/SmallSlider.module.scss';
import React from "react";
import Slider from "react-slick";
import {defaultSettings} from "./sliderStyles"
import BrandCardComponent from "../cardComponents/BrandCardComponent"
import OverviewsCardComponent from "../cardComponents/OverviewsCardComponent"
import MediumCardComponent from "../cardComponents/MediumCardComponent";
import {TYPES} from "../../../types/constants";
import CategoryCardComponent from '../cardComponents/CategoryCardComponent'


const itemStyle = {
  height: 100+'%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 10 + 'px',
}



export default function  SmallSlider({itemsToSlider, type}){
  let CardToSlider: (itemToSlider) => JSX.Element

  switch (type){
    case TYPES.SLIDERS.BRANDS:
      CardToSlider = (item) =>{
        return(
          <BrandCardComponent src={item.itemToSlider.link} name={item.itemToSlider.name}/>
        )
      }
      break
    case TYPES.SLIDERS.OVERVIEWS:
      CardToSlider = (item) =>{
        return(
          <OverviewsCardComponent date={item.itemToSlider.date} name={item.itemToSlider.name}/>
        )
      }
      break
    case TYPES.SLIDERS.RECENTVIEWS:
      CardToSlider = (item) =>{
        return(
          <MediumCardComponent product={item.itemToSlider}/>
        )
      }
      break
    case TYPES.SLIDERS.CATEGORYCARD:
      CardToSlider = (item) =>{
        return(
          <CategoryCardComponent name={item.itemToSlider.name} />
        )
      }
      break
  }


  return (
    <div className={styles.slider} >
      <Slider  {...defaultSettings(type)} >
        {itemsToSlider.map((item, index)=> (
            <>
              <div style={itemStyle} key={index}>
                <CardToSlider itemToSlider={item}/>
              </div>
            </>
          ))}
      </Slider>
    </div>
  )
}