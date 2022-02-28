import React from 'react'
import styles from '../../styles/resume/Infos.module.scss'
import {MdLocationPin, MdEmail, MdPhone} from 'react-icons/md';

function Infos() {
  return (
    <div className={styles.infos}>
        <div className={styles.infos__children}>
          <MdLocationPin size={'1.7rem'} color='orange'/>
          <h4>Dortmund, Germany</h4>
        </div>
        <div className={styles.infos__children}>
          <MdEmail size={'1.7rem'} color='orange'/>
          <h4>waill.samjouni@gmail.com</h4>
        </div>
        <div className={styles.infos__children}>
          <MdPhone size={'1.7rem'} color='orange'/>
          <h4>+49 163 760 98 62</h4>
        </div>
      </div>
  )
}

export default Infos