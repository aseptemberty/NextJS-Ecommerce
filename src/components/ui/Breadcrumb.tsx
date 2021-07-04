import styles from '../../styles/components/breadcrumbComponent.module.scss'
import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { PATHS } from "../../../types/paths"



function convertBreadcrumb(string){

  switch (string) {
    case `${PATHS.CARTS}`:
      return {title :"Корзина", href: `${PATHS.base}/${PATHS.CARTS}`};
    default:
      return;
  }
}

function Breadcrumb(props) {
  let breadcrumbs = []
  breadcrumbs.push({
    title: "Главная страница",
    href: '/'
  })
  if (props.type === 'pagePath') {
    const router = useRouter();
    const paths = router.asPath.split('/').map(crumb => convertBreadcrumb(crumb)).filter(crumb => crumb)
    breadcrumbs = breadcrumbs.concat(paths)

  }

  if (props.type === 'categoryPath') {
    breadcrumbs.push({
      title: "ПУТЬ ДО КАТЕГОРИИ",
      href: '/'
    })
  }
  return (
    <BreadcrumbsComponent breadcrumbs={breadcrumbs}/>
  )
}

function BreadcrumbsComponent(props) {

  return (
    <nav aria-label="breadcrumbs">
      <ol className={styles.list +" breadcrumb"}>
        {props.breadcrumbs.map((breadcrumb, i) => {
          return (
            <li key={i} className={styles.item}>
              <Link href={breadcrumb.href}>
                <a>
                  {breadcrumb.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}


export default Breadcrumb;