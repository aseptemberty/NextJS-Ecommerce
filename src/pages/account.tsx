import styles from '../styles/components/account/account.module.scss'
import TitleComponent from '../components/productComponents/TitleComponent'
import TabsBodyContainer from '../components/accountComponents/tabs/TabsBodyContainer'
import TabsHeadContainer from '../components/accountComponents/tabs/TabsHeadContainer'
import ProfileComponent from '../components/accountComponents/profile/ProfileComponent'
import Breadcrumb from '../components/ui/Breadcrumb'

function Account(){
  return(
    <div >
      <Breadcrumb type={'pagePath'}/>
      <TitleComponent title={'Привет, Владимир'}/>
      <div className={styles.body}>
        <ProfileComponent />
        <div className={styles.tabs}>
          <TabsHeadContainer />
          <TabsBodyContainer />
        </div>
      </div>
    </div>
  )
}

export default Account