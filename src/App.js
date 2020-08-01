
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

import Firstteam from './components/Team/Firstteam';
import Academy from './components/Team/Academy';
import SocialMedia from './components/Fans/SocialMedia';
import SeatvGo from './components/Fans/SeatvGo';
import Under23 from './components/Match/Under23';
import Under18 from './components/Match/Under18';
import Atoz from './components/Legal/Atoz';
import History from './components/Academy/History';
import History2 from './components/Academy/history2';
import logo from './soccer/photos/soccerangelslogo.JPG'


// Firstteam
import Appiah from './components/firstTeam/Appiah';
import Cosmos from './components/firstTeam/Cosmos';
import Elvis from './components/firstTeam/Elvis';
import Enock from './components/firstTeam/Enock';
import Cobby from './components/firstTeam/Cobby';
import Andrews from './components/firstTeam/Andrews';
import Richmond from './components/firstTeam/Richmond';
import Theophilus from './components/firstTeam/Theophilus';




function App() {
  return (
    <Router> 
      <div>

        <nav class="navbar navbar-default" style={{position:"relative",top:"0px", left:"0px", zIndex:"2",  backgroundColor: '#444444', color: "#fff", alignContent:"center" }}>
          <div class="container-fluid">

            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <img src={logo}  className="img-responsive" height="100px" width="100px" style={{borderRadius:"50%"}} />
            </div>


            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li> <button class="dropbtn"><Link to="/"><b>HOME</b></Link></button></li>
                <li> <button class="dropbtn"><Link to="/features"><b>FEATURES</b></Link></button></li>
                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><b>NEWS</b>
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <Link to="/transfarenews"><b>TRANSFARE NEWS</b> </Link>
                      <Link to="/#"><b>LATEST NEWS#</b> </Link>
                      <Link to="#"><b>FIRST TEAM#</b> </Link>
                      <Link to="#"><b>ANOUNCEMENTS#</b> </Link>

                    </div>
                  </div>
                </li>

                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><b>MATCH</b>
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <Link to="/transfarenews"><b>FIXTURES AND RESULTS#</b> </Link>  
                      <Link to="/under23"><b>U23S</b> </Link>
                      <Link to="/under18"><b>U18S</b> </Link>
                      <Link to="#"><b>LEAGUE TABLE#</b> </Link>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><b>TEAM</b>
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <Link to="/firstteam"><b>FIRST TEAM</b> </Link>
                      <Link to="/academy"><b>ACADEMY</b> </Link>
                    </div>
                  </div>
                </li>

               
                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><b>FANS</b>
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <Link to="/seatvgo"><b>SEA TV</b> </Link>
                      <Link to="/socialmedia"><b>SOCIAL MEDIA</b> </Link>
                    </div>
                  </div>
                </li>

               
                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><b>ACADEMY</b>
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <Link to="/history"><b>HISTORY#</b> </Link>
                      <Link to="#"><b>HOUNORS#</b> </Link>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><b>HELP</b>
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                      <Link to="#"><b>FAQS#</b> </Link>
                      <Link to="/contacts"><b>CONTACT</b> </Link>
                      <Link to="/atoz"><b>A - Z#</b> </Link>
                    </div>
                  </div>
                </li>

              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li><Link to="/" className="navbar-brand" id="logo"><b>SOCCER ANGELS.COM</b> </Link> </li>

              </ul>
            </div>
          </div>
        </nav>




        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/features" exact component={Features} />
          <Route path="/transfarenews" exact component={TransfareNews} />
          <Route path="/contacts" exact component={Contacts} /> 
          <Route path="/firstteam" exact component={Firstteam} /> 
          <Route path="/academy" exact component={Academy} /> 
          <Route path="/socialmedia" exact component={SocialMedia} /> 
          <Route path="/seatvgo" exact component={SeatvGo} /> 
          <Route path="/under23" exact component={Under23} /> 
          <Route path="/under18" exact component={Under18} /> 
          <Route path="/history" exact component={History} /> 
          <Route path="/history2" exact component={History2} /> 
          <Route path="/atoz" exact component={Atoz} /> 
          {/* firstteam */}
          <Route path="/appiah" exact component={Appiah} /> 
          <Route path="/cosmos" exact component={Cosmos} /> 
          <Route path="/elvis" exact component={Elvis} /> 
          <Route path="/enock" exact component={Enock} /> 
          <Route path="/cobby" exact component={Cobby} /> 
          <Route path="/andrews" exact component={Andrews} /> 
          <Route path="/richmond" exact component={Richmond} /> 
          <Route path="/theophilus" exact component={Theophilus} /> 
          
          
              

             </Switch>


      </div>
    </Router>
    
  );
}

export default App;
