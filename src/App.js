
import React from 'react';
import './App.css';
import './soccer/css/bootstrap.min.css';
import Home from "./components/Home"
import Features from './components/Features';
import TransfareNews from './components/TransfareNews';

import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";







function App() {



  return (
    <Router>
      <div>

        <nav class="navbar navbar-home">
          <div class="container-fluid">

            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>

              <a className="navbar-brand" href="#">  <Link to="/" className="domain_header"><b>SOCCER ANGELS.COM</b> </Link></a>

            </div>


            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li> <Link to="/" class="dropbtn"><b>Home</b> </Link></li>

                <li><Link to="/features" class="dropbtn"><b>Features</b> </Link></li>
                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><b>News</b>
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <Link to="/transfarenews"><b>TransfareNews</b> </Link>
                      <Link to="/latestnews"><b>Latestnews</b> </Link>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><b>News</b>
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </li>


              </ul>
              <ul class="nav navbar-nav navbar-right">

              </ul>
            </div>
          </div>
        </nav>




        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/features" component={Features} />
          <Route path="/transfarenews" component={TransfareNews} />
          {/* <Route path="/login" component={Login} /> */} */}
             </Switch>


      </div>
    </Router>
  );
}

export default App;
