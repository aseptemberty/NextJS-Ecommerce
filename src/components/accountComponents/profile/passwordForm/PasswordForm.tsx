import styles from '../../../../styles/components/account/profile/passwordForm.module.scss'
import { BsCheck, BsEye } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'

function passwordValidation(){
  
}

export default function PasswordForm(){
  return(
    <div className={styles.card}>
      <button className={styles.close}><AiOutlineClose /></button>
      <h3>Изменить пароль</h3>
      <div className={styles.item}>
        <input type='password' id='old'/>
        <label htmlFor='old' >Старый пароль</label>
      </div>
      <div className={styles.item}>
        <input type='password' id='new'/>
        <label htmlFor='new' >Новый пароль</label>
        <button><BsEye size={20}/></button>
      </div>
      <div className={styles.item}>
        <input type='password' id='repeat'/>
        <label htmlFor='repeat' >Повторите пароль</label>
        <button><BsEye size={20}/></button>
      </div>
      <ul className={styles.rules}>
        <li><p>• Минимум 8 символов</p><span><BsCheck /></span></li>
        <li><p>• Только латинские буквы</p><span><BsCheck /></span></li>
        <li><p>• Используйте буквы и цифры</p><span><BsCheck /></span></li>
      </ul>
      <button className={styles.submit}>Изменить</button>
    </div>
  )
}