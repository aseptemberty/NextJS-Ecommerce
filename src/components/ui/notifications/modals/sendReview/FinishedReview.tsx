import styles from '../../../../../styles/components/ui/notifications/modals/sendReview/sendReviewMobal.module.scss'

export default function FinishedReview(){
  return(
    <div className={styles.body}>
      <h3>Отзыв отправлен</h3>
      <p>Мы опубликуем ваш отзыв как только наш сотрудник проверит его.</p>
      <button className={styles.close}>Закрыть</button>
    </div>
  )
}