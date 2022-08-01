import React from 'react';
import styles from '../styles/MenuItem.module.css'

const MenuItem = props => {
  return (
    <li className={styles.listItem} >{ props.title }</li>
  )
}

export default MenuItem;