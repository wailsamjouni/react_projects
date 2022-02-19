import React from 'react';
import styles from '../styles/Hero.module.css';
import {BsFillArrowRightSquareFill} from 'react-icons/bs';
import {IoDocumentText} from 'react-icons/io5';
import Link from 'next/link';
// import resume from '../img/CV-up.pdf';

function Hero() {
  return <div className={styles.hero}>
    <div className={styles.hero__wrapper}>
      <div className={styles.hero__content}>
        <div className={styles.hero__aboutcontainer}>
          <h3 className={styles.hero__abouttext}>About Me</h3>
        </div>
        <div className={styles.hero__top}>
          <h1 className={styles.hero__name}>Wail <span className={styles.hero__samjouni}>Samjouni</span></h1>
          <h3 className={styles.hero__job}>Web Developer</h3>
          <p className={styles.hero__unique}>
            I'm a software engineer specialised in frontend and 
            backend development for complex scalable web apps.
            Want to know how I may help your project? Check out 
            my project 
            <Link href='/portfolio'><a><span className={styles.hero__span}>portfolio</span></a></Link>
            and online 
            <Link href='/resume'><a download><span className={styles.hero__span}>resume</span></a></Link>.
          </p>
        </div>
        <div className={styles.hero__bottom}>
          <Link href='/portfolio'>
            <div className={styles.hero__viewportfolio}>
              <BsFillArrowRightSquareFill size={'1.7rem'} color='white'/>
              <h4 className={styles.hero__portfoliotext}>View Portfolio</h4>
            </div>
          </Link>
          <Link href='/resume'>
            <div className={styles.hero__viewresume}>
              <IoDocumentText size={'1.7rem'} color='orange'/>
              <h4 className={styles.hero__resumetext}>View Resume</h4>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className={styles.hero__informations}>
        <h3 className={styles.hero__unique}>
        For more informations check out my 
          <Link href='/skills'><a><span className={styles.hero__span}>Skills</span></a></Link>, 
          <Link href='/projects'><a><span className={styles.hero__span}>Projects</span></a></Link> 
          and <Link href='/portfolio'><a><span className={styles.hero__span}>Portfolio</span></a></Link>        
        </h3>
      </div> */}
    </div>
  </div>;
}

export default Hero;
