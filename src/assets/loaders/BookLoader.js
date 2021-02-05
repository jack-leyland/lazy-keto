import React from 'react';
import styles from './book-loader.module.scss';

export default function BookLoader() {
    return (
        <div className={styles.loader}>
            <div className={styles.book}>
                <div className={styles["book__page"]}></div>
                <div className={styles["book__page"]}></div>
                <div className={styles["book__page"]}></div>
            </div>
            
        </div>
    )
}