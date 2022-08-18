import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import {navActions} from '../../store/navSlice';
import styles from '../../styles/Projects.module.css'

const Projects = () => {
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (inView) dispatch(navActions.activate('projects'))
  }, [inView, dispatch]);

  return (
    <>
      <div id="Projects" className={ styles.headingContainer }>
        <h1 ref={ref} className={inView? styles.slideIn: ''}>Projects</h1>
      </div>
      <p className={styles.comingSoon}>coming soon</p>
    </>
  )
}

export default Projects