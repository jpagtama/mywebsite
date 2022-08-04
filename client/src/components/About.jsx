import React, {useEffect} from 'react'
import { navActions } from '../store/navSlice'
import { useDispatch } from 'react-redux'
import LinkedInSVG from './svgs/LinkedInSVG'
import GitHubSVG from './svgs/GitHubSVG'
import { useInView } from 'react-intersection-observer';
import styles from '../styles/About.module.css'


const About = () => {
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) dispatch(navActions.activate('about'));
  }, [inView, dispatch]);

  return (
    <React.Fragment>
        <div className={styles.headingContainer}>
            <h1 ref={ref} className={inView? styles.slideIn : '' }>Julian Pagtama</h1>
            <h3>Software Developer &bull; Los Angeles, CA &bull; jpagtama@gmail.com</h3>
        </div>
        <div className={styles.summaryContainer}>
            <p className={ styles.summary }>
                I have more than 6 years of software development experience in high volume applications where I aim to ensure scalability, optimize performance, and utilize best security practices.
            </p>
            <div className={ styles.links } >
                <a href="/#linkedin" ><LinkedInSVG /></a>
                <a href="/#github" ><GitHubSVG /></a>
            </div>
        </div>
    </React.Fragment>
  )
}

export default About