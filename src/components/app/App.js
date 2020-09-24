import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Recipes, Resources, Generate, Landing } from '../index';

//will eventually need to import logos

function App() {
  return (
    <div className="appContainer">
      <Router>
        <Route exact path="/" component={Landing} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/resources" component={Resources} />
        <Route path="/generate" component={Generate} />
      </Router>
    </div>
  );
}

export default App;
