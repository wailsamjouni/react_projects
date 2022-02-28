import React from 'react'
import styles from '../../styles/resume/RightSide.module.scss'
import Educations from './Educations'
import PersonalInfos from './PersonalInfos'
import Progress from './Progress'

function RightSide() {
  return (
    <div className={styles.right}>
      <Educations />
    </div>
  )
}

export default RightSide