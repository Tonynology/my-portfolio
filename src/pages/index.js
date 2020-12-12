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
        <Route exact path="tonynology.github.io/my-portfolio/">
          <Me user={user} />
        </Route>
        <Route path="tonynology.github.io/my-portfolio/projects">
          <Projects user={user} />
        </Route>
        <Route path="tonynology.github.io/my-portfolio/work">
          <Work user={user} />
        </Route>
        <Route path="tonynology.github.io/my-portfolio/education">
          <Education user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;