import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div>
      <div className={styles['footer-container']}>
        <div className={styles.wrapper}>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Lazy Keto
          </div>
          <div className={styles.socials}>
            <a href="#">@jack-leyland</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
