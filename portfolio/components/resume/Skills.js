import React from 'react'
import styles from '../../styles/resume/Skills.module.scss'
import Progress from './Progress'
import {AiFillHtml5} from 'react-icons/ai'
import {FaSass} from 'react-icons/fa'
import {SiCss3, SiBootstrap,SiTailwindcss, SiJavascript, SiJava, SiReact, SiNextdotjs} from 'react-icons/si'

function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
            <span></span>
            <h1>Skills</h1>
      </div>
      <div className={styles.container__skills}>
        <div className={styles.container__skill}>
          <AiFillHtml5 size={'1.7rem'} color='#EC732F'/>
          <Progress bgColor='#EC732F' number='70'/>
        </div>
        <div className={styles.container__skill}>
          <SiCss3 size={'1.7rem'} color='#268DCA'/>
          <Progress bgColor='#268DCA' number='70'/>
        </div>
        <div className={styles.container__skill}>
          <FaSass size={'1.7rem'} color='#CF6B9D'/>
          <Progress bgColor='#CF6B9D' number='65'/>
        </div>
        <div className={styles.container__skill}>
          <SiBootstrap size={'1.7rem'} color='#7445AB'/>
          <Progress bgColor='#7445AB' number='50'/>
        </div>
        <div className={styles.container__skill}>
          <SiTailwindcss size={'1.7rem'} color='#0499B6'/>
          <Progress bgColor='#0499B6' number='50'/>
        </div>
        <div className={styles.container__skill}>
          <SiJavascript size={'1.7rem'} color='#F3CF03'/>
          <Progress bgColor='#F3CF03' number='65'/>
        </div>
        <div className={styles.container__skill}>
          <SiJava size={'1.7rem'} color='#ED2C32'/>
          <Progress bgColor='#ED2C32' number='70'/>
        </div>
        <div className={styles.container__skill}>
          <SiReact size={'1.7rem'} color='#61DAFB'/>
          <Progress bgColor='#61DAFB' number='68'/>
        </div>
        <div className={styles.container__skill}>
          <SiNextdotjs size={'1.7rem'} color='black'/>
          <Progress bgColor='black' number='68'/>
        </div>
      </div>
    </div>
  )
}

export default Skills