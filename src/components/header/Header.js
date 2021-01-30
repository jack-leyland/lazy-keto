import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import {ReactComponent as ResourcesIcon} from '../../assets/icons/resources.svg';
import {ReactComponent as GenerateIcon} from '../../assets/icons/generate.svg';
import {ReactComponent as RecipeIcon} from '../../assets/icons/recipe.svg';

//TODO: Username componer and user functionality will be added once app is working

function Header() {
  return (
    <div className={styles.header}>
      <NavBar />
    </div>
  );
}

function NavBar() {
  return (
    <div className={styles['nav-container']}>
      <div className={styles['top-bar']}></div>
      <NavLink exact to="/">
      <div className={styles.logo}>Lazy Keto</div>
      </NavLink>
      <div className={styles['header-menu']}>
        <HeaderMenu />
      </div>
    </div>
  );
}

function HeaderMenu() {
  return (
    <div className={styles['menu-container']}>
      <NavLink className={styles['recipes-button-inactive']} activeClassName={styles['recipes-button-active']} to="/recipes">
        <div className={styles['recipes-wrapper']}>
          <RecipeIcon />
          <div className={styles.text}>Recipes</div>
          <div className={styles.bar}></div>
        </div>
      </NavLink>
      <NavLink className={styles['generate-button-inactive']} activeClassName={styles['generate-button-active']} to="/generate">
        <div className={styles['generate-wrapper']}>
          <GenerateIcon />
          <div className={styles.text}>Generate Meal</div>
          <div className={styles.bar}></div>
        </div>
      </NavLink>
      <NavLink className={styles['resources-button-inactive']} activeClassName={styles['resources-button-active']} to="/resources">
        <div className={styles['resources-wrapper']}>
          <ResourcesIcon />
          <div className={styles.text}>Resources</div>
          <div className={styles.bar}></div>
        </div>
      </NavLink>
    </div>
  )
}

export default Header;
