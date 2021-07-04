import  styles from '../../styles/components/checkout/contactsComponent.module.scss'
import { CgProfile } from 'react-icons/cg'
import { Checkbox } from '../ui/Inputs'

export default function ContactsComponent(){
  return(
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Контактные данные</h3>
        <span><CgProfile size={22}/></span>
      </div>
      <form>
        <div className={styles.item}>
          <label htmlFor='name'>Имя</label>
          <input type='text' id='name'/>
        </div>
        <div className={styles.item}>
          <label htmlFor='surname'>Фамилия</label>
          <input type='text' id='surname'/>
        </div>
        <div className={styles.item}>
          <label htmlFor='patronimyc'>Отчество</label>
          <input type='text' id='patronimyc'/>
        </div>
        <div className={styles.item}>
          <label htmlFor='phone' className={styles.checkbox}>Отчество отсутствует в паспорте</label>
          <div className={styles.checkboxInput}>

            <Checkbox />
          </div>
        </div>
        <div className={styles.item}>
          <label htmlFor='phone'>Телефон</label>
          <input type='text' id='phone'/>
        </div>
        <div className={styles.item}>
          <label htmlFor='email'>E-mail</label>
          <input type='text' id='email'/>
        </div>
      </form>
    </div>
  )
}