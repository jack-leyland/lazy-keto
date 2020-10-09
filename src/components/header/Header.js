import React from 'react';
import styles from './Header.module.scss';
import {
  Generate as GenerateIcon,
  Recipe as RecipeIcon,
  Resources as ResourcesIcon,
} from '../../assets/index';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.container}>
      <Logo />
      <Nav />
    </div>
  );
}

function Logo() {
  return <div className={styles.logo}>Lazy Keto</div>;
}

function Nav() {
  return (
    <div className={styles.nav}>
      <Link to="/recipes">
        <div className={styles['recipes-button']}>
          <RecipeIcon />
          <div>Recipes</div>
        </div>
      </Link>
      <Link to="/generate">
        <div className={styles['generate-button']}>
          <GenerateIcon />
          <div>Generate Meal</div>
        </div>
      </Link>
      <Link to="/resources">
        <div className={styles['resources-button']}>
          <ResourcesIcon />
          <div>Resources</div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
