import classes from '../../../styles/components/menu/menuLogo.module.scss'
import { MdMenu } from 'react-icons/md'
import Image from '../../Image'
import { PATHS } from '../../../../types/paths'
import Link from "next/link";

function MenuLogo (){
  return(
    <div className={classes.menuTopLogo+' '}>
      <span className={classes.catalogBurger+' block sm:block md:block lg:hidden'}>
        <MdMenu size={24}/>
      </span>
      <Link href={`${PATHS.base}/`}>
        <a>
          <div className={classes.logo+' '}>
            <Image src={`${PATHS.base}/images/new-logo.png`} width={65}/>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default MenuLogo