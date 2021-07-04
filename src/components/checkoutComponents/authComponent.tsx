import styles from '../../styles/components/checkout/authComponent.module.scss'

export default function AuthComponent(){
  return(
    <div className={styles.container}>
      <button>Войти</button>
      <p>Авторизуйтесь на сайте, и мы сохраним всю информацию по заказу и автоматически заполним ваши контактные данные.</p>
    </div>
  )
}