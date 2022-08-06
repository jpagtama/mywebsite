import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {

  return (
    <div className={styles.footerContainer}>
        <p className={ styles.sideNote }>
            This page was built using React and a NodeJS backend with Express. 
        </p>
        <p className={ styles.sideNote }>Contact me at jpagtama@gmail.com</p>
        <p className={ styles.sideNote }>Created by Julian Pagtama</p>
    </div>
  )
}

export default Footer