import React from 'react';
import styles from '../../styles/components/product/titleComponent.module.scss'

export default function TitleComponent({ title}) {

  return (
    <h1 className={styles.title}>
      {title}
    </h1>
)
}