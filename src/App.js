
import React from 'react';
import './App.css';
import './soccer/css/bootstrap.min.css';
import Home from "./components/Home"
import Features from './components/Features';
import TransfareNews from './components/TransfareNews';
import Contacts from './components/Legal/Contacts';

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
                      <Link to="/transfarenews"><b>TRANSFARE NEWS</b> </Link>
                      <Link to="/latestnews"><b>LATEST NEWS</b> </Link>
                      <Link to="#"><b>FIRST TEAM</b> </Link>
                      <Link to="#"><b>TICKET NEWS</b> </Link>
                      <Link to="#"><b>MEDIA WATCH</b> </Link>
                      <Link to="#"><b>ANOUNCEMENTS</b> </Link>

                    </div>
                  </div>
                </li>

                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><b>MATCH</b>
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <Link to="/transfarenews"><b>FIXTURES AND RESULTS</b> </Link>
                      <Link to="/latestnews"><b>LEAGUE TABLE</b> </Link>
                    </div>
                  </div>
                </li>


                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><b>TICKETS</b>
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                    <Link to="/latestnews"><b>TICKET AVAILABILITY</b> </Link>
                      <Link to="/transfarenews"><b>MATCH HOSPITALITY</b> </Link>
                      <Link to="/latestnews"><b>HOW TO BUY TICKETS</b> </Link>
                      <Link to="/latestnews"><b>AWAY TRAVEL</b> </Link>
                      <Link to="/latestnews"><b>FUN UPDATE</b> </Link>
                     
                    </div>
                  </div>
                </li>



                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><b>TEAM</b>
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <Link to="/transfarenews"><b>FIRST TEAM</b> </Link>
                      <Link to="/latestnews"><b>ACADEMY</b> </Link>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><b>JOMSCO</b>
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <Link to="#"><b>#</b> </Link>
                      <Link to="#"><b>#</b> </Link>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><b>FANS</b>
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <Link to="#"><b>MEMBERSHIP</b> </Link>
                      <Link to="#"><b>SEA TV</b> </Link>
                      <Link to="#"><b>SOCIAL MEDIA</b> </Link>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><b>SHOP</b>
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <Link to="#"><b>ONLINE STORE</b> </Link>
                      <Link to="#"><b>WHOLESALE PARTNERS</b> </Link>
                    </div>
                  </div>
                </li>

                
                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><b>SHOP</b>
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <Link to="#"><b>ONLINE STORE</b> </Link>
                      <Link to="#"><b>WHOLESALE PARTNERS</b> </Link>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><b>SHOP</b>
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <Link to="#"><b>ONLINE STORE</b> </Link>
                      <Link to="#"><b>WHOLESALE PARTNERS</b> </Link>
                    </div>
                  </div>
                </li>
               
                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><b>ACADEMY</b>
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <Link to="#"><b>HISTORY</b> </Link>
                      <Link to="#"><b>HOUNORS</b> </Link>
                      <Link to="#"><b>COPERATE INFOMATION</b> </Link>
                      <Link to="#"><b> PARTNERS</b> </Link>
                      <Link to="#"><b> FANS EXPERIENSE</b> </Link>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><b>HELP</b>
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <Link to="#"><b>FAQS</b> </Link>
                      <Link to="/contacts"><b>CONTACT</b> </Link>
                      <Link to="#"><b>A - Z</b> </Link>
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
          <Route path="/features" exact component={Features} />
          <Route path="/transfarenews" exact component={TransfareNews} />
          <Route path="/contacts" exact component={Contacts} /> 
             </Switch>


      </div>
    </Router>
  );
}

export default App;
