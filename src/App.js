
import React from 'react';
import './App.css';
import './Firstteam.css'
import './soccer/css/bootstrap.min.css';
import Home from "./components/Home";
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
import teamlogo from "./soccer/photos/teamLogo.jpg";
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
// Team
import Uten from './components/Team/Uten';
import Uthirdteen from './components/Team/Uthidteen';
import Secdiv from './components/Team/Secdiv';
import Thirdiv from './components/Team/Thirdiv';
import Useventeen from './components/Team/Useventeen';
// FIXTURES
import SecondDivision from './components/Fixtures/Secdivision';
// FullDetails
import BoahDetails from './FullDetails/TransfareDetails/Preciousboahdetails';
import JuvenileScreening from './FullDetails/LatestNewsDetails/JuvinalleRegister';
// Authentications
import Register from './Authentication/Register';

function App() {
  return (
    <Router> 
      <div className="barnav">
        <nav className="navbar navbar-default" >
          

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                </button>
               <div> 
              <Link to="/">
             <img src={teamlogo} alt="soccerangelslogo" id="logo"  className="img-responsive" height="100px" width="100px" style={{borderRadius:"50%"}} /> 
              <h3 id="textlogo">SAFA</h3>
             </Link>      
              </div>            
            </div>


            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                  <li >
                  <button className="dropbtn"><Link to="/" style={{textDecoration:"none",color:"#fff" }}><p>HOME</p></Link></button>
                  </li>
                
                  <li>
                  <div className="dropdown">
                    <button className="dropbtn"><p>NEWS</p>
                    </button>
                    <div className="dropdown-content">
                      <ul>
                        <li> <Link to="/transfarenews" style={{textDecoration:"none"}}>TEAM NEWS </Link></li>
                        <li> <Link to="/anouncement" style={{textDecoration:"none"}}>ANOUNCEMENTS </Link></li>
                        {/* <li>  <Link to="#"><p>FIRST TEAM#</p> </Link> </li> */}
                      </ul>
                    </div>
                  </div>
                </li>
          
                <li>
                  <div className="dropdown">
                    <button className="dropbtn"><p>FIXTURES</p>
                    </button>
                    <div className="dropdown-content">
                      <ul>
                        <li> <Link to="/secondivision"  style={{textDecoration:"none"}}>2ND DIVISION</Link></li>
                        {/* <li>  <Link to="/under23"  style={{textDecoration:"none"}}><p>U10S</p> </Link></li>
                        <li> <Link to="/under18"  style={{textDecoration:"none"}}><p>U13S</p> </Link></li>
                        <li> <Link to="/under18"  style={{textDecoration:"none"}}><p>U17S</p> </Link></li>
                        <li>  <Link to="/under18"  style={{textDecoration:"none"}}><p>2ND DIVISION</p> </Link></li>
                        <li> <Link to="/under18"  style={{textDecoration:"none"}}><p>3RD DIVISION</p> </Link></li>
                        <li> <Link to="#"  style={{textDecoration:"none"}}><p>LEAGUE TABLE#</p> </Link>  </li> */}
                      </ul>
                     
                    </div>
                  </div>
                </li>
                
          
                <li>
                  <div className="dropdown">
                    <button className="dropbtn"><p>TEAM</p>
                    </button>
                    <div className="dropdown-content">
                      <ul>
                        <li> <Link to="/secondiv"  style={{textDecoration:"none"}}>2ND DIVISION </Link></li>
                        {/* <li> <Link to="/under10"><p>U10</p> </Link></li>
                        <li> <Link to="/under13"><p>U13</p> </Link></li>
                        <li> <Link to="/under17"><p>U17</p> </Link></li>
                        <li> <Link to="/thirdiv"><p>2ND DIVISION</p> </Link> </li> */}
                      </ul>                  
                      
                    </div>
                  </div>
                </li>
              
            
                <li>
                  <div className="dropdown">
                    <button className="dropbtn"><p>FANS</p>
                    </button>
                    <div className="dropdown-content">
                      <ul>
                        <li> <Link to="/seatvgo"  style={{textDecoration:"none"}}>SAFA TV</Link></li>
                        <li>  <Link to="/socialmedia"  style={{textDecoration:"none"}}>SOCIAL MEDIA</Link></li>
                      </ul>                
                    </div>
                  </div>
                </li>
              
            
                <li>
                  <div className="dropdown">
                    <button className="dropbtn"><p>ACADEMY</p>
                    </button>
                    <div className="dropdown-content">
                      <ul>
                        <li> <Link to="/history"  style={{textDecoration:"none"}}>HISTORY</Link></li>
                        {/* <li> <Link to="#"  style={{textDecoration:"none"}}><p>HOUNORS#</p></Link> </li> */}
                      </ul>
                    </div>
                  </div>
                </li>
              
                       
                <li>
                  <div className="dropdown">
                  <button className="dropbtn"><p>HELP</p>
                    </button>                  
                    <div className="dropdown-content">
                      <ul>
                        <li><Link to="/contacts"  style={{textDecoration:"none"}}>CONTACT</Link></li>
                        {/* <li><Link to="#"  style={{textDecoration:"none"}}><p>FAQS#</p> </Link></li>
                        <li> <Link to="/atoz"  style={{textDecoration:"none"}}><p>A - Z#</p> </Link> </li> */}
                      </ul>
                            
                    </div>
                  </div>
                </li>
              </ul>          
            </div>
          
        </nav>
        
        <Switch>
          <Route path="/" exact component={Home} />
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

          {/* --------------------------
          FullDetais 
          ------------------------------*/}
          {/* transfare */}
             <Route path="/boahdetails" exact component={BoahDetails} />       
          {/* latestNews */}
          <Route path="/juvinileregister" exact component={JuvenileScreening} /> 
          {/* Authentications */}
          <Route path="/register" exact component={Register} /> 
             </Switch>
      </div>      
    </Router>   
  );
}

export default App;
