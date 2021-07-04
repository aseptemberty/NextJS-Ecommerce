import Head from 'next/head'
import React from 'react'
import fetchProducts from "../utils/providers/productProvider";
import fetchCategories from "../utils/providers/categoryProvider"
import DailyOfferCardComponent from '../components/cardComponents/DailyOfferCardComponent'
import styles from '../styles/components/main/main.module.scss'
import TopBannerComponent from '../components/mainComponents/TopBannerComponent'
import BigBannerComponent from '../components/mainComponents/BigBannerComponent'
import { useMediaQuery } from '../utils/helpers'
import BannerComponent from '../components/categoryComponents/BannerComponent'
import ActionBannerComponent from '../components/mainComponents/ActionBannerComponent'
import MainSlider from '../components/mainComponents/SlidersComponents'
import SmallSlider from '../components/ui/smallSlider'
import { TYPES } from '../../types/constants'

const banners=[
  {
    title:'Яркий подарок',
    text:'Объектив от нас в подарок\n' +
      'при покупке Nikon D5600',
    color:'#336799'
  },
  {
    title:'14% на iPhone 11 на 14 февраля',
    text: 'При покупке аксессуаров от 2 999 ₽',
    color:'#3CA532'
  }
]

let overviews=[
  {
    date:'21 февраля',
    name:'Старт продаж новой фотокамеры Nikon Coolpix P950'
  },
  {
    date:'22 февраля',
    name:'Карта памяти 64 ГБ в подарок к фотокамере Sony a7R IV'
  },
  {
    date:'23 февраля',
    name:'Объектив в подарок при покупке фотокамеры Panasonic GX9'
  },
  {
    date:'23 февраля',
    name:'До 22 400 рублей в подарок при покупке оптики Canon'
  },
  {
    date:'23 февраля',
    name:'Беспроцентная рассрочка на фотокамеры Fujifilm!'
  },
  {
    date:'23 февраля',
    name:'Анонсирована Canon EOS 250D'
  }
]

let testBrands=[
  {name:'Nikon', link: "https://www.yarkiy.ru/system/uploads/preview/brand/2/medium_logo_fujifilm.png"},
  {name:'Canon', link: "https://www.yarkiy.ru/system/uploads/preview/brand/2/medium_logo_fujifilm.png"},
  {name:'Samsung', link: "https://www.yarkiy.ru/system/uploads/preview/brand/2/medium_logo_fujifilm.png"},
  {name:'Nikon', link: "https://www.yarkiy.ru/system/uploads/preview/brand/2/medium_logo_fujifilm.png"},
  {name:'Canon', link: "https://www.yarkiy.ru/system/uploads/preview/brand/2/medium_logo_fujifilm.png"},
  {name:'Samsung', link: "https://www.yarkiy.ru/system/uploads/preview/brand/2/medium_logo_fujifilm.png"},
]

const Home = ({ products, categories }) => {

  const isMobile=useMediaQuery(767)
  // @ts-ignore
  return (
    <>
      <div className="w-full">
        <Head>
          <title>Jamstack ECommerce</title>
          <meta name="description" content="Jamstack ECommerce Next provides a way to quickly get up and running with a fully configurable ECommerce site using Next.js." />
          <meta property="og:title" content="Jamstack ECommerce" key="title" />
        </Head>
        <div className={styles.top}>
          <div className={styles.bigBanner}>
            <BigBannerComponent />
          </div>
          {
            !isMobile?
              <div className={styles.bottom}>
                <div className={styles.mediumBanners}>
                  <TopBannerComponent
                    title={banners[0].title}
                    text={banners[0].text}
                    color={banners[0].color}
                  />
                  <TopBannerComponent
                    title={banners[1].title}
                    text={banners[1].text}
                    color={banners[1].color}
                  />
                </div>
                <DailyOfferCardComponent product={products[0]}/>
              </div>
              :
              <div className={styles.bottom}>
                <DailyOfferCardComponent product={products[0]}/>
                <TopBannerComponent
                  title={banners[0].title}
                  text={banners[0].text}
                  color={banners[0].color}
                />
              </div>
          }

        </div>
        <div className={styles.sliders}>
         <MainSlider type={'new'} title={'Новинки'} itemsToSlider={products}/>
        </div>
        <div className={styles.sliders}>
          <MainSlider type={'news'} title={'Новости'} itemsToSlider={overviews}/>
        </div>
        <div className={styles.banner}>
          <BannerComponent action={''} promo={products[0]}/>
        </div>
        <div className={styles.sliders}>
          <MainSlider type={'new'} title={'Распродажа'} itemsToSlider={products}/>
        </div>
        <div className={styles.sliders}>
          <MainSlider type={'news'} title={'Анонсы'} itemsToSlider={overviews}/>
        </div>
        <div className={styles.centerBanners}>
          <div className={styles.biggerBanner}>
            <BigBannerComponent />
          </div>
          <div className={styles.smallerBanner}>
            <BigBannerComponent />
          </div>
        </div>
        <SmallSlider itemsToSlider={products} type={TYPES.SLIDERS.RECENTVIEWS} />
        <div className={styles.sliders}>
          <MainSlider type={'news'} title={'Обзоры'} itemsToSlider={overviews}/>
        </div>
        <div className={styles.sliders}>
          <MainSlider type={'new'} title={'Б/У техника'} itemsToSlider={products}/>
        </div>
        <ActionBannerComponent />
        <div className={styles.brands}>
          <h2 className={styles.title}>Бренды</h2>
          <SmallSlider itemsToSlider={testBrands} type={TYPES.SLIDERS.BRANDS}/>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const products = await fetchProducts()
  const categories = await fetchCategories()

  return {
    props: {
      products,
      categories
    }
  }
}

export default Home