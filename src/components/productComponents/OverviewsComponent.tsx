import styles from '../../styles/components/product/optionsComponent.module.scss'

export default function OverviewsComponent (){
  return(
    <div className={styles.options}>
      <div className={styles.item}>
        <p className={styles.title}>Цвет</p>
        <a href="" className={styles.color}><button name='color'>Зеленый </button></a>
        <a href="" className={styles.color}><button name='color'>Красный</button></a>
        <a href="" className={styles.color}><button name='color'>Синий</button></a>
      </div>
      <div className={styles.item}>
        <p className={styles.title}>Разрешение матрицы (Мп)</p>
        <p>18</p>
      </div>
      <div className={styles.item}>
        <p className={styles.title}>Размер матрицы</p>
        <p>22.3 х 14.9 мм</p>
      </div>
      <div className={styles.item}>
        <p className={styles.title}>Видоискатель</p>
        <p>зеркальный</p>
      </div>
      <div className={styles.item}>
        <p className={styles.title}>Процессор</p>
        <p>Digic 4+</p>
      </div>
      <button className={styles.moreButton}>Все характеристики</button>
      <p>
        Canon EOS 4000D. Снимайте и делитесь без лишних усилий: создавайте уникальные истории с высоким уровнем цветопередачи и детализации, а также с красивым размытием заднего плана, которое позволит вам выделиться среди остальных.
      </p>
      <button className={styles.moreButton}>Развернуть</button>
    </div>
  )
}