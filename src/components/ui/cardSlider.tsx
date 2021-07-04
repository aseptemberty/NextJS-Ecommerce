import styles from '../../styles/components/product/recentViewComponent.module.scss'
import MediumCardComponent from '../cardComponents/MediumCardComponent'
import React from 'react'
import Slider from "react-slick";
import {defaultSettings, SampleNextArrow, SamplePrevArrow} from "./sliderStyles";


let settings = {
  className: "center",
  infinite: false,
  centerPadding: "60px",
  draggable: true,
  slidesToShow: 5,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  customPaging: (i) => (
    <button
      key={i}
      // onClick={}
      style={{
        width: "8px",
        backgroundColor: "rgba(57, 150, 210, 0.2)",
        borderRadius:'50%',
        marginRight:'8px',
        height:'8px',
      }}
    >

    </button>
  ),
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

export default function CardSlider(props){
  const recentViewToSlider = props.recentViewToSlider

  return (
  <div className={styles.slider}>
    <Slider  {...settings}>
      {recentViewToSlider.map((product, index)=> {
        return(
            <div key={index}>
              <MediumCardComponent
                product={product}
              />
            </div>
        )
      })}
    </Slider>
  </div>
)
}