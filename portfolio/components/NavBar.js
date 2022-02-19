import React from 'react';
import styles from '../styles/NavBar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import {FaCode} from 'react-icons/fa';
import {FiMenu} from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai';
import {useRouter} from 'next/router';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

function NavBar({isOpen, setIsOpen}) {

    const router = useRouter();
    const currentPath = router.pathname;

  return (
      <div className={styles.container}>
          <div className={styles.container__logo}>
              <Link href="/">
                  <a>
                  <FaCode size={'2.5rem'} color='orange'/>
                  </a>
              </Link>
          </div>
          <div className={styles.container__navbar}>
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
          </div>
          <div className={styles.container__socialhamburger}>
            <div className={styles.container__social}>
              <Link href='https://github.com/wailsamjouni'><a><AiFillGithub className={styles.container__socialicons} size={'2rem'}/></a></Link>
              <Link href='https://www.linkedin.com/in/wail-samjouni-b53949201/'><a><AiFillLinkedin className={styles.container__socialicons} size={'2rem'}/></a></Link>
            </div>
            <div className={styles.container__icons} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <AiOutlineClose size={'2rem'} /> : <FiMenu size={'2.1rem'}/>}
            </div>
          </div>
      </div>
  );
}

export default NavBar;
