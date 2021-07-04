import Head from 'next/head'
import styles from '../../styles/components/category/category.module.scss'
import fetchCategories, { fetchCategory } from "../../utils/providers/categoryProvider"
import {fetchProductsFromCategory} from "../../utils/providers/productProvider";
import BreadcrumbComponent from '../../components/ui/Breadcrumb'
import ActionsComponent from '../../components/categoryComponents/ActionsComponent'
import React, { useState } from "react"
import BannerComponent from '../../components/categoryComponents/BannerComponent';
import BrandsComponent from '../../components/categoryComponents/BrandsComponent'
import ReviewComponent from '../../components/categoryComponents/OverviewComponent'
import CardsTableComponent from '../../components/categoryComponents/CardsTableComponent'
import { useMediaQuery } from '../../utils/helpers'
import YaMarketComponent from '../../components/categoryComponents/YaMarketComponent'
import TileTableComponent from '../../components/categoryComponents/TileTableComponent';
import FilterComponent from '../../components/ui/filter/FilterComponent'
import SubheaderComponent from '../../components/categoryComponents/SubheaderComponent'

function Category(props) {
  const [toggle, setToggle] = useState('medium');
  const { products, title } = props
  const promoProduct = products[0][0]
  const isBreakpoint = useMediaQuery(576)
  let productsArr = []
  for (let i = 0; i < 12; i++){
    productsArr.push(products[0][0])
  }

  // @ts-ignore
  return (
    <>
      <Head>
        <title>Jamstack ECommerce - {title}</title>
        <meta name="description" content={`Jamstack ECommerce - ${title}`} />
        <meta property="og:title" content={`Jamstack ECommerce - ${title}`} key="title" />
      </Head>
      <div className="flex flex-col items-center">
        <div className="flex flex-col w-full">
            <BreadcrumbComponent />
            <SubheaderComponent title={title} />
          </div>
          <div className={styles.body}>
            <div className={styles.filterComp}>
              <FilterComponent />
              <YaMarketComponent />
            </div>
            <div className={styles.content}>

              {!isBreakpoint && (
                <ActionsComponent />
              )}
              <div className='hidden md:block'>
                <BannerComponent
                  promo = {promoProduct}
                  action={true}

                />
              </div>

              {!!isBreakpoint ? (<TileTableComponent productsArr={productsArr} promoProduct={promoProduct}/>)

                :(
                toggle=='medium' || isBreakpoint ?
                (<CardsTableComponent productsArr={productsArr} promoProduct={promoProduct}/>) :
                (<TileTableComponent productsArr={productsArr} promoProduct={promoProduct}/>)
                )
              }

              <ReviewComponent />
              <BrandsComponent />
              {!!isBreakpoint && (
                <ActionsComponent />
              )}

              <p className={styles.someText}>Зеркальный фотоаппарат комплектуется системой зеркал, установленных за сменным объективом. Эта конструктивная особенность: существенно повышает качество снимков; позволяет менять оптику, настраивая камеру в соответствии с условиями съемки и целью, стоящей перед фотографом. В этой категории представлены как цифровые зеркальные фотоаппараты, рассчитанные на начинающих пользователей, так и фотоаппараты зеркальные премиум. Основные типы фотоаппаратов-зеркалок Все разнообразие моделей, относящихся к этой категории, делится на несколько групп: для начинающих – самые простые, со множеством автоматических съемочных режимов; полупрофессиональные – для продвинутых пользователей; профессиональные – их возможностей достаточно для коммерческой съемки. В каталоге интернет-магазина «Яркий» представлены зеркальные фотокамеры различных типов. Здесь вы можете купить профессиональный фотоаппарат Canon или выбрать бюджетную модель для того, кто только начинает заниматься фотографией.
                •	Зеркальные фотоаппараты представлены в широком ассортименте 74 моделей в интернет-магазине «Яркий»;
                •	Цены варьируются от 15990.0 до 379990.0 рублей;
                •	Сравнить цены на Зеркальные фотоаппараты , прочитать характеристики и отзывы покупателей;
                •	Купить Зеркальные фотоаппараты с гарантией по выгодным условиям покупки (в том числе в кредит или рассрочку);
                •	Заказать Зеркальные фотоаппараты в городах: Тюмень, Санкт Петербург, Екатеринбург, Новосибирск, Челябинск, Казань онлайн на сайте или по телефону 8-800-555-01-02, оформить доставку по указанному адресу или самовывоз из магазина.</p>

            </div>
            </div>
      </div>
    </>
  )
}

export async function getStaticPaths () {
  const categories = await fetchCategories()
  const paths = categories.map(category => {
    return { params: { id: String(category.id)}}
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params })  {
  const category = await fetchCategory(params.id)
  const products = await fetchProductsFromCategory(params.id)
  return {
    props: {
      products: products,
      title: category.title
    }
  }
}
export default Category