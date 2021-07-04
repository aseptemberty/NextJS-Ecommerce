import { AiOutlineSearch } from 'react-icons/ai'
// @ts-ignore
import { menuInput, menuInputField, menuInputFieldSvg} from '../../../styles/components/menu/menuSearch.module.scss'

function  MenuSearch (){
  return(
    <div className={menuInput}>
      <input type='text' placeholder={'Фотоаппараты Fuji'} className={menuInputField}/>
      <span className={menuInputFieldSvg}><AiOutlineSearch  size={24}/></span>
    </div>
  )
}

export default MenuSearch
