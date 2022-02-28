import React from 'react';
import LeftSide from '../components/resume/LeftSide';
import RightSide from '../components/resume/RightSide';
import styles from '../styles/Resume.module.scss';

function resume() {
  return (
    <div className={styles.container}>
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default resume;
