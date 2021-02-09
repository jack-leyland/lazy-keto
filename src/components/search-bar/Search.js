import React, {useState, useCallback, useEffect} from 'react';
import styles from './Search.module.scss';
import {ReactComponent as SearchIcon} from '../../assets/icons/magnify-glass.svg';
import debounce from 'lodash/debounce'

export default function Search(props) {
    const [search, setSearch] = useState('');

  
    const sendQueryToParent = useCallback(
        debounce(search => props.updateSearchQuery(search), 700),
        []
    )

    useEffect(() => {
        sendQueryToParent(search)
    },[search, sendQueryToParent])

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
                    onChange={e => setSearch(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )

}


