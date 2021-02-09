import React from 'react';
import styles from './RecipeDisplay.module.scss';
import {ReactComponent as ClockIcon} from '../../assets/icons/clock.svg';
import {ReactComponent as ChevronIcon} from '../../assets/icons/double-chevron.svg';
import {RecipeLoader} from '../../assets/index'


export default function RecipeDisplay(props) {
    return (
        <div className={styles['list-container']}>
            <RecipeListings 
            listState={props.listState}
            lastRecipeElemRef={props.lastRecipeElemRef} 
            />
            <>{props.listState.loading && <RecipeLoader/>}</> {/*super overkill loader I found online, will prob change to some more thematic thing when the app is done*/}
            <>{props.listState.noSearchResults && <div className={styles['no-results']}>No matching recipes :(</div>}</>
        </div>
    )
};

function RecipeListings(props) {
    return props.listState.recipes.map((r, i) => { //so I may have to reconsider the way the keys work here once I get to the recipe editing functionality.
        return <div key={r._id} 
                    className={ i % 2 ? styles['recipe-listing-blank'] : styles['recipe-listing']}
                    ref={props.listState.recipes.length === i + 1 ? props.lastRecipeElemRef : null}
                    >
            <div key={r._id + '_name'} className={styles.name}> {r.name} </div>
            <div key={r._id + '_info-container'} className={styles['info-container']}>
                <span key={r._id + '_type'} className={styles.type}> {r.type} </span>
                <ClockIcon key={r._id + '_icon'} className={styles.clock} />
                <span key={r._id + '_time'} className={styles.time}> {r.time} minutes </span> 
            </div>
            <ChevronIcon key={r._id + '_chevron'} className={styles.chevron} />
        </div>
    })
}


  
