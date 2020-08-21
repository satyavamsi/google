import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="*">
            <Redirect to="/" />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
