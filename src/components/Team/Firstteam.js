import React, { Component } from "react";
import appiah from '../Team/photos/Appiah.JPG' 
import jerseygrid from '../Team/photos/0.gif'

// import soccerFirstteamImage1 from "../soccer/photos/soccer1.JPG"

import {

    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link

} from "react-router-dom";


class Firstteam extends Component {
    render() {
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row" style={{ backgroundColor: "#444444", color: "lawngreen" }}>
                                <h3><b>FIRST TEAM</b></h3>
                            </div>

                            <div className="row">
                                {/* <a href="#"> <img src={ soccerFirstteamImage1} alt="angels"
                                class="img-responsive" /></a> */}
                            </div>

                            <div className="row">
                                <nav class="navbar navbar-default" style={{ backgroundColor: '#333333', color: "#fff", }}>
                                    <div class="container-fluid">
                                        <div class="navbar-header">
                                            <Link to="/firstteam" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", }}><b>First Team</b> </Link>
                                            <Link to="#" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", }}><b>Women </b> </Link>
                                            <Link to="/academy" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", }}><b>Academy</b> </Link>

                                        </div>
                                    </div>
                                </nav>
                            </div>




                            <div className="row">
                                <h3><b>GOALKEEPERS</b></h3>
                            </div>
                            <div class="row line"></div>
                            <div className="row">
                            <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>

                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>
                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>

                            </div>


                            <div className="row">
                                <h3><b>DEFENDERS</b></h3>
                            </div>
                            <div class="row line"></div>
                            <div className="row">
                            <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>


                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>

                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>
                            </div>
                            <hr/> 
                            <div className="row">
                            <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>

                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>

                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>

                            </div>


                            <div className="row">
                                <h3><b>MIDFIELDERS</b></h3>
                            </div>
                            <div class="row line"></div>
                            <div className="row">
                            <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>


                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>

                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>
                            </div>



                            <div className="row">
                                <h3><b>FORWARDS</b></h3>
                            </div>
                            <div class="row line"></div>
                            <div className="row">
                            <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>


                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>

                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>
                            </div>


                            <div className="row">
                                <h3><b>ON LOAN</b></h3>
                            </div>
                            <div className="row line"></div>
                            <div className="row">
                            <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>
         

                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>
                                
                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>

{/*                                 
                                 <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link> */}

                            </div>
                            <hr/> 
                        </div>


                        <div className="col-md-3">
                            <div className="row">
                            <img src={jerseygrid} alt="pizza"
                                class="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
 
            </div >
        
                 

        );
    }
}

export default Firstteam;