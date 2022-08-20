import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import styles from '../../styles/flekin/Flekin.module.css';

const Flekin = () => {
  return (
    <div className={styles.flekin}>
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default Flekin