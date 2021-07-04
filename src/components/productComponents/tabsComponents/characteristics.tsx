import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/components/product/tabs/characteristics.module.scss'
import TitleComponent from "../TitleComponent";
import { CgFileDocument } from 'react-icons/cg'


function  Characteristics ({chars}){
  return(
    <div className={styles.inner}>
      <div className={styles.top}>
        <div className={styles.instructions}>
          <h3 className='hidden md:block'>Инструкции и документы</h3>
          <div className={styles.links}>
            <Link href=''>
            <a>
              <span className={styles.link}>
                <span className={styles.icon}><CgFileDocument size={23}/></span>
                <p>Инструкция по эксплуатации</p>
              </span>
            </a>
            </Link>
            <Link href=''>
            <a>
              <span className={styles.link}>
                <span className={styles.icon}><CgFileDocument size={23}/></span>
                <p>Гарантия</p>
              </span>
            </a>
            </Link>
          </div>
        </div>
        <TitleComponent title="Характеристики"/>
      </div>
      {chars.map((char,index)=>(
        <div className={styles.chars} key={index}>
          <h4>{char.title}</h4>
          <div className={styles.desc}>
            {char.childChar.map((item,index)=>(
              <div className={styles.descItem} key={index}>
                <p>{item.title}</p>
                <p>{item.par}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Characteristics
