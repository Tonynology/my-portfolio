import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route exact path="/">
            <Me user={user} />
          </Route>
          <Route path="/projects">
            <Projects user={user} />
          </Route>
          <Route path="/work">
            <Work user={user} />
          </Route>
          <Route path="/education">
            <Education user={user} />
          </Route>
        </BrowserRouter>
      </Switch>
    </Router>
  );
};

export default Pages;