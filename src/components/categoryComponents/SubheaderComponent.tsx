import  styles from '../../styles/components/category/subheaderComponent.module.scss'
import TitleComponent from '../productComponents/TitleComponent'
import { BiFilter } from 'react-icons/bi'
import Dropdown from '../ui/Dropdown'
import { CgMenuGridR } from 'react-icons/cg'
import { BsListUl } from 'react-icons/bs'
import React, { useState } from 'react'

export default function SubheaderComponent({title}){
  const [toggle, setToggle] = useState('medium');
  const options=[
    'Сначала популярные',
    'Сначала подешевле',
    'Сначала подороже',
    'Сначала новинки',
    'По размеру скидки'
  ]

  return(
    <div className={styles.top}>
      <TitleComponent title={title} />
      <div className={styles.right}>
        <div>
          <button className={styles.filterButton + ' flex xl:hidden'}>
            <span><BiFilter size={20}/></span>
            <p className='  hidden  sm:flex md:flex lg:flex xl:flex'>Фильтры</p>
          </button>
        </div>
        <div className={styles.right}>
          <Dropdown
            title={'Сначала популярные'}
            options={options}
            type={'form'}
            width={264}
          />
          <button
            onClick={()=>setToggle('medium')}
            className={`${toggle == "medium" ? styles.buttonActive : styles.buttonInactive}` + '  hidden  sm:flex md:flex lg:flex xl:flex'}>
            <span><CgMenuGridR size={24}/></span>
          </button>
          <button
            onClick={()=>setToggle("big")}
            className={`${toggle == "big" ? styles.buttonActive : styles.buttonInactive}` + '  hidden  sm:flex md:flex lg:flex xl:flex'}>
            <span><BsListUl size={24}/></span>
          </button>
        </div>
      </div>
    </div>
  )
}