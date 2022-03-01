import React from 'react'
import styles from '../../styles/resume/Experiences.module.scss'
import Experience from './Experience'
import {experienceData} from './experienceData'

function Experiences() {
  return (
    <div className={styles.container}>
        <div className={styles.container__wrapper}>
            <span></span>
            <h1>work experiences</h1>
        </div>
        <div className={styles.container__experiences}>
            {
                experienceData.map(experience => {
                    return(
                        <Experience 
                            key={experience.id}
                            job={experience.job}
                            company={experience.company}
                            period={experience.period}
                            place={experience.place}
                            todo={experience.todo}
                        />
                    );
                })
            }
        </div>
    </div>
  )
}

export default Experiences