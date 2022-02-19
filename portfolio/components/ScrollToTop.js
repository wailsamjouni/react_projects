import React from 'react';
import styles from '../styles/ScrollToTop.module.css';
import {FaChevronUp} from 'react-icons/fa';
import { useWindowScroll } from 'react-use';

function ScrollToTop({scrollTop}) {

  return (
      <div className={styles.container} onClick={scrollTop}>
          <FaChevronUp className={styles.container__icon} size={'1.7rem'} color='white'/>
      </div>
  );
}

export default ScrollToTop;
