import React from 'react';
import styles from './Landing.module.scss';
import { Link } from 'react-router-dom';
//Import SVGs as components  - requires SVGR package which is included with create-react-app
import {ReactComponent as ResourcesIcon} from '../../assets/icons/resources.svg';
import {ReactComponent as GenerateIcon} from '../../assets/icons/generate.svg';
import {ReactComponent as RecipeIcon} from '../../assets/icons/recipe.svg';
import {ReactComponent as Waves} from '../../assets/icons/logo-waves.svg';
import {ReactComponent as Logo} from '../../assets/icons/logo.svg';

//TODO: VERTICAL SCALING! -Further hover animations?


function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.waves}>
        <Waves />
      </div>
      <div className={styles.logo}>
        <Logo />
      </div>
      <Menu />
    </div>
  );
}

function Menu() {
  return (
    <div className={styles.menu}>
      <Link to="/recipes">
        <div className={styles['recipes-button']}>
          <div></div>
          <RecipeIcon />
          <span>Recipes</span>
        </div>
      </Link>
      <Link to="/generate">
        <div className={styles['generate-button']}>
        <div></div>
          <GenerateIcon />
          <span>Generate Meal</span>
        </div>
      </Link>
      <Link to="/resources">
        <div className={styles['resources-button']}>
        <div></div>
          <ResourcesIcon />
          <span>Resources</span>
        </div>
      </Link>
    </div>
  );
}

export default Landing;
