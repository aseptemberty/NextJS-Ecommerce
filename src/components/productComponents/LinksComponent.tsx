import styles from '../../styles/components/product/links.module.scss'
import { BiBell , BiCheckShield } from 'react-icons/bi'
import { BsQuestionCircle } from 'react-icons/bs'
import React from 'react'
import Link from 'next/link'
import { AiOutlinePrinter } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'

export default function LinksComponent(){
  return (
    <div className={styles.body}>
      <div className={styles.half}>
        <Link href='#'>
          <a>
            <span className={styles.link}>
              <span>
                <BiBell />
              </span>
            <p>
              Уведомить о снижении цены
            </p>
            </span>
          </a>
        </Link>
        <Link href='#'>
          <a>
            <span className={styles.link}>
              <span>
                <BsQuestionCircle/>
              </span>
            <p>Нашли дешевле?</p>
            </span>
          </a>
        </Link>
        <Link href='#'>
          <a>
            <span className={styles.link}>
              <span>
                <BiCheckShield/>
              </span>
              <p>
                Официальная гарантия Canon 2 года
              </p>
            </span>
          </a>
        </Link>
        <p>Цены в наших розничных магазинах могут отличаться от цен, указанных на сайте интернет-магазина yarkiy.ru</p>
      </div>
      <div className={styles.half}>
        <div className={styles.halfLinkBody}>
          <p>В наличии</p>
          <Link href='#'>
            <a>
              <p className={styles.halfLink}>
                в 13 магазинах
              </p>
            </a>
          </Link>
        </div>
        <div className={styles.halfLinkBody}>
          <Link href='#'>
            <a>
              <p className={styles.halfLink}>
                Доставка курьером
              </p>
            </a>
          </Link>
          <p>бесплатно от 3 000₽</p>
        </div>
        <div className={styles.halfLinkBody}>
          <Link href=''>
            <a>
              <p className={styles.halfLink}>
                Пункты выдачи
              </p>
            </a>
          </Link>
          <p>147</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.buttons}>
            <button>
              <span><AiOutlinePrinter size={20}/></span>
              <p>Распечатать</p>
            </button>
            <button>
              <span><FiMail size={20}/></span>
              <p>Отправить на e-mail</p>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}