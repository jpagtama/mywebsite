import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import {navActions} from '../store/navSlice';
import styles from '../styles/Skills.module.css'

const Skills = () => {
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (inView) dispatch(navActions.activate('skills'))
  }, [inView, dispatch]);

  return (
    <React.Fragment>
        <div className={styles.headingContainer}>
          <h1 ref={ref} className={inView? styles.slideIn: ''} >Skills</h1>
        </div>
        <div className={styles.skillList}>
            <h3>Programming languages</h3>
            <ul className={styles.list} >
                <li>ReactJS</li>
                <li>Javascript ES5/ES6</li>
                <li>Python</li>
                <li>Adobe ColdFusion</li>
            </ul>
            <h3>Tools & Technologies</h3>
            <ul className={styles.list} >
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Microsoft SQL</li>
                <li>GitHub</li>
                <li>MacOS</li>
                <li>Windows</li>
                <li>SourceTree</li>
                <li>JIRA</li>
            </ul>
        </div>
    </React.Fragment>
  )
}

export default Skills