import React, { Component } from "react";

import appiah from '../firstTeam/photos/Appiah.JPG'
import cosmos from '../firstTeam/photos/cosmos.JPG'
import elvis from '../firstTeam/photos/Elvis.JPG'
import andrews from '../firstTeam/photos/Andrews.JPG'
import shargaa from '../firstTeam/photos/shargaa.JPG'
import theophilus from '../firstTeam/photos/theophilus.JPG'
import cobby from '../firstTeam/photos/cobby.JPG'
import richmond from '../firstTeam/photos/Richmond.JPG'


import jerseygrid from '../firstTeam/photos/0.gif'
import {

    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from "react-router-dom";

class Elvis extends Component {
    render() {
        return (
            <div>
                <div className="elvis">
                    <div className="container" id="elvisdetails">
                        <div className="col-md-6 col-xs-12">
                            <h1 style={{ fontSize: "80px", marginBottom: "20px" }}><b>34</b></h1>
                            <h1 style={{ fontSize: "50px" }}><b>Elvis</b></h1>
                            <h1 style={{ fontSize: "80px" }}><b>Appiah</b></h1>
                            <h2>DEFENDER</h2>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <h3>D.O.B <br /> <h2><b>dkfbjn</b></h2></h3>
                            <h3>Place of birth <br /> <h2><b>Assin Dompim</b></h2></h3>

                        </div>
                    </div>
                </div >

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9 col-xs-12">
                            <div className="row">
                                <nav class="navbar navbar-default" style={{ backgroundColor: '#333333', color: "#fff", }}>
                                    <div class="container-fluid">
                                        <div class="navbar-header">
                                            <Link to="/firstteam" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", background: "lawngreen" }}><b>Daniel Appiah</b> </Link>
                                            <Link to="#" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", }}><b>Stats </b> </Link>
                                            <Link to="/academy" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", fontStyle: "linethrough" }}><b>Videos</b> </Link>

                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="row  stat">
                                <span><h4> <b>Sighned:</b></h4><p>2015</p></span>
                                <span><h4> <b>Appearance:</b></h4> <p>23</p></span>
                                <span><h4> <b>Goals:</b></h4> <p>2</p></span>
                                <span><h4> <b>Honours:</b></h4> <p>dfzjbzvdjf</p></span>
                            </div>
                            <hr />
                            <div className="row">
                                <h4>\bfvhzdfvgzhjdbjh jbvhbdfhvdfbjvhdbfjfhvgbjvhbjhvvkbdjhvzbdjvhzbdfjhbvdzjlfh
                                shhdfblnfzdvdhfjvjdhf vdhjlfldvbffvnzkjlbdfvdjfvjhfbvlhdfvbjhlbvjhbvjhdbdbh
                                vfhvbfduvydbvdufvgfdvfgvkgvkhvhbdkvblahvblgdvfbdfvgblfhdbljdfhvbldfjvhlbdfvlb
                                hjsabvbalfbvhfbluvhebluvbdflvhlhblhablvfhfbhvfbvlfhvjbvuldfhjladbvljhfdvgbjfh
                                sbuuyfvblfuvbluyfbvlfhjblvufdbuvbfhbvdufbhvjbvlfubdvnvld'fbfuybvlfbfvbfufvblbvuv
                                bshvbhvblhjfvhfdbvljfdhbvjdfhbjdf vlfvlalhahvvbalvkaagcyacfaycvgvcytyascvsah fbfu
                                gvgvggvvcgvhgvchgcghvkhczvhfhvdfjhbvzzdfkvuydvghbvdfhvubvdfybuyvdfbuyvdfbvfddhbv
                                suvgkfgvvufvfd jdf df fdbvdfvbdvfbdzfbvdfbvdxvbz
                                </h4>
                            </div>
                            <div className="row" style={{ background: "lawngreen", color: "#fff" }}>
                                <h4><b>Player Stats</b></h4>
                            </div>
                            <div className="row">
                                <nav class="navbar navbar-default">
                                    <div class="container-fluid">
                                        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                                        <div class="navbar-header">
                                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                                <span class="sr-only">Toggle navigation</span>
                                                <span class="icon-bar"></span>
                                                <span class="icon-bar"></span>
                                                <span class="icon-bar"></span>
                                            </button>
                                            <a class="navbar-brand" href="#">General</a>
                                            <a class="navbar-brand" href="#">Attack</a>
                                            <a class="navbar-brand" href="#">Defence</a>
                                            <a class="navbar-brand" href="#">Distribution</a>
                                            <a class="navbar-brand" href="#">Discipline</a>
                                        </div>
                                        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                                    </div>
                                </nav>
                            </div>
                            <div className="row">
                                <div className="col-md-6"></div>
                                <div className="col-md-6" style={{ display: "block", justifyContent: "center", color: "#fff", textAlign: "center", background: "#414141" }}>
                                    <span><p>Daniel Appiah</p><b />Soccer Angels Academy</span>
                                </div>
                            </div>

                            <div className="row" id="stats">
                                <div>

                                    {/* <!-- Nav tabs --> */}
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">General</a></li>
                                        <li role="presentation"><a href="#attack" aria-controls="attack" role="tab" data-toggle="tab">Attack</a></li>
                                        <li role="presentation"><a href="#defence" aria-controls="defence" role="tab" data-toggle="tab">Diffence</a></li>
                                        <li role="presentation"><a href="#distribution" aria-controls="distribution" role="tab" data-toggle="tab">Distribution</a></li>
                                        <li role="presentation"><a href="#discipline" aria-controls="discipline" role="tab" data-toggle="tab">Discipline</a></li>
                                    </ul>

                                    {/* <!-- Tab panes --> */}
                                    <div class="tab-content">
                                        <div role="tabpanel" class="tab-pane active" id="home">

                                        <div className="discription"><p>Games Played</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>                                    
                                       <div className="discription"><p>Minutes Played</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>
                                        <div className="discription"><p>Starts</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>
                                        <div className="discription"><p>Substited on</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>
                                        <div className="discription"><p>Substituted off</p></div>
                                            <div className="col-md-2" id="figures"> 10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>                                      
                                   </div>                                      {/* home */}







                                        <div role="tabpanel" class="tab-pane" id="attack">
                                            
                                        <div className="discription"><p>Goals</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>                                    
                                       <div className="discription"><p>Penalties</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>
                                        <div className="discription"><p>Shorts on target</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>
                                        <div className="discription"><p>Shooting acuracy</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>
                                        <div className="discription"><p>Successful crosses</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>
                                        <div className="discription"><p>Assists</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>
                                        <div className="discription"><p>Key passes</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>
                                        <div className="discription"><p>Penalties won</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>
                                        <div className="discription"><p>Offsides</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>                                     
                                 </div>{/* attack */}



                                        <div role="tabpanel" class="tab-pane" id="defence">
                                            
                                        <div className="discription"><p>Tackles won</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>                                    
                                       <div className="discription"><p>Tackles success rate</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>
                                        <div className="discription"><p>Clearances</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>
                                        <div className="discription"><p>Blocks</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>
                                        <div className="discription"><p>Interceptions</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>      
                                     </div>     {/* defence */}

                                   



                                        <div role="tabpanel" class="tab-pane" id="distribution">
                                        <div className="discription"><p>Successful passes</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>                                    
                                       <div className="discription"><p>Passing acuracy</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>
                                        <div className="discription"><p>Clearances</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>
                                        <div className="discription"><p>Passing acuracy in opponent half(%) </p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                          </div>
                                        <div className="discription"><p>Successful dribbles</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>
                                     </div>   {/* distribution */}
                                  





                                        <div role="tabpanel" class="tab-pane" id="discipline">
                                            
                                        <div className="discription"><p>Fouls won</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>                                    
                                       <div className="discription"><p>Fouls conceeded</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>
                                        <div className="discription"><p>Penalties conceeded</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>
                                        <div className="discription"><p>Yellow cards </p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
                                                    </div>
                                                </div>
                                              </div>        
                                        </div>
                                        <div className="discription"><p>Red cards</p></div>
                                            <div className="col-md-2" id="figures">10</div>
                                             <div className="col-md-10">
                                              <div className="playerchat">
                                                <div class="progres">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "20%" }}>
                                                        <span class="sr-only">60% Complete</span>
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

                            <div className="row">
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingOne">
                                            <h4 class="panel-title">
                                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    FORWARD
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                            <div class="panel-body">
                                                <ul>
                                                    <li>
                                                        <a href="#"><img src={andrews} className="img-responsive"></img></a>
                                                        <div className="playerinfo">
                                                            <span>3</span>
                                                            <span id="playername">Andrews</span>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <a href="#"><img src={cobby} className="img-responsive"></img></a>
                                                        <div className="playerinfo">
                                                            <span>2</span>
                                                            <span id="playername">Cobby</span>
                                                        </div>
                                                    </li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingTwo">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    MIDFIELD
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                            <div class="panel-body">
                                            <ul>
                                                    <li>
                                                        <a href="#"><img src={shargaa} className="img-responsive"></img></a>
                                                        <div className="playerinfo">
                                                            <span>3</span>
                                                            <span id="playername">Enock</span>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <a href="#"><img src={cosmos} className="img-responsive"></img></a>
                                                        <div className="playerinfo">
                                                            <span>2</span>
                                                            <span id="playername">Cosmos</span>
                                                        </div>
                                                    </li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingThree">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    DEFENCE
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                            <div class="panel-body">
                                            <ul>
                                                    <li>
                                                        <a href="#"><img src={appiah} className="img-responsive"></img></a>
                                                        <div className="playerinfo">
                                                            <span>3</span>
                                                            <span id="playername">Appiah</span>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <a href="#"><img src={theophilus} className="img-responsive"></img></a>
                                                        <div className="playerinfo">
                                                            <span>2</span>
                                                            <span id="playername">Theophilus</span>
                                                        </div>
                                                    </li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingThree">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    GOALKEEPERS
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                            <div class="panel-body">
                                            <ul>
                                                    <li></li>  
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <img src={jerseygrid} alt="pizza" class="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Elvis;