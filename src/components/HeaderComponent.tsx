import Link from "next/link"
import styles from '../styles/components/headerComponent.module.scss'
import {URL} from "../../types/constants"
import { MdMenu } from 'react-icons/md'
import CityButton from "./CityButton"


const partnerMenuLink = [
  URL.PARTNERS.PRODUCT,
  URL.PARTNERS.PIXELPARK,
  URL.PARTNERS.SCHOOL,
  URL.PARTNERS.RENT,
  URL.PARTNERS.SERVICE
]

function HeaderComponent() {
  return (
    <div className={styles.header + ' w-full'}>
      <div className={styles.partnersMenu}>
        {partnerMenuLink.map((link, index) => (
          <div className={styles.tab} key={index}>
            <div className={styles.tabRhumb}/>
            <Link href={link.url}>
              <a aria-label="products">
                <p>
                  {link.title}
                </p>
              </a>
            </Link>
          </div>))
        }
      </div>
      <div className={`${styles.cityInfo} `} >
        <CityButton/>
        <div className={styles.menuBurger}>
          <MdMenu size={24}/>
        </div>
        <div className={styles.tab}>
          <div className="md:hidden lg:hidden xl:block">
            <p>2 магазина</p>
          </div>
        </div>
        <div className={styles.tab}>
          <div className="md:hidden lg:hidden xl:block">
          <p>
            Курьерская доставка
          </p>
          </div>
        </div>
        <div className={styles.tab}>
          <div className="md:hidden lg:hidden xl:block">
          <p>
            Обратная связь
          </p>
          </div>
        </div>
        <div className={styles.tab}>
          <p>
            +999-999-99-99
          </p>
        </div>
      </div>
    </div>)
}
export default HeaderComponent