import React, { useState, useRef, useCallback } from 'react';
import styles from './Recipes.module.scss';
import { 
  Search,
  RecipeDisplay,
  RecipePanel 
} from '../index'; 
import { useRecipeSearch } from '../../utils/index';

export default function Recipes() {

  const [searchParams, setSearchParams] = useState({
    pgNum: 1,
    size: 30,
    query: ''
})

  const listState = useRecipeSearch(searchParams);
  const observer = useRef();
 
  function handleSearchChange(newSearchString) {
    console.log('search changed')
    setSearchParams({
      ...searchParams,
      pgNum: 1,
      query: String(newSearchString)
    })
  }

  const lastRecipeElemRef = useCallback(node => {
    if(listState.loading) return
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && listState.hasMore) {
        setSearchParams(
          {
          ...searchParams,
          pgNum: searchParams.pgNum + 1
        })
      }
    })
    if(node) observer.current.observe(node)
  }, [searchParams, listState.loading, listState.hasMore]);

  return <div className={styles.recipes}>
    <Search 
      handleSearchChange={handleSearchChange} 
      searchString={searchParams.query}
      />
    <RecipeDisplay 
    searchString={searchParams.query}
    listState={listState}
    lastRecipeElemRef={lastRecipeElemRef}
    />
    <RecipePanel />
  </div>;
}

