import React from 'react'
import styles from '../styles/Footer.module.css';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import Link from 'next/link';
import {useRouter} from 'next/router';

function Footer() {

    const router = useRouter();
    const currentPath = router.pathname;

  return (
    <div className={styles.container}>
        <span className={styles.container__square1}></span>
        <span className={styles.container__square2}></span>
        <span className={styles.container__circle}></span>
        {/* NavBar */}
        <nav className={styles.container__nav}>
            <ul className={styles.container__list}>
                  <li className={currentPath === '/' ? styles.active : styles.inactive}>
                    <Link href="/">
                    <a className={styles.container__link}>Home</a>
                    </Link>
                  </li>
                  <li className={currentPath === '/about' ? styles.active : styles.inactive}>
                    <Link href='/about'>
                    <a className={styles.container__link}>About</a>
                    </Link>
                  </li>
                  <li className={currentPath === '/skills' ? styles.active : styles.inactive}>
                    <Link href='/skills'>
                    <a className={styles.container__link}>Skills</a>
                    </Link>
                  </li>
                  <li className={currentPath === '/projects' ? styles.active : styles.inactive}>
                    <Link href='/projects'>
                    <a className={styles.container__link}>Projects</a>
                    </Link>
                  </li>
                  <li className={currentPath === '/portfolio' ? styles.active : styles.inactive}>
                    <Link href='/portfolio'>
                    <a className={styles.container__link}>Portfolio</a>
                    </Link>
                  </li>
            </ul>
        </nav>

        {/*  */}
        <div className={styles.container__socialicons}>
            <AiFillGithub className={styles.container__icons} size={'2rem'}/>
            <AiFillLinkedin className={styles.container__socialicons} size={'2rem'}/>
        </div>
    </div>
  )
}

export default Footer