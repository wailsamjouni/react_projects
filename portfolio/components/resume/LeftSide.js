import Link from 'next/link';
import React from 'react'
import styles from '../../styles/resume/LeftSide.module.scss'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import Infos from './Infos'

function LeftSide() {
  return (
    <div className={styles.left}>
      <h2>Wail Samjouni</h2>
      <div className={styles.left__img}></div>
      <p>Hi, my name is Wail Samjouni and I'm a software developer. Welcome to my personal website!</p>
      <div className={styles.socialicons}>
        <Link href='https://github.com/wailsamjouni'><a><AiFillGithub size={'1.7rem'} className={styles.socialicons__children}/></a></Link>
        <Link href='https://www.linkedin.com/in/wail-samjouni-b53949201/'><a><AiFillLinkedin size={'1.7rem'} className={styles.socialicons__children}/></a></Link>
      </div>
      <Infos />
      <button>
        Email me
      </button>
    </div>
  )
}

export default LeftSide