import '../styles/globals.scss'
import Layout from '../layouts/layout'
import { wrapper } from "../utils/redux/store"


function Ecommerce({ Component, pageProps}) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(Ecommerce);