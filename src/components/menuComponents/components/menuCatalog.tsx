// @ts-ignore
import styles from '../../../styles/components/menu/menuCatalog.module.scss'
import { CgMenuGridR } from 'react-icons/cg'
import React, { useRef, useState } from "react"
import {IoIosArrowForward} from "react-icons/io";
import MenuCategoryNested from "./menuCategoryNested";
import _ from "lodash"
import { closeMenuExternalClick, useMediaQuery } from "../../../utils/helpers"


//TODO refactor
function MenuCatalog (){
  const isBreakpoint = useMediaQuery(768)
  const [mobileTransition, transition] = useState(false);
  const node = useRef();
  closeMenuExternalClick(node, ()=>setIsActive(false))

  const [isActive, setIsActive] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const categoryTree = {
    title: 'Фото и видео камеры',
    child: [
      {title: 'Компактные камеры', child: [{title: 'Leica'},{title: 'Canon'},{title: 'Panasonic'}]},
      {title: 'Со сменной оптикой', child: [{title: 'Leica'},{title: 'Canon'},{title: 'Panasonic'}]},
      {title: 'Зеркальные камеры', child: [{title: 'Leica'},{title: 'Canon'},{title: 'Panasonic'}]}
    ]
  }

  return(
    <div ref={node} className={styles.menuContainer}>
      <button  onClick={() => setIsActive(!isActive)} className={styles.menuCatalogButton}>
        <span><CgMenuGridR size={24}/></span>
        <p>Каталог товаров</p>
      </button>

      <div className={`${ styles.dropDown } ${isActive ? styles.active : styles.inactive}`}>
        <div className={styles.menu}>

          <nav>
            <ul>
              {_.times(6).map((index) => (
                <li key={index}>
                  <button className={activeTab==index ? styles.active : styles.inactive} onClick={()=>setActiveTab(index)}>
                    <span><IoIosArrowForward size={10}/></span>
                    Категория {index}
                  </button>
                </li>))}
            </ul>
          </nav>
        </div>
        <div className={`${styles.menuNestedContainer}`}>
          <MenuCategoryNested categoryTree={categoryTree} closeMenu={()=>setIsActive(false)}/>
        </div>
      </div>
    </div>
  )
}

export default MenuCatalog