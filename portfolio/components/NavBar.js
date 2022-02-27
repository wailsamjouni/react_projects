import React from 'react';
import styles from '../styles/NavBar.module.scss';
import Link from 'next/link';
import {FaCode} from 'react-icons/fa';
import {FiMenu} from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai';
import {useRouter} from 'next/router';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

function NavBar() {
    const value = useContext(DataContext);
    const router = useRouter();
    const currentPath = router.pathname;
    const {isOpen, setIsOpen} = value;

  return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.container__logo}>
              <Link href="/">
                  <a>
                  <FaCode size={'2.5rem'} className={styles.logo}/>
                  </a>
              </Link>
          </div>
          <ul>
            <li className={currentPath === '/' ? styles.active : styles.inactive}>
              <Link href='/'><a>Home</a></Link>
            </li>
            <li className={currentPath === '/about' ? styles.active : styles.inactive}>
              <Link href='/about'><a>About</a></Link>
            </li>
            <li className={currentPath === '/skills' ? styles.active : styles.inactive}>
              <Link href='/skills'><a>Skills</a></Link>
            </li>
            <li className={currentPath === '/projects' ? styles.active : styles.inactive}>
              <Link href='/projects'><a>Projects</a></Link>
            </li>
            <li className={currentPath === '/portfolio' ? styles.active : styles.inactive}>
              <Link href='/portfolio'><a>Portfolio</a></Link>
            </li>
          </ul>
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
        <ul className={styles.menu} style={{right: isOpen ? "0px" : "-100vw"}}>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/about'><a>About</a></Link></li>
            <li><Link href='/skills'><a>Skills</a></Link></li>
            <li><Link href='/projects'><a>Projects</a></Link></li>
            <li><Link href='/portfolio'><a>Portfolio</a></Link></li>
        </ul>
      </div>
  );
}

export default NavBar;