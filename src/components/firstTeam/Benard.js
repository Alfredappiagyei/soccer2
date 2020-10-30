import React, { Component } from "react";

import appiah from '../firstTeam/photos/Appiah.JPG'
import cosmos from '../firstTeam/photos/cosmos.JPG'
import andrews from '../firstTeam/photos/Andrews.JPG'
import shargaa from '../firstTeam/photos/shargaa.JPG'
import theophilus from '../firstTeam/photos/theophilus.JPG'
import cobby from '../firstTeam/photos/cobby.JPG'
import baaye from '../firstTeam/photos/Baaye.JPG'

import jerseygrid from '../firstTeam/photos/0.gif'

 
import {

    Link
  
  } from "react-router-dom";
  import Footer from "../Footer";

class Benard extends Component {
    render() {
        return (
            <div>
                <div className="benard">
                    <div className="container"  id="playerdetails">
                        <div className="col-md-6 col-xs-12">
                            <h1 style={{ fontSize: "80px", marginBottom: "20px" }}><b>9</b></h1>
                             <h1 style={{ fontSize: "50px" }}><b>Benard</b></h1> 
                            <h1 style={{ fontSize: "80px" }}><b>Kokonu Junior</b></h1>
                            <h2>MIDFIELDER</h2>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <h3>D.O.B <br /> <h2><b>5/10/2005</b></h2></h3>
                            <h3>Place of birth <br /> <h2><b>Adansi Kotwea</b></h2></h3>

                        </div>
                    </div>
                </div >

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9 col-xs-12">
                            <div className="row">
                                <nav className="navbar navbar-default" style={{ backgroundColor: '#333333', color: "#fff", }}>
                                    
                                        <div className="navbar-header">
                                            <Link to="/firstteam" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", background: "lawngreen" }}><b>Benard</b> </Link>
                                            
                                            {/* <Link to="/academy" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", fontStyle: "linethrough" }}><b>Videos</b> </Link> */}

                                        </div>
                                    
                                </nav>
                            </div>
                            <div className="row  stat">
                                <span><h4> <b>Sighned:</b></h4><p>2015</p></span>
                                <span><h4> <b>Appearance:</b></h4> <p>0</p></span>
                                <span><h4> <b>Goals:</b></h4> <p>0</p></span>
                                <span><h4> <b>Honours:</b></h4> <p>Not yet</p></span>
                            </div>
                            <hr />
                            {/* <div className="row" style={{margin:"0px",width:"100%"}}>
                                <h4>\bfvhzdfvgzhjdbjh jbvhbdfhvdfbjvhdbfjfhvgbjvhbjhvvkbdjhvzbdjvhzbdfjhbvdzjlfh
                                shhdfblnfzdvdhfjvjdhf vdhjlfldvbffvnzkjlbdfvdjfvjhfbvlhdfvbjhlbvjhbvjhdbdbh
                                vfhvbfduvydbvdufvgfdvfgvkgvkhvhbdkvblahvblgdvfbdfvgblfhdbljdfhvbldfjvhlbdfvlb
                                hjsabvbalfbvhfbluvhebluvbdflvhlhblhablvfhfbhvfbvlfhvjbvuldfhjladbvljhfdvgbjfh
                                sbuuyfvblfuvbluyfbvlfhjblvufdbuvbfhbvdufbhvjbvlfubdvnvld'fbfuybvlfbfvbfufvblbvuv
                                bshvbhvblhjfvhfdbvljfdhbvjdfhbjdf vlfvlalhahvvbalvkaagcyacfaycvgvcytyascvsah fbfu
                                gvgvggvvcgvhgvchgcghvkhczvhfhvdfjhbvzzdfkvuydvghbvdfhvubvdfybuyvdfbuyvdfbvfddhbv
                                suvgkfgvvufvfd jdf df fdbvdfvbdvfbdzfbvdfbvdxvbz
                                </h4>
                            </div> */}
                            <div className="row" style={{ background: "lawngreen", color: "#fff" }}>
                                <h4><b>Player Stats</b></h4>
                            </div>
                          
                            <div className="row">
                                <div className="col-md-6"></div>
                                <div className="col-md-6" style={{ display: "block", justifyContent: "center", color: "#fff", textAlign: "center", background: "#414141" }}>
                                    <span><p>Benard Kokonu junior</p><b />Soccer Angels Academy</span>
                                </div>
                            </div>

                            <div className="row" id="stats">
                                <div>

                                    {/* <!-- Nav tabs --> */}
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">General</a></li>
                                        <li role="presentation"><a href="#attack" aria-controls="attack" role="tab" data-toggle="tab">Attack</a></li>
                                        <li role="presentation"><a href="#defence" aria-controls="defence" role="tab" data-toggle="tab">Diffence</a></li>
                                        <li role="presentation"><a href="#distribution" aria-controls="distribution" role="tab" data-toggle="tab">Distribution</a></li>
                                        <li role="presentation"><a href="#discipline" aria-controls="discipline" role="tab" data-toggle="tab">Discipline</a></li>
                                    </ul>

                                    {/* <!-- Tab panes --> */}
                                    <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane active" id="home">

                                                <div className="discription"><p>Games Played</p></div>
                                                    <div className="col-md-2" id="figures">0</div>
                                                    <div className="col-md-10">
                                                    <div className="playerchat">
                                                        <div className="progres">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                <span className="sr-only">0% Complete</span>
                                                            </div>
                                                        </div>
                                                    </div>        
                                                </div>                                    
                                                <div className="discription"><p>Minutes Played</p></div>
                                                    <div className="col-md-2" id="figures">0</div>
                                                    <div className="col-md-10">
                                                    <div className="playerchat">
                                                        <div className="progres">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                <span className="sr-only">0% Complete</span>
                                                            </div>
                                                        </div>
                                                    </div>        
                                                </div>
                                                <div className="discription"><p>Starts</p></div>
                                                    <div className="col-md-2" id="figures">0</div>
                                                    <div className="col-md-10">
                                                    <div className="playerchat">
                                                        <div className="progres">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                <span className="sr-only">0% Complete</span>
                                                            </div>
                                                        </div>
                                                    </div>        
                                                </div>
                                                <div className="discription"><p>Substited on</p></div>
                                                    <div className="col-md-2" id="figures">0</div>
                                                    <div className="col-md-10">
                                                    <div className="playerchat">
                                                        <div className="progres">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                <span className="sr-only">0% Complete</span>
                                                            </div>
                                                        </div>
                                                    </div>        
                                                </div>
                                                <div className="discription"><p>Substituted off</p></div>
                                                    <div className="col-md-2" id="figures"> 0</div>
                                                    <div className="col-md-10">
                                                    <div className="playerchat">
                                                        <div className="progres">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                <span className="sr-only">0% Complete</span>
                                                            </div>
                                                        </div>
                                                    </div>        
                                                </div>                                      
                                                </div>                                      {/* home */}





                                                <div role="tabpanel" className="tab-pane" id="attack">
                                                    
                                                    <div className="discription"><p>Goals</p></div>
                                                        <div className="col-md-2" id="figures">0</div>
                                                        <div className="col-md-10">
                                                        <div className="playerchat">
                                                            <div className="progres">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                    <span className="sr-only">0% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>        
                                                    </div>                                    
                                                <div className="discription"><p>Penalties</p></div>
                                                        <div className="col-md-2" id="figures">0</div>
                                                        <div className="col-md-10">
                                                        <div className="playerchat">
                                                            <div className="progres">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                    <span className="sr-only">0% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>        
                                                    </div>
                                                    <div className="discription"><p>Shorts on target</p></div>
                                                        <div className="col-md-2" id="figures">0</div>
                                                        <div className="col-md-10">
                                                        <div className="playerchat">
                                                            <div className="progres">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                    <span className="sr-only">0% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>        
                                                    </div>
                                                    <div className="discription"><p>Shooting acuracy</p></div>
                                                        <div className="col-md-2" id="figures">0</div>
                                                        <div className="col-md-10">
                                                        <div className="playerchat">
                                                            <div className="progres">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                    <span className="sr-only">0% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>        
                                                    </div>
                                                    <div className="discription"><p>Successful crosses</p></div>
                                                        <div className="col-md-2" id="figures">0</div>
                                                        <div className="col-md-10">
                                                        <div className="playerchat">
                                                            <div className="progres">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                    <span className="sr-only">0% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>        
                                                    </div>
                                                    <div className="discription"><p>Assists</p></div>
                                                        <div className="col-md-2" id="figures">0</div>
                                                        <div className="col-md-10">
                                                        <div className="playerchat">
                                                            <div className="progres">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                    <span className="sr-only">0% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>        
                                                    </div>
                                                    <div className="discription"><p>Key passes</p></div>
                                                        <div className="col-md-2" id="figures">0</div>
                                                        <div className="col-md-10">
                                                        <div className="playerchat">
                                                            <div className="progres">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                    <span className="sr-only">0% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>        
                                                    </div>
                                                    <div className="discription"><p>Penalties won</p></div>
                                                        <div className="col-md-2" id="figures">0</div>
                                                        <div className="col-md-10">
                                                        <div className="playerchat">
                                                            <div className="progres">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                    <span className="sr-only">0% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>        
                                                    </div>
                                                    <div className="discription"><p>Offsides</p></div>
                                                        <div className="col-md-2" id="figures">0</div>
                                                        <div className="col-md-10">
                                                        <div className="playerchat">
                                                            <div className="progres">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                    <span className="sr-only">0% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>        
                                                    </div>                                     
                                                </div>{/* attack */}




                                                <div role="tabpanel" className="tab-pane" id="defence">
                                                    
                                                    <div className="discription"><p>Tackles won</p></div>
                                                        <div className="col-md-2" id="figures">0</div>
                                                        <div className="col-md-10">
                                                        <div className="playerchat">
                                                            <div className="progres">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                    <span className="sr-only">0% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>        
                                                    </div>                                    
                                                <div className="discription"><p>Tackles success rate</p></div>
                                                        <div className="col-md-2" id="figures">0</div>
                                                        <div className="col-md-10">
                                                        <div className="playerchat">
                                                            <div className="progres">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                    <span className="sr-only">0% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>        
                                                    </div>
                                                    <div className="discription"><p>Clearances</p></div>
                                                        <div className="col-md-2" id="figures">0</div>
                                                        <div className="col-md-10">
                                                        <div className="playerchat">
                                                            <div className="progres">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                    <span className="sr-only">0% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>        
                                                    </div>
                                                    <div className="discription"><p>Blocks</p></div>
                                                        <div className="col-md-2" id="figures">0</div>
                                                        <div className="col-md-10">
                                                        <div className="playerchat">
                                                            <div className="progres">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                    <span className="sr-only">0% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>        
                                                    </div>
                                                    <div className="discription"><p>Interceptions</p></div>
                                                        <div className="col-md-2" id="figures">0</div>
                                                        <div className="col-md-10">
                                                        <div className="playerchat">
                                                            <div className="progres">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                    <span className="sr-only">0% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>        
                                                    </div>      
                                                </div>     {/* defence */}







                                                <div role="tabpanel" className="tab-pane" id="distribution">
                                                <div className="discription"><p>Successful passes</p></div>
                                                    <div className="col-md-2" id="figures">0</div>
                                                    <div className="col-md-10">
                                                    <div className="playerchat">
                                                        <div className="progres">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                <span className="sr-only">0% Complete</span>
                                                            </div>
                                                        </div>
                                                    </div>        
                                                </div>                                    
                                                <div className="discription"><p>Passing acuracy</p></div>
                                                    <div className="col-md-2" id="figures">0</div>
                                                    <div className="col-md-10">
                                                    <div className="playerchat">
                                                        <div className="progres">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                <span className="sr-only">0% Complete</span>
                                                            </div>
                                                        </div>
                                                    </div>        
                                                </div>
                                                <div className="discription"><p>Clearances</p></div>
                                                    <div className="col-md-2" id="figures">0</div>
                                                    <div className="col-md-10">
                                                    <div className="playerchat">
                                                        <div className="progres">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                <span className="sr-only">0% Complete</span>
                                                            </div>
                                                        </div>
                                                    </div>        
                                                </div>
                                                <div className="discription"><p>Passing acuracy in opponent half(%) </p></div>
                                                    <div className="col-md-2" id="figures">0</div>
                                                    <div className="col-md-10">
                                                    <div className="playerchat">
                                                        <div className="progres">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                <span className="sr-only">0% Complete</span>
                                                            </div>
                                                        </div>
                                                    </div>        
                                                </div>
                                                <div className="discription"><p>Successful dribbles</p></div>
                                                    <div className="col-md-2" id="figures">0</div>
                                                    <div className="col-md-10">
                                                    <div className="playerchat">
                                                        <div className="progres">
                                                            <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                <span className="sr-only">0% Complete</span>
                                                            </div>
                                                        </div>
                                                    </div>        
                                                </div>
                                                </div>   {/* distribution */}











                                                <div role="tabpanel" className="tab-pane" id="discipline">
                                                    
                                                    <div className="discription"><p>Fouls won</p></div>
                                                        <div className="col-md-2" id="figures">0</div>
                                                        <div className="col-md-10">
                                                        <div className="playerchat">
                                                            <div className="progres">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                    <span className="sr-only">0% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>        
                                                    </div>                                    
                                                <div className="discription"><p>Fouls conceeded</p></div>
                                                        <div className="col-md-2" id="figures">0</div>
                                                        <div className="col-md-10">
                                                        <div className="playerchat">
                                                            <div className="progres">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                    <span className="sr-only">0% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>        
                                                    </div>
                                                    <div className="discription"><p>Penalties conceeded</p></div>
                                                        <div className="col-md-2" id="figures">0</div>
                                                        <div className="col-md-10">
                                                        <div className="playerchat">
                                                            <div className="progres">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                    <span className="sr-only">0% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>        
                                                    </div>
                                                    <div className="discription"><p>Yellow cards </p></div>
                                                        <div className="col-md-2" id="figures">0</div>
                                                        <div className="col-md-10">
                                                        <div className="playerchat">
                                                            <div className="progres">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                    <span className="sr-only">0% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>        
                                                    </div>
                                                    <div className="discription"><p>Red cards</p></div>
                                                        <div className="col-md-2" id="figures">0</div>
                                                        <div className="col-md-10">
                                                        <div className="playerchat">
                                                            <div className="progres">
                                                                <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "0%" }}>
                                                                    <span className="sr-only">0% Complete</span>
                                                                </div>
                                                            </div>
                                                        </div>        
                                                    </div>
                                                </div>    {/* discipline */}    
                                    </div>
                                </div>
                            </div>












