import React from 'react'
import styles from '../../styles/CheckMark.module.css'

const CheckMark = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${styles.checkMark} ${props.className? props.className: ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default CheckMark