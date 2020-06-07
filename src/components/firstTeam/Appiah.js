import React, { Component } from "react";

import appiah from '../firstTeam/photos/Appiah.JPG'
import jerseygrid from '../firstTeam/photos/0.gif'
import {

    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from "react-router-dom";

class Appiah extends Component {
    render() {
        return (
            <div>
                <div className="appiah">
                    <div className="container" id="appiahdetails">
                        <div className="col-md-6 col-xs-12">
                            <h1 style={{ fontSize: "80px", marginBottom: "20px" }}><b>34</b></h1>
                            <h1 style={{ fontSize: "50px" }}><b>Daniel</b></h1>
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












                        </div>
                        <div className="col-md-3 col-xs-12">

                            <div className="row">
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingOne">
                                            <h4 class="panel-title">
                                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Collapsible Group Item #1
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                            <div class="panel-body">
                                            <ul>
                                                   <li>
                                                       <a href="#"><img src={appiah} className="img-responsive"></img></a>
                                                       <div className="playerinfo">
                                                           <span>3</span>
                                                           <span id="playername">Appiah</span>
                                                       </div>
                                                   </li>

                                                   <li></li>
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
                                                    Collapsible Group Item #2
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                            <div class="panel-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingThree">
                                            <h4 class="panel-title">
                                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Collapsible Group Item #3
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                            <div class="panel-body">
                                             
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

export default Appiah;