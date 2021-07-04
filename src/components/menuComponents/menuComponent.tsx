import classes from "../../styles/components/menu/menuComponent.module.scss"
import MenuSearch from './components/menuSearch'
import MenuInfoPanel from './components/menuInfoPanel'
import MenuLogo from './components/menuLogo'
import MenuCatalog from './components/menuCatalog'
import MenuPagesMenu from './components/menuPagesMenu'


function MenuComponent() {

  return (
    <div id={classes.menuWrapper}>
      <div className={classes.menuTop +" px-md-10 px-sm-4 px-1"}>
       <MenuLogo />
       <div className={classes.menuTopSearch +' hidden sm:hidden md:hidden lg:block xl:block '}>
         <MenuSearch />
       </div>
       <MenuInfoPanel/>
      </div>
      <div className={classes.menuBottom +" px-md-10 px-sm-4 px-1"}>
        <MenuCatalog />
        <MenuPagesMenu />
        <div className={classes.menuBottomSearch +' hidden sm:hidden md:block lg:hidden xl:hidden '}>
          <MenuSearch />
        </div>
      </div>
    </div>
  )
}

export default MenuComponent