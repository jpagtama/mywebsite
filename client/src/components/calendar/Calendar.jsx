import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import styles from '../../styles/calendar/Calendar.module.css';

const Calendar = () => {
    return (
        <div className={styles.container} >
            <Header classes={styles} />
            <Main classes={styles} />
            <Footer classes={styles} />
        </div>
    )
}

export default Calendar