import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";

import './style/postcss.output.css';

import Welcome from './screens/Welcome'
import WelcomeLangs from './screens/WelcomeLangs'
import WelcomeSkills from './screens/WelcomeSkills'
import Word from './screens/Word'
import Settings from './screens/Settings'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="h-full" style={{ padding: 20 }}>
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/word">
            <Word />
          </Route>
          <Route path="/welcome/skills">
            <WelcomeSkills/>
          </Route>
          <Route path="/welcome/langs">
            <WelcomeLangs />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
