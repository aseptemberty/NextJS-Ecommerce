// @ts-ignore
import { menuLink, menuLinkButton } from '../../../styles/components/menu/menuPagesMenu.module.scss'
import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa'

function MenuPagesMenu (){
  return(
    <div className="hidden sm:hidden md:hidden lg:flex xl:flex">
      <Link href="/">
        <a className={menuLink}>Акции</a>
      </Link>
      <Link href='/'>
        <a className={menuLink}>Рассрочка и кредит</a>
      </Link>
      <Link href='/'>
        <a className={menuLink}>Новости</a>
      </Link>
      <Link href='/'>
        <a className={menuLink}>Обзоры</a>
      </Link>
      <Link href='/'>
        <a className={menuLink}>Тест-драйв</a>
      </Link>
      <Link href='/'>
        <a className={menuLink}>Выкуп Б/У техники</a>
      </Link>
      <button className={menuLinkButton}>
        <p>Как купить</p>
        <span><FaChevronDown size={12}/></span>
      </button>
    </div>

  )
}

export default MenuPagesMenu