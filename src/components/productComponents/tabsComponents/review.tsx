import React from 'react';
import ReactStars from "react-rating-stars-component";
import styles from '../../../styles/components/product/tabs/opinion.module.scss'
import { FaCalendarAlt, FaRegStar } from 'react-icons/fa'
import TitleComponent from "../TitleComponent";
import {connect} from "react-redux";
import {showModal} from "../../../utils/redux/actions/modalActions";
import {TYPES} from "../../../../types/constants";


function Review({product, reviews, showModal}){
  const productId = product.productId
  const testReview = {
    productId: productId,
    username: 'Владимир',
    rating: 5,
    comment: "Это тестовый комментарий",
    advantages: "Все хорошо",
    disadvantages: "Все плохо",
  }

  const oneStar = reviews.filter(element => element.rating==1)
  const twoStar =  reviews.filter(element => element.rating==2)
  const threeStar = reviews.filter(element => element.rating==3)
  const fourStar =  reviews.filter(element => element.rating==4)
  const fiveStar =  reviews.filter(element => element.rating==5)

  const rating = {
    general:{
      count: reviews.length,
      average: ((reviews.reduce((total,current) => total + current.rating, 0))/reviews.length).toFixed(1)
    },
    oneStar:{
      count: oneStar.length,
      average: ((oneStar.reduce((total,current) => total + current.rating, 0))/oneStar.length).toFixed(1)
    },
    twoStar:{
      count: twoStar.length,
      average: ((twoStar.reduce((total,current) => total + current.rating, 0))/twoStar.length).toFixed(1)
    },
    threeStar:{
      count: threeStar.length,
      average: ((threeStar.reduce((total,current) => total + current.rating, 0))/threeStar.length).toFixed(1)
    },
    fourStar:{
      count: fourStar.length,
      average: ((fourStar.reduce((total,current) => total + current.rating, 0))/fourStar.length).toFixed(1)
    },
    fiveStar:{
      count: fiveStar.length,
      average: ((fiveStar.reduce((total,current) => total + current.rating, 0))/fiveStar.length).toFixed(1)
    }
  }


  const ratingExample = {
    color: "#C6C8CD",
    activeColor: "#FFD500",
    size: 30,
    value: rating.general.average,
    edit: false
  };

  const opinionRatingExample = {
    color: "#C6C8CD",
    activeColor: "#FFD500",
    size: 30,
    value: rating.general.average,
    edit: false,
  };

  return(
    <div className={styles.inner}>
      <div className={styles.title}>
        <TitleComponent title='Отзывы '/>
        <h2 className={styles.number}>{rating.general.count}</h2>
      </div>
      <div className={styles.card}>
        <div className={styles.left}>
          <ReactStars {...ratingExample}/>
          <div className={styles.percent}>
            <p>{rating.general.average}</p>
            <p className={styles.grey}>/5</p>
          </div>
          <button className={styles.giveFeedback} onClick={() => showModal(TYPES.MODAL.SENDREVIEW, product)}>
            Оставить отзыв
          </button>
        </div>
        <div className={styles.right}>
          <div className={styles.line}>
            <div className={styles.side}>
              <div>5 star</div>
            </div>
            <div className={styles.middle}>
              <div className={styles.barContainer}>
                <div className={styles.bar} style={{width: (rating.fiveStar.count/rating.general.count*100).toFixed(0) +'%'}}/>
              </div>
            </div>
            <div className={styles.sideRight}>
              <div>{rating.fiveStar.count}</div>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.side}>
              <div>4 star</div>
            </div>
            <div className={styles.middle}>
              <div className={styles.barContainer}>
                <div className={styles.bar} style={{width: (rating.fourStar.count/rating.general.count*100).toFixed(0) +'%'}}/>
              </div>
            </div>
            <div className={styles.sideRight}>
              <div>{rating.fourStar.count}</div>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.side}>
              <div>3 star</div>
            </div>
            <div className={styles.middle}>
              <div className={styles.barContainer}>
                <div className={styles.bar} style={{width: (rating.threeStar.count/rating.general.count*100).toFixed(0) +'%'}}/>
              </div>
            </div>
            <div className={styles.sideRight}>
              <div>{rating.threeStar.count}</div>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.side}>
              <div>2 star</div>
            </div>
            <div className={styles.middle}>
              <div className={styles.barContainer}>
                <div className={styles.bar} style={{width: (rating.twoStar.count/rating.general.count*100).toFixed(0) +'%'}}/>
              </div>
            </div>
            <div className={styles.sideRight}>
              <div>{rating.twoStar.count}</div>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.side}>
              <div>1 star</div>
            </div>
            <div className={styles.middle}>
              <div className={styles.barContainer}>
                <div className={styles.bar} style={{width: (rating.oneStar.count/rating.general.count*100).toFixed(0) +'%'}}/>
              </div>
            </div>
            <div className={styles.sideRight}>
              <div>{rating.oneStar.count}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.buttons}>
        <button>
          <span><FaCalendarAlt /></span>
          <p>По дате</p>
        </button>
        <button>
          <span><FaRegStar size={18}/></span>
          <p>По оценке</p>
        </button>
      </div>

      {reviews.map((review, index) => (
        <div className={styles.item} key={index}>
          <div className={styles.top}>
            <div className={styles.left}>
          <span>
            <p>{review.data}</p>
            <p>{review.username}</p>
          </span>
              <div className={styles.rating}>
                <ReactStars {...opinionRatingExample} />
              </div>
            </div>
            <div className={styles.right}>
              <p>Отзыв с Яндекс.Маркета</p>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.paragraph}>
              <p className={styles.tit}>
                Достоинства
              </p>
              <p className={styles.description}>
                {review.advantages}
              </p>
            </div>
            <div className={styles.paragraph}>
              <p className={styles.tit}>
                Недостатки
              </p>
              <p className={styles.description}>
                {review.disadvantages}
              </p>
            </div>
            <div className={styles.paragraph}>
              <p className={styles.tit}>
                Комментарий
              </p>
              <p className={styles.description}>
                {review.comment}
              </p>
            </div>
          </div>
        </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  showModal:showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Review);