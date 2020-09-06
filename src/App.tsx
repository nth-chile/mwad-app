import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Welcome from './screens/Welcome'
import WelcomeLangs from './screens/WelcomeLangs'

const App = () => {
  return (
    <Router>
      <div className="h-full" style={{ padding: 20 }}>
      <Switch>
        <Route path="/welcome/langs">
          <WelcomeLangs />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
