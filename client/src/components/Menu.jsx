import React from 'react';
import MenuItem from './MenuItem';
import styles from '../styles/Menu.module.css';

const menuItems = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Interests'];

function Menu() {
  const menuSections = menuItems.map((item,i) => <MenuItem key={i} title={item} />);

  return (
    <ul className={ styles.list }>
      { menuSections }
    </ul>
  )
}

export default Menu;