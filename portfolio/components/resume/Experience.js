import React from 'react'
import styles from '../../styles/resume/Experience.module.scss'

function Experience(props) {
    const {job, company, period, place, postition, todo} = props;
  return (
    <div className={styles.container}>
        <h2>{job}</h2>
        <h3>{company}</h3>
        <div className={styles.container__period}>
            <h5>{period}</h5>
            <h5>{place}</h5>
        </div>
        <div className={styles.container__todo}>
            {
                todo.map(item => {
                    return (
                        <li>
                            {item}
                        </li>
                    );
                })
            }
        </div>
    </div>
  );
}

export default Experience