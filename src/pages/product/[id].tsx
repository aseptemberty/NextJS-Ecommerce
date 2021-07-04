import {
fetchProductWithEmbeded,
} from "../../utils/providers/productProvider"
import fetchProducts from "../../utils/providers/productProvider"
import Title from "../../components/productComponents/TitleComponent"
import Subtitle from "../../components/productComponents/SubtitleComponent"
import BreadcrumbComponent from "../../components/ui/Breadcrumb"
import ImageSliderComponent from "../../components/productComponents/ImageSliderComponent"
import PriceBlock from "../../components/productComponents/PriceBlockComponent"
import TabsBodyContainer from "../../components/productComponents/TabsBodyContainer"
import TabsHeadContainer from "../../components/productComponents/TabsHeadContainer"
import styles from '../../styles/components/product/product.module.scss'
import OverviewsComponent from '../../components/productComponents/OverviewsComponent'
import Links from '../../components/productComponents/LinksComponent'
import QuestionButton from '../../components/ui/QuestionButton'
import RecentViewComponent from "../../components/productComponents/RecentViewComponent";
import { BiBarChart } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'
import { fetchReviewsFromProduct } from "../../utils/providers/reviewProvider"
import {ActionsComponent} from "../../components/productComponents/ActionsComponent";

function Product (props) {
  const product = props.product
  const reviews = props.reviews
  const title = product.title
  const code1c = product.code1c
  const sku = product.sku
  const rating = product.rating
  const images = product.images



  return (
    <>
      <BreadcrumbComponent type={'categotyPath'}/>
      <div className={styles.titleWrap}>
        <Title title={title}/>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <span><BiBarChart size={24}/>
            </span>
            <p>Сравнить</p>
          </div>
          <div className={styles.icon}>
            <span><BsBookmark  size={24}/></span>
            <p>В закладки</p>
          </div>
        </div>
      </div>
      <div>
        <Subtitle code1c={code1c} sku={sku} rating={rating}/>
      </div>
      <div className='row'>
        <div className={styles.top + ' col col-md-6 col-xl-8 '}>
          <div className={styles.topImage}>
            <ImageSliderComponent images={images}/>
          </div>
          <div className={styles.char}>
            <OverviewsComponent />
          </div>
        </div>
        <div className='  col col-md-6 col-xl-4'>
          <PriceBlock product={product}/>
          <div className='flex md:hidden lg:hidden 2xl:hidden'>
            <ActionsComponent />
          </div>
          <Links />
          <div className='flex lg:hidden'>
            <QuestionButton />
          </div>
        </div>
      </div>
      <div className={styles.centerLine}>
        <TabsHeadContainer/>
        <div className='hidden lg:flex'>
          <QuestionButton />
        </div>
      </div>
      <TabsBodyContainer product={product} reviews={reviews}/>
      <RecentViewComponent product={product}/>
    </>
  )
}

export async function getStaticPaths () {
  const products = await fetchProducts()
  const paths = products.map(product => {
    return { params: { id: String(product.id)}}
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const product = await fetchProductWithEmbeded(params.id)
  const reviews = await fetchReviewsFromProduct(params.id)

  return {
    props: {
      product,
      reviews
    }
  }
}


export default Product