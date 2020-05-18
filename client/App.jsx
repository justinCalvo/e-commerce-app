import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import RetrieveSearch from './components/RetrieveSearch.jsx';
import Nav from './components/Nav.jsx';
import Listing from './components/ListingForm.jsx';

const App = () => (
  <div>
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={RetrieveSearch} />
        <Route path="/create" component={Listing} />
      </Switch>
    </Router>
  </div>
);

export default App;
