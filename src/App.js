import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Submissionsform from './components/Submissions-form.js';
import Homepage from './components/Homepage.js';

function App() {
  return (
    <Container>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <ul className="navbar-nav ">
        <img src="./public/SNSW-logos.png" alt="NSW Government and Service NSW Logo"></img>
          <li className="nav-item">
            <a className="nav-link text-body font-weight-bold" href="#">Home</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link text-body font-weight-bold" href="https://www.service.nsw.gov.au/services">Browse services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-body font-weight-bold" href="https://mybusiness.service.nsw.gov.au/">Business</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link text-body font-weight-bold" href="https://www.service.nsw.gov.au/service-centre">Find locations</a>
          </li>
        </ul>
      </nav>
      
      <Router>

        <Switch>
          <Route path="/project/submission">
            <Submissionsform />
          </Route>
          <Route path="/project">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
