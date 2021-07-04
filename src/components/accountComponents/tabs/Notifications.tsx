import styles from '../../../styles/components/account/tabs/notifications.module.scss'
import { FiTag } from 'react-icons/fi'
import React from 'react'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { AiOutlineShop } from 'react-icons/ai'

export default function Notifications(){

  const products=[
    {name:'Зеркальный фотоаппарат со сменной оптикой PANASONIC Lumix DMC-G80 Kit 12-60mm, черный',
      price:200
    },
    {name:'Зеркальный фотоаппарат со сменной оптикой PANASONIC Lumix DMC-G80 Kit 12-60mm, черный',
      price:6000
    }
  ]

  return(
    <div>
      <div className={styles.item}>
        <div className={styles.title}>
          <span><FiTag /></span>
          <p>Снижение цены</p>
        </div>
        {products.map((i)=>(
          <div className={styles.product}>
            <div className={styles.half}>
              <div className={styles.image}/>
              <p className={styles.name}>{i.name}</p></div>
            <div className={styles.half}>
              <p className={styles.price}>{i.price} ₽</p>
              <span className={styles.bin}><RiDeleteBin7Line /></span>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.item}>
        <div className={styles.title}>
          <span><AiOutlineShop /></span>
          <p>Поступление товара</p>
        </div>
        {products.map((i)=>(
          <div className={styles.product}>
            <div className={styles.half}>
              <div className={styles.image}/>
              <p className={styles.name}>{i.name}</p></div>
            <div className={styles.half}>
              <p className={styles.price}>{i.price} ₽</p>
              <span className={styles.bin}><RiDeleteBin7Line /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}