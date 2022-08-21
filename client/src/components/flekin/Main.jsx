import React, {useState} from 'react';
import {flekin} from 'flekin';
import {FaRegCopy} from 'react-icons/fa';
import styles from '../../styles/flekin/Main.module.css';
import { IconContext } from 'react-icons/lib';

const Main = () => {
  const [text, setText] = useState('');
  const [copyToClip, setCopyToClip] = useState(false);
  const [animateResults, setAnimateResults] = useState(false);
  const [readingEase, setReadingEase] = useState();
  const [gradeLevel, setGradeLevel] = useState();
  const [wordCount, setWordCount] = useState();
  const [syllableCount, setSyllableCount] = useState();
  const [sentenceCount, setSentenceCount] = useState();

  const textHandler = e => {
    setText(e.target.value);
  }

  const submitHandler = e => {
    e.preventDefault();
    try {
      const scores = flekin(text);
      setReadingEase(scores.reading_ease);
      setGradeLevel(scores.grade_level);
      setWordCount(scores.word_count);
      setSyllableCount(scores.syllable_count);
      setSentenceCount(scores.sentence_count);
      setAnimateResults(true);
    } catch (e) {
      console.log("error >>", e);
    }
  }

  const animationEndHandler = () => {
    setAnimateResults(false);
  }

  const copyToClipEndHandler = () => {
    setCopyToClip(false);
  }

  const copyHandler = () => {
    navigator.clipboard.writeText("npm install flekin");
    setCopyToClip(true);
  }

  return (
    <main className={styles.main}>
      <div className={styles.mainContainer} >
        <div className={styles.inputResultsContainer}>
          <div className={styles.resultContainer}>
            <h2>Results</h2>
            <div className={styles.resultList}>
              <div className={styles.resultField} >
                <div>Grade Level:</div>
                <div className={`${animateResults? styles.gradeResult: ''}`} >{gradeLevel}</div>
              </div>
              <div className={styles.resultField} >
                <div>Reading Ease:</div>
                <div className={`${animateResults? styles.easeResult: ''}`} >{readingEase}</div>
              </div>
              <div className={styles.resultField} >
                <div>Words:</div>
                <div className={`${animateResults? styles.wordsResult: ''}`} >{wordCount}</div>
              </div>
              <div className={styles.resultField} >
                <div>Syllables:</div>
                <div className={`${animateResults? styles.syllableResult: ''}`} >{syllableCount}</div>
              </div>
              <div className={styles.resultField} >
                <div>Sentences:</div>
                <div className={`${animateResults? styles.sentenceResult: ''}`} onAnimationEnd={animationEndHandler}>{sentenceCount}</div>
              </div>
            </div>
          </div>
          <form className={styles.formArea}  onSubmit={submitHandler} spellCheck={false}>
            <label className={styles.textLabel} htmlFor='textBox' >Enter your text here:</label>
            <textarea id="textBox" className={styles.textArea} value={text} onChange={textHandler} />
            <button className={text.length? styles.getScoresBtn: styles.disabledBtn} disabled={!text.length? true: false} >Get Scores</button>
          </form>
        </div>
        <div className={styles.hr}></div>
        <article className={styles.aboutContainer}>
          <h2>About</h2>
          <p className={styles.aboutDesc}>
            Flekin (short for Flesch-Kincaid) is a free JavaScript library that allows developers to programmatically measure the readability of english text. The Flesch-Kincaid formula is commonly used as a requirement for documents like insurance policies.
          </p>
        </article>
        <article className={styles.aboutContainer}>
          <h2>Install with npm</h2>
          <div className={`${styles.codeBlock} ${styles.npmBlock} ${copyToClip && styles.copyToClip}`} onClick={copyHandler} onAnimationEnd={copyToClipEndHandler}>
            <p>
              npm install flekin
            </p>
            <IconContext.Provider value={{color: "var(--text-color)"}}>
              <FaRegCopy />
            </IconContext.Provider>
          </div>

        </article>
        <article className={styles.aboutContainer}>
          <h2>Usage</h2>
          <div className={`${styles.codeBlock} ${styles.commentBlock}`}>
            <p>import &#123;flekin&#125; from 'flekin';</p>
            <p>const scores = flekin(<span className={styles.codeArg}>'Nothing is so fatiguing as the eternal hanging on of an uncompleted task.'</span>);</p>
            <i className={styles.codeComment}>&frasl;&frasl; &nbsp;&#123;</i>
            <i className={styles.codeComment}>&frasl;&frasl; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;grade_level: 9.45,</i>
            <i className={styles.codeComment}>&frasl;&frasl; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reading_ease: 50.47,</i>
            <i className={styles.codeComment}>&frasl;&frasl; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;word_count: 13,</i>
            <i className={styles.codeComment}>&frasl;&frasl; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;syllable_count: 22,</i>
            <i className={styles.codeComment}>&frasl;&frasl; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sentence_count: 1</i>
            <i className={styles.codeComment}>&frasl;&frasl; &nbsp;&#125;</i>
          </div>
        </article>
      </div>
    </main>
  )
}

export default Main