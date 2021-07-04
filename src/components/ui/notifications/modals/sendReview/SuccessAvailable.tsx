import styles from '../../../../../styles/components/ui/notifications/modals/notificationsAvailable.module.scss'

export default  function SuccessAvailable(){
  return(
    <div className={styles.card}>
      <h3>Вы подписаны</h3>
      <p>Мы напишем вам на почту как только товар появится в продаже.</p>
      <button>Закрыть</button>
    </div>
  )
}