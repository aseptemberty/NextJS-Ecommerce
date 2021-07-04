import Breadcrumb from '../components/ui/Breadcrumb'
import styles from '../styles/components/brand/brand.module.scss'
import BannerComponent from '../components/brandComponents/BannerComponent'
import SmallSlider from '../components/ui/smallSlider'
import { TYPES } from '../../types/constants'

let categories=[
  {name:'Фотокамеры'},
  {name:'Объективы'},
  {name:'Вспышки'},
  {name:'Спортивная оптика'},
  {name:'Аксессуары'}
]

export default function Brand(){
  return(
    <div className={styles.body}>
      <Breadcrumb />
      <h1 className={styles.title}>NIKON</h1>
      <BannerComponent />
      <div className={styles.slider}>
        <div className={styles.title}>
          <h2>Все товары Nikon</h2>
        </div>
        <SmallSlider type={TYPES.SLIDERS.CATEGORYCARD} itemsToSlider={categories} />
      </div>
      <div className={styles.container}>
        <div className={styles.description}>
          <h2>Профессиональный дилер Nikon</h2>
          <p>«Яркий фотомаркет» является «Профессиональным дилером Nikon», что говорит о высокой степени доверия к компании как к партнеру, а также о профессионализме сотрудников и отличном уровне обслуживания. Сеть фотомагазинов имеет исключительное право продавать профессиональную продукцию Nikon, поставляемую только через дилеров со статусом и имеющую гарантийные талоны* по программе «1+3».</p>
        </div>
        <div className={styles.banner}>
          <div className={styles.action}>Рассрочка 0-0-12</div>
          <p>Выгодное предложение на фотокамеру Nikon Z50</p>
          <p className={styles.title}>-15% скидка за комплект</p>
        </div>
      </div>
    </div>
  )
}