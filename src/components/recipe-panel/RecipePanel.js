import React, { useState, useRef, useCallback } from 'react';
import styles from './RecipePanel.module.scss';
import { ReactComponent as SoupIcon } from '../../assets/icons/soup-icon.svg';

export default function RecipePanel() {

    return(
        <div className={styles['panel-container']}>
            <SoupLogo />
        </div>
    )
}



function SoupLogo() {
    return (
      <div className={styles['soup-container']}>
        <SoupIcon />
        <div className={styles['soup-text']}>What are we having today?</div>
      </div>
    )
  }