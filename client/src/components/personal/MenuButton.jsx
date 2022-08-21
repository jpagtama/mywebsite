import React from 'react';
import { navActions } from '../../store/navSlice';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../styles/personal/MenuButton.module.css';

const MenuButton = props => {
  const dispatch = useDispatch();
  const {showMenu} = useSelector(state => state.nav);
  const clickHandler = () => {
    dispatch(navActions.toggleMenu());
  };

  return (
    <button className={styles.menuButton} onClick={clickHandler} >
        <span className={`${styles.top} ${showMenu? styles.animateTopToX:''}`}></span>
        <span className={`${styles.mid} ${showMenu? styles.animateMidToX:''}`}></span>
        <span className={`${styles.bottom} ${showMenu? styles.animateBottomToX:''}`}></span>
    </button>
  )
}

export default MenuButton;