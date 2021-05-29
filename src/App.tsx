import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './components/g.scss';
import 'github-markdown-css';
import Home from './views/home';
import Doc from './views/Doc';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/doc">
          <Doc />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
