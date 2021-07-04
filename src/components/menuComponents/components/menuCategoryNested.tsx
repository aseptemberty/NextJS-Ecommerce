import styles from '../../../styles/components/menu/menuCategoryNested.module.scss'
import Link from "next/link"
import { PATHS } from "../../../../types/paths"

export default function MenuCategoryNested({categoryTree, closeMenu}){

  return(
    <div id={styles.nestedCategories}>
      <h2>
        {categoryTree.title}
      </h2>
      <div className={styles.items}>
        {categoryTree.child.map((child, index)=>(
          <div className={styles.item} key={index}>
            <Link href={`${PATHS.base}/${PATHS.CATEGORY}/1`}>
              <a className={styles.title} onClick={closeMenu}>
                {child.title}
              </a>
            </Link>
            {child.child.map((item, index)=>(
              <Link  href={`${PATHS.base}/${PATHS.CATEGORY}/1`} key={index}>
                <a onClick={closeMenu}>{item.title}</a>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}