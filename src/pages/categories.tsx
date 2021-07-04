import Head from 'next/head'
import MediumCardComponent from "../components/cardComponents/MediumCardComponent";
import fetchCategories from "../utils/providers/categoryProvider";

function Categories ({ categories = [] }) {
  return (
    <>
      <div className="w-full " >
        <Head>
          <title>Jamstack ECommerce - All Categories</title>
          <meta name="description" content={`Jamstack ECommerce - All categories`} />
          <meta property="og:title" content="Jamstack ECommerce - All Categories" key="title" />
        </Head>
        <div className="
          pt-4 sm:pt-10 pb-8
        ">
          <h1 className="text-5xl font-light">All categories</h1>
        </div>
        <div className="flex flex-col items-center">
          
          {/* <div className="my-4 lg:my-8 flex flex-col lg:flex-row justify-between"> */}
          <div className="grid gap-4
          lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {/*{*/}
          {/*  categories.map((category, index) => (*/}
          {/*    <MediumCardComponent*/}
          {/*      key={index}*/}
          {/*      imageSrc={category.image}*/}
          {/*      title={category.title}*/}
          {/*      link={`/category/${category.id}`}*/}
          {/*    />*/}
          {/*  ))*/}
          {/*}*/}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const categories = await fetchCategories ()

  return {
    props: {
      categories
    }
  }
}

export default Categories