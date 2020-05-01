import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './SortingVisualizer/HomePage';
import time_Complexity from "./SortingVisualizer/time_Complexity";

function App() {
  return (

      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/time-complexity" component={time_Complexity} />
        </Switch>
      </Router>

  );
}

export default App;
