import React from 'react'
import styles from '../../styles/resume/Education.module.scss'

function Education({field, university, from, to}) {
  return (
    <div className={styles.container}>
        <h2>{field}</h2>
        <h3>{university}</h3>
        <h4>{from} <span>-</span> {to}</h4>
    </div>
  )
}

export default Education