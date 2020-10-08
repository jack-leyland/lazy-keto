import React from 'react';
import styles from './Landing.module.scss';
import {
  Generate as GenerateIcon,
  Recipe as RecipeIcon,
  Resources as ResourcesIcon,
} from '../../assets/index';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className={styles.landing}>
      <Background />
      <Title />
      <Menu />
    </div>
  );
}

function Title() {
  return (
    <div className={styles.title}>
      <div className={styles.wrapper}>
        <div className={styles['title-wrapper']}>
          <span className={styles['title-1']}>Lazy</span>
          <span className={styles['title-2']}>Keto</span>
        </div>
        <div className={styles['subtitle-wrapper']}>
          <span className={styles.subtitle}>Think less.</span>
          <span className={styles.subtitle}>Wait less.</span>
          <span className={styles.subtitle}>Weigh less.</span>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className={styles.menu}>
      <Link to="/recipes">
        <div className={styles['recipes-button']}>
          <span>Recipes</span>
          <RecipeIcon />
        </div>
      </Link>
      <Link to="/generate">
        <div className={styles['generate-button']}>
          <span>Generate Meal</span>
          <GenerateIcon />
        </div>
      </Link>
      <Link to="/resources">
        <div className={styles['resources-button']}>
          <span>Resources</span>
          <ResourcesIcon />
        </div>
      </Link>
    </div>
  );
}

function Background() {
  return (
    <div className={styles.background}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 150">
        <path
          className={styles['bottom-wave']}
          d="M-14.11,94.23 C69.41,59.70 460.49,71.53 419.86,-57.73 L546.27,-29.12 L0.00,0.00 Z"
        ></path>
        <path
          className={styles['top-wave']}
          d="M-8.47,44.90 C75.05,197.85 259.59,-42.93 590.86,4.43 L502.25,-27.15 L0.00,0.00 Z"
        ></path>
      </svg>
    </div>
  );
}

export default Landing;
