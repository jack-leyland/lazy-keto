import React from 'react';

function RecipeIcon(props) {
  // a viewbox height/width is passed. Allows for more sizing options and ensure icon viewbox is always a square
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#2c3e50"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
      <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
      <line x1="3" y1="6" x2="3" y2="19" />
      <line x1="12" y1="6" x2="12" y2="19" />
      <line x1="21" y1="6" x2="21" y2="19" />
    </svg>
  );
}

export default RecipeIcon;
