import React from 'react'
import styles from '../../styles/resume/UniProjects.module.scss'

function UniProjects() {
  return (
    <div className={styles.container}>
        <div className={styles.container__wrapper}>
        <span></span>
        <h1>Projects</h1>
      </div>
      <div className={styles.container__projects}>
        <div className={styles.project}>
            <h2>Patchwork Game</h2>
            <p>The board game Patchwork was implemented as a <span>JavaFX</span> based game.</p>
        </div>
        <div className={styles.project}>
            <h2>Corona Software</h2>
            <p>As <span>JavaFx</span> based software, the possibility is offered to manage the chain of infection.</p>
        </div>
        <div className={styles.project}>
            <h2>Book Recommender System</h2>
            <p>Mit <span className={styles.python}>Python</span> wurde ein System entwickelt, um Bücher zu empfehlen.</p>
        </div>
      </div>
    </div>
  )
}

export default UniProjects