
import React from 'react';
import './App.css';
import './soccer/css/bootstrap.min.css';
import Home from "./components/Home"
import Features from './components/Features';
import TransfareNews from './components/News/TransfareNews';
import Contacts from './components/Legal/Contacts';


import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";

import Firstteam from './components/Team/Secdiv';
import Academy from './components/Team/Uten';
import SocialMedia from './components/Fans/SocialMedia';
import SeatvGo from './components/Fans/SeatvGo';
import Atoz from './components/Legal/Atoz';
import History from './components/Academy/History';
import Timeline from './components/Academy/Timeline';
import logo from './soccer/photos/soccerangelslogo.JPG'
import Anouncement from './components/News/Anouncement';


// Firstteam
import Bismark from './components/firstTeam/Bismark';
import Appiah from './components/firstTeam/Appiah';
import Cosmos from './components/firstTeam/Cosmos';
import Elvis from './components/firstTeam/Elvis';
import Enock from './components/firstTeam/Enock';
import Isaac from './components/firstTeam/Isaac';
import Andrews from './components/firstTeam/Andrews';
import Richmond from './components/firstTeam/Richmond';
import Theophilus from './components/firstTeam/Theophilus';
import Ketu from './components/firstTeam/Ketu';
import Benard from './components/firstTeam/Benard';
import Bright from './components/firstTeam/Bright';
import Jonathan from './components/firstTeam/Jonathan';


import Uten from './components/Team/Uten';
import Uthirdteen from './components/Team/Uthidteen';
import Secdiv from './components/Team/Secdiv';
import Thirdiv from './components/Team/Thirdiv';
import Useventeen from './components/Team/Useventeen';

// FIXTURES
import SecondDivision from './components/Fixtures/Secdivision';
















function App() {
  return (
    <Router> 
      <div>

        <nav class="navbar navbar-default" style={{position:"relative", width:"100%",marginBottom:"0px", left:"0px", border:"none",borderRadius:"none", zIndex:"2",  backgroundColor: '#444444', color: "#fff", alignContent:"center" }}>
          <div class="container-fluid">

            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <div> 
            <Link to="/">
            <img src={logo} alt="soccerangelslogo" id="logo"  className="img-responsive" height="100px" width="100px" style={{borderRadius:"50%"}} /> 
            </Link>      
              </div>
             
            </div>


            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li ><button class="dropbtn"><Link to="/"><p>HOME</p></Link></button></li>
                <li><button class="dropbtn"><Link to="/features"><p>FEATURES</p></Link></button></li>
                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><p>NEWS</p>
                    </button>
                    <div class="dropdown-content">
                      <Link to="/transfarenews"><p>TEAM NEWS</p> </Link>
                      {/* <Link to="#"><p>FIRST TEAM#</p> </Link> */}
                      <Link to="/anouncement"><p>ANOUNCEMENTS</p> </Link>

                    </div>
                  </div>
                </li>

                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><p>FIXTURES</p>
                    </button>
                    <div class="dropdown-content">
                      <Link to="/secondivision"><p>2ND DIVISION</p></Link>  
                       {/* <Link to="/under23"><p>U10S</p> </Link>
                      <Link to="/under18"><p>U13S</p> </Link>
                      <Link to="/under18"><p>U17S</p> </Link>
                      <Link to="/under18"><p>2ND DIVISION</p> </Link>
                      <Link to="/under18"><p>3RD DIVISION</p> </Link>
                      <Link to="#"><p>LEAGUE TABLE#</p> </Link>  */}
                    </div>
                  </div>
                </li>

                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><p>TEAM</p>
                    </button>
                    <div class="dropdown-content">
                      {/* <Link to="/under10"><p>U10</p> </Link>
                      <Link to="/under13"><p>U13</p> </Link>
                      <Link to="/under17"><p>U17</p> </Link> */}
                      <Link to="/secondiv"><p>2ND DIVISION</p> </Link>
                      {/* <Link to="/thirdiv"><p>2ND DIVISION</p> </Link> */}
                    </div>
                  </div>
                </li>

               
                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><p>FANS</p>
                    </button>
                    <div class="dropdown-content">
                      <Link to="/seatvgo"><p>SAFA TV</p> </Link>
                      <Link to="/socialmedia"><p>SOCIAL MEDIA</p> </Link>
                    </div>
                  </div>
                </li>

               
                <li>
                  <div class="dropdown">
                    <button class="dropbtn"><p>ACADEMY</p>
                    </button>
                    <div class="dropdown-content">
                      <Link to="/history"><p>HISTORY</p> </Link>
                      {/* <Link to="#"><p>HOUNORS#</p></Link> */}
                    </div>
                  </div>
                </li>

                <li>
                  <div class="dropdown">
                  <button class="dropbtn"><p>HELP</p>
                    </button>
                    
                    <div class="dropdown-content">
                      {/* <Link to="#"><p>FAQS#</p> </Link> */}
                      <Link to="/contacts"><p>CONTACT </p></Link>
                      {/* <Link to="/atoz"><p>A - Z#</p> </Link> */}
                    </div>
                  </div>
                </li>

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
          <Route path="/under10" exact component={Uten} /> 
          <Route path="/under13" exact component={Uthirdteen} /> 
          <Route path="/under17" exact component={Useventeen} /> 
          <Route path="/secondiv" exact component={Secdiv} /> 
          <Route path="/thirdiv" exact component={Thirdiv} /> 
          <Route path="/history" exact component={History} /> 
          <Route path="/timeline" exact component={Timeline } /> 
          <Route path="/atoz" exact component={Atoz} /> 
          <Route path="/anouncement" exact component={Anouncement} /> 
          
          {/* FIXTURES and RESULTS */}           
          <Route path="/secondivision" exact component={SecondDivision} /> 
        

          

          {/* Second division */}
          <Route path="/bismark" exact component={Bismark} /> 
          <Route path="/appiah" exact component={Appiah} /> 
          <Route path="/cosmos" exact component={Cosmos} /> 
          <Route path="/elvis" exact component={Elvis} /> 
          <Route path="/enock" exact component={Enock} /> 
          <Route path="/isaac" exact component={Isaac} /> 
          <Route path="/andrews" exact component={Andrews} /> 
          <Route path="/richmond" exact component={Richmond} /> 
          <Route path="/theophilus" exact component={Theophilus} /> 
          <Route path="/ketu" exact component={Ketu} /> 
          <Route path="/benard" exact component={Benard} /> 
          <Route path="/bright" exact component={Bright} /> 
          <Route path="/jonathan" exact component={Jonathan} /> 
          
          
              

             </Switch>


      </div>
      
    </Router>
    
  );
}

export default App;
