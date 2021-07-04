import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import React from "react";

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        display: "flex",
        justifyContent:'center',
        alignItems:'center',
        background: "white" ,
        height:40,
        position: 'absolute',
        zIndex: 2,
        color:'#3996D2',
        top: props.top,
        right:10,
        width: 40,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
        borderRadius: '50%',
        cursor: 'pointer',}}
      onClick={onClick}
    >
      <MdKeyboardArrowRight size={24}/>
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        display: "flex",
        justifyContent:'center',
        alignItems:'center',
        background: "white" ,
        height:40,
        position: 'absolute',
        zIndex: 2,
        top: props.top,
        width: 40,
        left:10,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
        borderRadius: '50%',
        cursor: 'pointer',
        color:'#3996D2'}}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft size={24}/>
    </div>
  );
}

export function defaultSettings(type) {
  let style
  switch (type){
    case 'brand'|| 'recent':
      style = 'calc(50% - 15px)'
      break
    case 'overview':
      style = 'calc(50% - 55px)'
      break
  }
  return {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    draggable: true,
    slidesToShow: 5,
    nextArrow: <SampleNextArrow top={style}/>,
    prevArrow: <SamplePrevArrow top={style}/>,
    customPaging: (i) => (
      <button
        key={i}
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
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 785,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

}
