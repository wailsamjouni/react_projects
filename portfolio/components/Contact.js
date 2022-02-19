import React from 'react';
import styles from '../styles/Contact.module.css';
import {FiSend} from 'react-icons/fi';


function Contact() {

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contact__wrapper}>
        <div className={styles.contact__left}>
          <div className={styles.contact__titlecontainer}>
            <h1 className={styles.contact__title}><span className={styles.contact__span}>Get</span> In Touch <span className={styles.contact__span}>.</span></h1>
          </div>
          <div className={styles.contact__messagepolygon}>
          </div>
        </div>
        <form className={styles.contact__right} onSubmit={handleSubmit}>
          <div className={styles.contact__formcontainer}>
            {/* <div className={styles.contact__infos}> */}
              {/* <label className={styles.contact__label} htmlFor="Firstname">Firstname :</label> */}
              <input className={styles.contact__input} type="text" placeholder='Enter your Fullname'/>
            {/* </div> */}
            {/* <div className={styles.contact__infos}> */}
              {/* <label className={styles.contact__label} htmlFor="Lastname">Lastname :</label> */}
              <input className={styles.contact__input} type="text" placeholder='Enter your Email'/>
            {/* </div> */}
            {/* <div className={styles.contact__infos}> */}
              {/* <label className={styles.contact__label} htmlFor="Message">Message :</label> */}
              <textarea className={styles.contact__textarea} rows="4" cols="50" name="message" placeholder='Write your Message...'>
              </textarea>
            {/* </div> */}
            <div className={styles.contact__container}>
              <div className={styles.contact__sendmessage}>
                <FiSend size={'1.7rem'} color='orange'/>
                <h3 className={styles.contact__sendtitle}>Send</h3>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
