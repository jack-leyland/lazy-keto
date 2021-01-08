import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.container}>
      <Nav />
    </div>
  );
}

function Nav() {
  return (
    <div className={styles['nav-container']}>
      <div className={styles['top-bar']}></div>
    </div>
  );
}

export default Header;
