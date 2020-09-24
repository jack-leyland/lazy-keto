import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/App'; //will be replaced by App component index file eventually I think.
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
