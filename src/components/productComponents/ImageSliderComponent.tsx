import React, { CSSProperties } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from "../../styles/components/product/imageSliderComponent.module.scss"


function ImageSliderComponent({images}) {
  const arrowStyles: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    borderRadius: 20,
    height: 30,
    cursor: 'pointer',
    color: '#3996D2',
  }
  return (
    <>
    <Carousel
      className={`col-12 ${styles.carousel}`}
      showArrows={true}
      showStatus={false}
      thumbWidth={40}
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && (
          <button type="button" onClick={onClickHandler} title={"label"} style={{ ...arrowStyles, left: 5 }}>
            <p className=''>{'<'}</p>
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasPrev) =>
        hasPrev && (
          <button type="button" onClick={onClickHandler} title={"label"} style={{ ...arrowStyles, right: 5 }}>
            <p className=''>{'>'}</p>
          </button>
        )
      }
      showIndicators={false}
      swipeable={true}
      infiniteLoop = {true}
      emulateTouch={true}>

      {images.map((image, index) => (
        <div key={index} >
          <img className= 'border-0' src={image} />
        </div>))
      }

    </Carousel>
    </>
  );
}


export default ImageSliderComponent