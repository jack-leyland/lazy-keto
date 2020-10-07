import React from 'react';
import {
  Generate as GenerateIcon,
  Recipe as RecipesIcon,
  Resources as ResourcesIcon,
} from '../../assets/index';
import { Link } from 'react-router-dom';

// styling must be done on stylesheet for component within which these are rendered.
// this might be bad

function RecipesButton(props) {
  return (
    <Link to="/recipes">
      <div className={props.styling}>
        <span>Recipes</span>
        <RecipesIcon />
      </div>
    </Link>
  );
}
function GenerateButton(props) {
  return (
    <Link to="/generate">
      <div className={[props.styling]}>
        <span>Generate Meal</span>
        <GenerateIcon />
      </div>
    </Link>
  );
}

function ResourcesButton(props) {
  return (
    <Link to="/resources">
      <div className={props.styling}>
        <span>Resources</span>
        <ResourcesIcon />
      </div>
    </Link>
  );
}

export { RecipesButton, GenerateButton, ResourcesButton };
