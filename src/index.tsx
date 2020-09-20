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
import SettingsLangs from './screens/SettingsLangs'
import RootRoute from './cpts/RootRoute'

import * as serviceWorker from './serviceWorker';

const App = () => {
  return (
    <div className="h-full" style={{ padding: 20 }}>
      <Router>
        <Switch>
          <Route exact path="/" component={RootRoute} />
          <Route path="/settings/langs" component={SettingsLangs} />
          <Route path="/settings" component={Settings} />
          <Route path="/word" component={Word} />
          <Route path="/welcome/skills" component={WelcomeSkills} />
          <Route path="/welcome/langs" component={WelcomeLangs} />
          <Route path="/welcome" component={Welcome} />
        </Switch>
      </Router>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
