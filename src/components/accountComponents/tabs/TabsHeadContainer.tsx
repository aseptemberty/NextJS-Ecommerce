import { useRouter } from 'next/router'
import { TabContainer } from 'react-bootstrap'
import styles from '../../../styles/components/account/tabs/tabsHeadContainer.module.scss'
import { setCurrentTab } from '../../../utils/redux/actions/tabsActions'
import { connect } from 'react-redux'
import React from 'react'


function TabsHeadContainer(props) {
  const router = useRouter()


  const tabs = [
    {link :"Orders", title: "Мои заказы"},
    {link :"Notifications", title: "Уведомления"},
    {link :"Services", title: "Мои услуги"}
  ]

  // @ts-ignore
  return (
    <>
      <TabContainer>
        <>
          <div id={"tags"} className={styles.tabs}>
            {tabs.map((tab, index) => (
              <div className={styles.tab} key={index}>
                <div onClick={()=>{props.setCurrentTab(tab.link)}}>
                  <a onClick={e => e.preventDefault()} href={`/product/${router.query.id}?tab=${tab.link}`}>
                    <p
                      className={tab.link == props.tabs.currentTab ? 'font-bold' : ''}
                      style={{color: tab.link == props.tabs.currentTab && '#2D2D2D'}}>
                      {tab.title}
                    </p>
                  </a>
                </div>
              </div>))
            }
          </div>
        </>
      </TabContainer>
    </>
  )
}

const mapStateToProps = state => ({
  tabs: state.tabs
});

const mapDispatchToProps = {
  setCurrentTab: setCurrentTab,
};

export default connect(mapStateToProps, mapDispatchToProps)(TabsHeadContainer);