import React from 'react'
import styles from '../../styles/resume/RightSide.module.scss'
import Educations from './Educations'
import Experiences from './Experiences'

function RightSide() {
  return (
    <div className={styles.right}>
      <Educations />
      <Experiences />
    </div>
  )
}

export default RightSide