import React from 'react'
import {connect} from "react-redux";
import {rememberView} from "../../utils/redux/actions/recentViewActions";
import styles from '../../styles/components/product/recentViewComponent.module.scss'
import SmallSlider from "../ui/smallSlider";
import {TYPES} from "../../../types/constants";

function RecentViewComponent(props) {
  const currentProduct = props.product
  const recentView = props.recentView
  const recentViewToSlider = recentView.filter(product => product.id != currentProduct.id)
  {
    props.rememberView(currentProduct)
  }
  return (
    <>
      {!!recentViewToSlider.length && (
        <div className='card_slider'>
        <h2>Вы недавно смотрели</h2>
        <div className={styles.slider}>
          <SmallSlider type={TYPES.SLIDERS.RECENTVIEWS} itemsToSlider={recentViewToSlider}/>
        </div>
      </div>)}
    </>
  )
}

const mapStateToProps = state => ({
  recentView: state.recentView.products
});

const mapDispatchToProps = {
  rememberView: rememberView
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentViewComponent);