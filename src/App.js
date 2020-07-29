import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Submissionsform from './components/Submissions-form.js';
import Homepage from './components/Homepage.js';
import Pending from './components/Pending';
import Logo from './SNSW-logos.png'
import View from './components/View'
import TopProjects from './components/TopProjects'

function App() {

  return (
    <Container>
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <img src={Logo} width="auto" height="50px" alt="NSW Government and Service NSW Logo"></img>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link text-body font-weight-bold" href="/">Home</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-body font-weight-bold" href="/project/submission">Submit a Project Proposal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-body font-weight-bold" href="https://mybusiness.service.nsw.gov.au/">Vote Now</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-body font-weight-bold" href="/pending">Admin</a>
            </li>
          </ul>
        </nav>

      <Router>

        <Switch>
          <Route path="/project/submission">
            <Submissionsform />
          </Route>
          <Route path="/pending">
            <Pending />
          </Route>
          <Route path="/view">
            <View />
          </Route>
          <Route path="/topprojects">
            <TopProjects />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </Container >
  );
}

export default App;
