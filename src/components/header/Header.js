import React from 'react';
import styles from './Header.module.scss';
import {
  Generate as GenerateIcon,
  Recipe as RecipesIcon,
  Resources as ResourcesIcon,
} from '../../assets/index';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}></div>
    </div>
  );
}

export default Header;
