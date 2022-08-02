import React from 'react'
import LinkedInSVG from './svgs/LinkedInSVG'
import GitHubSVG from './svgs/GitHubSVG'
import { useInView } from 'react-intersection-observer';
import styles from '../styles/About.module.css'


const About = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <React.Fragment>
        <span className={styles.headingContainer}>
            <h1 ref={ref} className={inView? styles.slideIn : '' }>Julian Pagtama</h1>
            <h3>Software Developer &bull; Los Angeles, CA &bull; jpagtama@gmail.com</h3>
        </span>
        <span className={styles.summaryContainer}>
            <p className={ styles.summary }>
                I have more than 6 years of software development experience in high volume applications where I aim to ensure scalability, optimize performance, and utilize best security practices.
            </p>
            <div className={ styles.links } >
                <a href="/#linkedin" ><LinkedInSVG /></a>
                <a href="/#github" ><GitHubSVG /></a>
            </div>
        </span>
    </React.Fragment>
  )
}

export default About