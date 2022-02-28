import React from 'react'
import styles from '../../styles/resume/Educations.module.scss'
import Education from './Education'

function Educations() {
  return (
    <div className={styles.container}>
      <div className={styles.container__wrapper}>
        <span></span>
        <h1>Education</h1>
      </div>
      <div className={styles.container__educations}>
        <Education 
          field='Training in computer network technology' 
          university='Institute of Special Applied Technologies in Rabat' 
          from='2011' 
          to='2013'/>
        <Education 
          field='BSc in Network security and computer systems' 
          university='Institute of Engineering in Rabat' 
          from='2014' 
          to='2015'/>
        <Education 
          field='BSc in Computer science' 
          university='TU Dortmund in Dortmund' 
          from='2018' 
          to='Present'/>
      </div>
    </div>
  )
}

export default Educations