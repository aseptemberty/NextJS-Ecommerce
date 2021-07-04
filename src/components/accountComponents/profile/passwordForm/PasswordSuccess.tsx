import styles from '../../../../styles/components/account/profile/passwordForm.module.scss'

export default function PasswordSuccess(){
  return(
    <div className={styles.card} style={{alignItems:'center'}}>
      <h3>Пароль изменён</h3>
      <p className={styles.success}>Теперь вы можете заходить под новым паролем. Удачных покупок.</p>
      <button className={styles.finish}>Закрыть</button>
    </div>
  )
}