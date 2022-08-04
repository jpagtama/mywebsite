import React from 'react'
import About from './About'
import Experience from './Experience'
import Section from './Section'
import Projects from './Projects'
import Skills from './Skills'
import Education from './Education'
import Interests from './Interests'
import Footer from './Footer'
import styles from '../styles/Main.module.css'

const Main = () => {
  return (
    <div className={ styles.main } >
        <Section ><About /></Section>
        <Section ><Experience /></Section>
        <Section ><Projects /></Section>
        <Section ><Skills /></Section>
        <Section ><Education /></Section>
        <Section ><Interests /></Section>
        <Footer />
    </div>
  )
}

export default Main