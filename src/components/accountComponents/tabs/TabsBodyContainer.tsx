import React from "react"
import { useRouter, withRouter } from "next/router"
import { connect } from 'react-redux'
import { TYPES } from '../../../../types/constants'
import TitleComponent from '../../productComponents/TitleComponent'
import Notifications from './Notifications'
import Services from './Services'
import Orders from '../tabs/Orders'

function TabsBodyContainer(props){
  const router = useRouter()
  const routePath = router.asPath.split('=')[1]
  //
  const tab = props.tabs.currentTab ? props.tabs.currentTab : routePath

  switch (tab){
   case TYPES.TABS.Orders:
    return (<Orders />)
    case  TYPES.TABS.Notifications:
      return (<Notifications />)
    case TYPES.TABS.Services:
      return (<Services />)
   default:
    return (<Orders />)
  }
}

const mapStateToProps = state => ({
 tabs: state.tabs
});

export default connect(mapStateToProps)(withRouter(TabsBodyContainer));