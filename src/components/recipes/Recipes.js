import React, { useState } from 'react';
import styles from './Recipes.module.scss';
import { 
  Search,
  RecipeList 
} from '../index'; 


function Recipes() {
  return <div className={styles.recipes}>
    <Search />
    <RecipeList />
  </div>;
}


export default Recipes;
