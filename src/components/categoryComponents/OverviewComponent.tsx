import styles from '../../styles/components/category/overviewComponent.module.scss'
import React from "react";
import SmallSlider from "../ui/smallSlider";
import {TYPES} from "../../../types/constants";


let overviews=[
  {
    date:'21 февраля',
    name:'Анонсирована Canon EOS 250D'
  },
  {
    date:'22 февраля',
    name:'Анонсирована Canon EOS 250D'
  },
  {
    date:'23 февраля',
    name:'Анонсирована Canon EOS 250D'
  },
  {
    date:'23 февраля',
    name:'Анонсирована Canon EOS 250D'
  },
  {
    date:'23 февраля',
    name:'Анонсирована Canon EOS 250D'
  },
  {
    date:'23 февраля',
    name:'Анонсирована Canon EOS 250D'
  }
]

export default function OverviewComponent(){
  return(
    <div className={styles.review}>
      <h2> Обзоры <div className='hidden xs:block'>на зеркальные фотоаппараты</div></h2>

      <SmallSlider itemsToSlider={overviews} type={TYPES.SLIDERS.OVERVIEWS}/>
    </div>
  )
}