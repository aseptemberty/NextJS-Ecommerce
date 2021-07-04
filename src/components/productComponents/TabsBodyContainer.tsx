import React from "react"
import TitleComponent from "./TitleComponent"
import { useRouter, withRouter } from "next/router"
import { connect } from "react-redux"
import Characteristics from "./tabsComponents/characteristics"
import Description from "./tabsComponents/description"
import VideoComponent from "./tabsComponents/VideoComponent";
import Overview from "./tabsComponents/overview";
import {TYPES} from '../../../types/constants'
import Review from "./tabsComponents/review";


function TabsBodyContainer(props) {
  const product = props.product
  const reviews = props.reviews[0]
  const chars = product.chars[0].chars
  const router = useRouter()
  //TODO refactor. Route.query don't work with server side render. We need our parser.
  const routePath = router.asPath.split('=')[1]
  //
  const tab = props.tabs.currentTab ? props.tabs.currentTab : routePath


  switch (tab) {
    case TYPES.TABS.Sets || null:
      return (<TitleComponent title={TYPES.TABS.Sets} />)
    case TYPES.TABS.Characteristics:
      return (<Characteristics chars={chars}/>)
    case TYPES.TABS.Description:
      return (<Description />)
    case TYPES.TABS.Videos:
      return (<VideoComponent/>)
    case TYPES.TABS.Accessories:
      return (<TitleComponent title={TYPES.TABS.Accessories} />)
    case TYPES.TABS.Overviews:
      return (<Overview/>)
    case TYPES.TABS.Review:
      return (<Review reviews={reviews} product={product} />)
    default:
      return (<TitleComponent title={"Sets"} />)
  }
}

const mapStateToProps = state => ({
  tabs: state.tabs
});

export default connect(mapStateToProps)(withRouter(TabsBodyContainer));