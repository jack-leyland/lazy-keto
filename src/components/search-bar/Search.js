import React from 'react';
import styles from './Search.module.scss';
import {ReactComponent as SearchIcon} from '../../assets/icons/magnify-glass.svg';


function Search() {
    return (
        <div className={styles.search}>
            <form id='search' className={styles['search-form']}>
                <div className={styles['search-wrapper']}>
                <SearchIcon />
                <input type='text' placeholder='Search for recipes...' maxLength='120'/>
                </div>
                


            </form>
        </div>
    )

}

export default Search;