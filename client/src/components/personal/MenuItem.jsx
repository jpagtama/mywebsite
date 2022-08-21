import React from 'react';
import styles from '../../styles/personal/MenuItem.module.css';

const MenuItem = props => {
  return (
    <li className={`${styles.listItem} ${props.isActive && styles.active}`} >
      <a className={styles.navLink} href={`#${props.title}`} >{ props.title }</a>
    </li>
  )
}

export default MenuItem;