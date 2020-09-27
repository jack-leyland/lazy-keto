import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div>
      <div className={styles['footer-container']}>
        <div className={styles['columns']}>
          <span>&copy; {new Date().getFullYear()} Lazy Keto</span>
        </div>
        <div className={styles['columns']}>
          <span></span>{' '}
          {/* Placeholder in case I need something here once I'm farther along/done with the header */}
        </div>
        <div className={styles['columns']}>
          <span>
            <a href="#">About</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
