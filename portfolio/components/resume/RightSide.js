import React from 'react'
import styles from '../../styles/resume/RightSide.module.scss'
import Educations from './Educations'
import Experiences from './Experiences'
import Skills from './Skills'
import UniProjects from './UniProjects'

function RightSide() {
  return (
    <div className={styles.right}>
      <Educations />
      <div className={styles.right__experienceskillsprojects}>
        <div className={styles.right__experienceskills}>
          <Experiences />
          <Skills />
        </div>
        <div className={styles.right__projects}>
          <UniProjects />
        </div>
      </div>
    </div>
  )
}

export default RightSide