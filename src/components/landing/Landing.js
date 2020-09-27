import React from 'react';
import styles from './Landing.module.scss';

function Landing() {
  return <LandingTitle />;
}

function LandingTitle() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>Lazy Keto</div>
        <div className={styles.subtitle}>
          The cool catchphrase is on the way (so is the logo)
        </div>
      </div>
    </div>
  );
}

export default Landing;
