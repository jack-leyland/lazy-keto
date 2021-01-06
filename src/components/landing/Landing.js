import React from 'react';
import styles from './Landing.module.scss';
import { Link } from 'react-router-dom';
//Import SVGs as components  - requires SVGR package which is included with create-react-app
import {ReactComponent as ResourcesIcon} from '../../assets/icons/resources.svg';
import {ReactComponent as GenerateIcon} from '../../assets/icons/generate.svg';
import {ReactComponent as RecipeIcon} from '../../assets/icons/recipe.svg';
import {ReactComponent as Logo} from '../../assets/icons/logo-waves.svg';

//TODO: Fix weird logo border issue - maybe separte component? -Fix fonts -Add green bar above icons -Add hover animations(later)


function Landing() {
  return (
    <div className={styles.landing}>
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
          <RecipeIcon />
          <span>Recipes</span>
        </div>
      </Link>
      <Link to="/generate">
        <div className={styles['generate-button']}>
          <GenerateIcon />
          <span>Generate Meal</span>
        </div>
      </Link>
      <Link to="/resources">
        <div className={styles['resources-button']}>
          <ResourcesIcon />
          <span>Resources</span>
        </div>
      </Link>
    </div>
  );
}

export default Landing;
