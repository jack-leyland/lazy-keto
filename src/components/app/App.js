import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Recipes,
  Resources,
  Generate,
  Landing,
  Footer,
  Header,
} from '../index';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={WithHeader} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

function WithHeader() {
  return (
    <div>
      <Header />
      <Route path="/recipes" component={Recipes} />
      <Route path="/resources" component={Resources} />
      <Route path="/generate" component={Generate} />
    </div>
  );
}

export default App;
