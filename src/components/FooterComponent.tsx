import styles from '../styles/components/footerComponent.module.scss'
import Link from "next/link"
import { FaInstagram, FaFacebookF, FaTwitter, FaVk, FaApplePay } from 'react-icons/fa'
import { MdShoppingCart } from 'react-icons/md'
import { FiMail } from 'react-icons/fi'
import { RiVisaLine, RiMastercardLine , RiHomeFill} from 'react-icons/ri'
import { SiSamsung, SiGooglepay } from 'react-icons/si'
import { BiChevronDown } from 'react-icons/bi'
import { useMediaQuery } from "../utils/helpers"
import { useState } from "react"

const FooterList = [
  {
    title:"Фотомаркет",
    list:[
      {item:'О нас'},
      {item:'Вакансии'},
      {item:'Корпоративный отдел'},
      {item:'Работа с фотографами'},
      {item:'Партнёрство'},
      {item:'Бренды'},
      {item:'Обратная связь'}
    ]
  },
  {
    title:"Услуги",
    list:[
      {item:'Доставка и оплата'},
      {item:'Пункты выдачи'},
      {item:'Сервис'},
      {item:'Тест-драйв'},
      {item:'Оптовая торговля'},
      {item:'Выкуп Б/У техники'},
      {item:'Помощь'}
    ]
  },
  {
    title:"Бонусы",
    list:[
      {item:'Акции'},
      {item:'Акции'},
      {item:'Рассрочка и кредит'},
      {item:'Дисконтная программа'},
      {item:'Подарочные сертификаты'}
    ]
  },
  {
    title:"Блог",
    list:[
      {item:'Новости'},
      {item:'Видеообзоры'},
      {item:'Анонсы'},
      {item:'Прошивки'},
      {item:'Обзоры'},
    ]
  },
]

function FooterComponent() {
  const isBreakpoint = useMediaQuery(768)
  const [toggle, setToggle] = useState('');
  return (
    <div className={styles.footer + ' px-2 md:px-3 lg:px-4 xl:px-10'}>
      <div className={styles.top}>
        {FooterList.map((list,index)=>(
          <div key={index} className={isBreakpoint? styles.menu : 'column'}>
            <Link href=''>
              <a>
                <h4>{list.title}</h4>
              </a>
            </Link>
            <button
              className=' flex md:hidden'
              onClick={() => toggle!=list.title? setToggle(list.title): setToggle('')}>
              <BiChevronDown
              size={16}
              />
            </button>
            <>
              {list.list.map((item,index)=>(
                <Link href='' key={index}>
                  <a>
                    <p className={toggle==list.title? ''  :'hidden md:flex'} >{item.item}</p>
                  </a>
                </Link>
              ))}</>
          </div>
        ))
        }
        <div className={styles.topRight}>
          <div>
            <h4>8-800-555-01-02</h4>
            <p>Яркая поддержка</p>
          </div>

          <div className={styles.socialIcons}>
            <span className={styles.socialIcon}>
              <FaVk/>
            </span>
            <span className={styles.socialIcon}>
              <FaFacebookF />
            </span>
            <span className={styles.socialIcon}>
              <FaInstagram />
            </span>
            <span className={styles.socialIcon}>
              <FaTwitter/>
            </span>
          </div>
          <div className={styles.yaMarket}>
            <div className={styles.icon}>
              <div className={styles.iconInner}>
                <RiHomeFill size={50}/>
              </div>
              <div className={styles.cart}>
                <MdShoppingCart size={20}/>
              </div>
            </div>
            <div className={styles.yaRating}>
              <h5>Понравился магазин?</h5>
              <p>Оцените нас на Яндекс.Маркете</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.subscribe}>
        <div className={styles.sale}>
          <h3>Подпишитесь на новости</h3>
          <p>о распродажах и новинках</p>
        </div>
        <div className={styles.subscription}>
          <input type='text' placeholder='Ваш email'/>
          <button type='submit'>
          <span>
            <FiMail size={16}/>
          </span>
            Подписаться
          </button>
          <p>Нажимая на кнопку «подписаться», вы соглашаетесь на
            <span className={styles.link}>
              <Link href='#' >
                <a>
                  обработку персональных данных.
                </a>
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className={styles.paymentPartners}>
        <span className={styles.item}>
          <RiVisaLine size={50}/>
        </span>
        <span className={styles.item}>
          <RiMastercardLine size={50}/>
          <p>mastercard</p>
        </span>
        <p className={styles.item}>МИР</p>
        <span className={styles.item}>
          <FaApplePay size={50}/>
        </span>
        <span className={styles.item}>
          <SiSamsung size={80}/>
        </span>
        <span className={styles.item}>
          <SiGooglepay size={50}/>
        </span>
      </div>
      <div className={styles.bottom}>
        <p className={styles.title}>© 2020 – Яркий фотомаркет</p>
        <span>
          <p>Пользовательское соглашение</p>
          <p>Политика конфиденциальности</p>
          <p>Условия продажи</p>
        </span>
      </div>
    </div>
  )

}
export default FooterComponent