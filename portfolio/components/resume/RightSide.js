import React from 'react'
import styles from '../../styles/resume/RightSide.module.scss'
import Educations from './Educations'
import Experiences from './Experiences'
import Skills from './Skills'

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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet aliquid in cum fugiat rerum, mollitia molestiae minus voluptatibus illum blanditiis suscipit error porro hic sunt nisi laborum fugit esse, quis provident placeat temporibus dolorem et, eos cupiditate. Sapiente reiciendis tempora quisquam neque sit odit eius, odio tenetur quam fuga rerum perspiciatis doloribus maiores, officia blanditiis id qui quas pariatur. Distinctio repellendus, fugiat voluptates, delectus dignissimos labore perferendis quam incidunt, magnam consectetur quis soluta. Ratione illum provident excepturi incidunt eligendi soluta est, totam, iusto tempore iure et, nobis tempora consequatur expedita sit fugiat iste deleniti. Magni adipisci tenetur sapiente architecto molestiae.
        </div>
      </div>
    </div>
  )
}

export default RightSide