                        </div>
                        <div className="col-md-3 col-xs-12">
                            <div className="row teammates">
                                <h3>TEAMMATES</h3>
                            </div>
                        <div className="row">
                                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingOne">
                                            <h4 className="panel-title">
                                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    FORWARD
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                            <div className="panel-body">
                                                <ul>                                       
                                                    <li>
                                                    <Link to="/andrews">
                                                         <img src={andrews} alt="andrews" className="img-responsive"/>
                                                        <div className="playerinfo">
                                                            <span>3</span>
                                                            <span id="playername">Andrews</span>
                                                        </div>
                                                        </Link> 
                                                    </li>
                                                  

                                                    <li>
                                                        <Link to="/cobby">
                                                        <img src={cobby}  alt="cobby"  className="img-responsive"></img>
                                                        <div className="playerinfo">
                                                            <span>2</span>
                                                            <span id="playername">Cobby</span>
                                                        </div>
                                                        </Link>
                                                    </li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingTwo">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    MIDFIELD
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                            <div className="panel-body">
                                            <ul>
                                                    <li>
                                                    <Link to="/enock">
                                                        <img src={shargaa}  alt="shargaa"  className="img-responsive"></img>
                                                        <div className="playerinfo">
                                                            <span>3</span>
                                                            <span id="playername">Enock</span>
                                                        </div>
                                                        </Link>
                                                    </li>

