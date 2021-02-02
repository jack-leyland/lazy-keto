import React, { useState, useEffect } from 'react';
import styles from './RecipeList.module.scss';
import { useRecipeSearch } from '../../utils/index';

export default function RecipeList(props) {
    // console.log('RecipeList props: ');
    // console.log(props)

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
