import React, { useState } from 'react';
import styles from './Recipes.module.scss';
import { 
  Search,
  RecipeList 
} from '../index'; 
import { useRecipeSearch } from '../../utils/index';

export default function Recipes() {

  const [searchString, setSearchString] = useState('');
  const [searchParams, setSearchParams] = useState({
    pgNum: 1,
    size: 17,
    query: ''
})

  function handleSearchChange(newSearchString) {
    setSearchParams({
      ...searchParams,
      pgNum: 1,
      query: String(newSearchString)
    })
  }

  useRecipeSearch(searchParams);

  console.log('Parent level searchParams:')
  console.log(searchParams)

  return <div className={styles.recipes}>
    <Search 
      handleSearchChange={handleSearchChange} 
      searchString={searchParams.query}
      />
    <RecipeList 
    searchString={searchParams.query}/>
  </div>;
}