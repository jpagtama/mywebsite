import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className={styles.footerContainer}>
        <p className={ styles.sideNote }>
            This page was built using React and a NodeJS backend with Express. 
        </p>
        <p className={ styles.sideNote }>Created by Julian Pagtama &copy; {date}</p>
    </div>
  )
}

export default Footer