                                                    <li>
                                                    <Link to="/cosmos">
                                                    <img src={cosmos}  alt="cosmos"  className="img-responsive"></img>
                                                        <div className="playerinfo">
                                                            <span>2</span>
                                                            <span id="playername">Cosmos</span>
                                                        </div>
                                                        </Link>
                                                    </li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingThree">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    DEFENCE
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                            <div className="panel-body">
                                            <ul>
                                                    <li>
                                                    <Link to="/appiah">
                                                        <img src={appiah}  alt="appiah"  className="img-responsive"></img>
                                                        <div className="playerinfo">
                                                            <span>3</span>
                                                            <span id="playername">Appiah</span>
                                                        </div>
                                                        </Link>
                                                    </li>

                                                    <li>
                                                    <Link to="theophilus">
                                                        <img src={theophilus}  alt="theophilus"  className="img-responsive"></img>
                                                        <div className="playerinfo">
                                                            <span>2</span>
                                                            <span id="playername">Theophilus</span>
                                                        </div>
                                                        </Link>
                                                    </li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    
                                   <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="headingFour">
                                            <h4 className="panel-title">
                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                                    GOALKEEPERS
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                             <div className="panel-body">
                                            <ul>
                                                    <li>
                                                    <Link to="/bismark">
                                                        <img src={baaye}  alt="theophilus"  className="img-responsive"></img>
                                                        <div className="playerinfo">
                                                            <span>16</span>
                                                            <span id="playername">Bismark</span>
                                                        </div>
                                                        </Link>
                                                    </li>  
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>

                            <div className="row">
                                <img src={jerseygrid} alt="pizza" className="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div >
                   <Footer/>
                </div>
            </div>

        );
    }
}

export default Benard;