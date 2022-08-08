import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { navActions } from '../store/navSlice';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Experience.module.css'

const Experience = () => {
    const dispatch = useDispatch()
    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView) dispatch(navActions.activate('experience'));
    }, [inView, dispatch]);

  return (
    <React.Fragment>
        <div id="Experience" className={styles.headingContainer} >
            <h1 ref={ref} className={ `${styles.heading} ${inView? styles.slideIn:'' }` }>Experience</h1>
        </div>
        <div className={ styles.container }>
            <span className={styles.workDetails}>
                <h2>Software Developer</h2>
                <h3>Regal Medical Group</h3>
                <p className={ styles.workDesc } >
                    Developed and maintained a variety of internal and external applications within the health industry. Our users consists of customers, nurses, doctors, and employees within our network. Additionally, I worked to ensure the protection of sensitive patient information to meet HIPAA compliance standards.
                </p>
            </span>
            <p className={ styles.workDates } >January 2018 - March 2021</p>
        </div>
        <div  className={ styles.container }>
            <span className={styles.workDetails}>
                <h2>Web Developer</h2>
                <h3>Breakdown Services</h3>
                <p className={ styles.workDesc } >
                    Worked within a team to maintain and engineer a system of applications designed to service casting directors, talent representatives, and actors within a seamless, casting ecosystem.
                </p>
            </span>

            <p className={ styles.workDates } >June 2014 - January 2018</p>
        </div>
    </React.Fragment>
  )
}

export default Experience