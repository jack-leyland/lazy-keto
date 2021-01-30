import React, { useState, useEffect } from 'react';
import styles from './RecipeList.module.scss';
import { getRecipes } from '../../utils/index';

export default function RecipeList() {
    
    const [state, setState] = useState({
        loading: 0,
        recipes:[]        
    })
   
    useEffect( () => {
        getRecipes(state, setState);
    },[]);

    console.log(state); //debugging, remove later

    return (
        <div className={styles['list-container']}>
            <div className={styles['recipe-listing-container']}>
                <ul>
                    <li>lorem</li>
                    <li>ipsum</li>
                </ul>
            </div>
        </div>
    )
};
