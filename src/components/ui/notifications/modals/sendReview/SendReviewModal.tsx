import styles from '../../../../../styles/components/ui/notifications/modals/sendReview/sendReviewMobal.module.scss'
import React, {useReducer} from 'react';
import ReactStars from "react-rating-stars-component";
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { sendReview } from "../../../../../utils/providers/reviewProvider"


export default function SendReviewModal({close, context}) {
  const product = context

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INPUT_DATA':
        return {...state, [action.field]: action.value}
      default:
        throw new Error()
    }
  }
  const initState = {
    productId: product.id,
    username: String,
    email: String,
    rating: Number,
    comment: String,
    advantages: String,
    disadvantages: String,
    isRecommend: Boolean
  }

  const [state, dispatch] = useReducer(reducer, initState);

  const handleInput = (e) =>{
    dispatch({
      type: 'INPUT_DATA',
      field: e.target.name,
      value: e.target.value
    })
  }
  const handleToggle = (newValue) =>{
    dispatch({
      type: 'INPUT_DATA',
      field: 'isRecommend',
      value: newValue
    })
  }

  const handleRating = (newRating) => {
    dispatch({
      type: 'INPUT_DATA',
      field: 'rating',
      value: newRating
    })
  }

  const sendForm = () =>{
    close()
    sendReview(state)

  }

  return (
    <div className={styles.body}>
      <h3>Оставить отзыв</h3>
      <p className={styles.productName}>{product.title}</p>
      <div className={styles.rating}>
        <p>Ваша оценка</p>
        <div className={styles.stars}>
          <ReactStars color={"#C6C8CD"}
            activeColor="#FFD500"
            size={30}
            emptyIcon={<BsStar/>}
            halfIcon={<BsStarHalf/>}
            fullIcon= {<BsStarFill/>}
            classNames= {`${styles.stars}`}
            onChange={handleRating}
          />
        </div>
      </div>
      <form>
        <div className={styles.row}>
          <div className={styles.textInput}>
            <label htmlFor='advantages'>Достоинства*</label>
            <input type='text' name='advantages' value={state.advantages} onChange={(e)=>handleInput(e)}/>
          </div>
          <div className={styles.textInput}>
            <label className={styles.label} htmlFor='disadvantages'>Недостатки*</label>
            <input type='text' id='disadvantages' name='disadvantages'  value={state.disadvantages} onChange={(e)=>handleInput(e)}/>
          </div>
        </div>
        <div className={styles.textarea}>
          <label htmlFor='opinion'> Ваш отзыв*</label>
          <textarea
            name='comment'
            value={state.comment}
            onChange={(e)=>handleInput(e)}
            rows={3}
          />
        </div>
        <div className={styles.recommendations}>
          <p>Вы бы рекомендовали товар?</p>
          <div className={styles.buttons}>
            <button type='button' onClick={()=>handleToggle(true)}>Да</button>
            <button type='button' onClick={()=>handleToggle(false)}>Нет</button>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.textInput}>
            <label htmlFor='email'>E-mail*</label>
            <input type='text' id='email' name='email' value={state.email} onChange={(e)=>handleInput(e)}/>
            <p>другие пользователи не увидят</p>
          </div>
          <div className={styles.textInput}>
            <label htmlFor='username'>Имя</label>
            <input type='text' id='username' name='username'  value={state.username} onChange={(e)=>handleInput(e)}/>
          </div>
        </div>
      </form>
      <div className={styles.submit}>
        <button onClick={sendForm}>Отправить</button>
        <p>Нажимая кнопку «Отправить»,  вы даете согласие на обработку персональных данных.</p>
      </div>
    </div>
  )
}