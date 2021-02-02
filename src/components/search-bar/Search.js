import React, { useState, useEffect } from 'react';
import styles from './Search.module.scss';
import {ReactComponent as SearchIcon} from '../../assets/icons/magnify-glass.svg';


export default function Search(props) {

    function handleSearchChange(event) {
        props.handleSearchChange(event.target.value)
    }
    // console.log('Searchbar props: ')
    // console.log(props)
    return (
        <div className={styles.search}>
            <form id='search' className={styles['search-form']}>
                <div className={styles['search-wrapper']}>
                <SearchIcon />
                <input 
                    type='text' 
                    placeholder='Search for recipes...' 
                    maxLength='120'
                    value={props.query}
                    onChange={handleSearchChange}
                    />
                </div>
            </form>
        </div>
    )

}

