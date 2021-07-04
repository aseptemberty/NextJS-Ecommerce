import styles from '../../../styles/components/account/profile/profileComponent.module.scss'
import { Checkbox } from '../../ui/Inputs'
import React from 'react'

export default function ProfileForm(){
  return(
    <div className={styles.body}>
      <div className={styles.card}>
        <div className={styles.item}>
          <div className={styles.title}>
            <h4>Редактирование</h4>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.input}>
            <input type='text' value={'Филлипов'}/>
            <label>Фамилия</label>
          </div>
          <div className={styles.input}>
            <input type='text' value={'Владимир'}/>
            <label>Имя</label>
          </div>
          <div className={styles.input}>
            <input type='text' value={'Филлипов'}/>
            <label>Фамилия</label>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.rowCheckbox}>
            <div className={styles.checkbox}>
              <Checkbox />
            </div>
            <p>Отчество отсутствует в паспорте</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.input}>
            <input type='text' value={'+7 9878778787'}/>
            <label>Телефон</label>
          </div>
          <div className={styles.input}>
            <input type='text' value={'vladimir@gmail.com'}/>
            <label>E-mail</label>
          </div>
        </div>
        <div className={styles.item}>
          <button className={styles.password}>Изменить пароль</button>
          <button className={styles.saveChange}>Сохранить изменения</button>
        </div>
      </div>
    </div>
  )
}