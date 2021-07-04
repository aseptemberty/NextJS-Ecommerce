import React from "react"
import { useRouter } from "next/router"
import { connect } from "react-redux"
import { setCurrentTab } from "../../utils/redux/actions/tabsActions"
import { TabContainer } from "react-bootstrap"
import styles from "../../styles/components/product/tabsHeadcomponent.module.scss"


function TabsHeadContainer(props) {
  const router = useRouter()


  const tabs = [
    {link :"Sets", title: "Наборы"},
    {link :"Characteristics", title: "Характеристики"},
    {link :"Description", title: "Описание"},
    {link :"Videos", title: "Видео"},
    {link :"Accessories", title: "Аксессуары"},
    {link :"Overviews", title: "Обзоры"},
    {link :"Review", title: "Отзывы"}
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
                        style={{color: tab.link == props.tabs.currentTab && '#3996D2'}}>
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