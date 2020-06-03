import React, { Component } from "react";
import appiah from '../Team/photos/Appiah.JPG'
import richmond from '../Team/photos/richmond.JPG'
import ketu from '../Team/photos/Ketu.JPG'
import elvis from '../Team/photos/Elvis.JPG'
import theophilus from '../Team/photos/theophilus.JPG'

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
                            <div class="row" id="line"></div>
                            <div className="row">
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                    <div className="col-md-4">sdfgh</div>
                                    <div className="col-md-2">4</div>
                                    <div className="col-md-6">dfghjkjhgfdfgh</div>
                                </div>

                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                    <div className="col-md-4">fghjj</div>
                                    <div className="col-md-2">4</div>
                                    <div className="col-md-6">cvbnmncvbncvb</div>
                                </div>
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                    <div className="col-md-4">fghj</div>
                                    <div className="col-md-2">4</div>
                                    <div className="col-md-6">sdfghjhgfddfg</div>
                                </div>
                            </div>


                            <div className="row">
                                <h3><b>DEFENDERS</b></h3>
                            </div>
                            <div class="row" id="line"></div>
                            <div className="row">
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                    <div className="col-md-8"><a href="#"> <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" /></a></div>
                                    <div className="col-md-1"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>

                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                    <div className="col-md-8"><img src={richmond} alt="pizza"  class="img-responsive" width="100%" height="200px" /></div>
                                    <div className="col-md-1"><b>13</b></div>
                                    <div className="col-md-3"><b>Richmond Sarfo</b></div>
                                </div>
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                    <div className="col-md-8"><img src={ketu} alt="pizza"  class="img-responsive" width="100%" height="200px" /></div>
                                    <div className="col-md-1"><b>24</b></div>
                                    <div className="col-md-3"><b>Alex Ketu</b></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                    <div className="col-md-8"><a href="#"> <img src={elvis} alt="pizza"  class="img-responsive" width="100%" height="200px" /></a></div>
                                    <div className="col-md-1"><b>66</b></div>
                                    <div className="col-md-3"><b>Elvis Esumang</b></div>
                                </div>

                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                    <div className="col-md-8"><img src={theophilus} alt="pizza"  class="img-responsive" width="100%" height="200px" /></div>
                                    <div className="col-md-1"><b>13</b></div>
                                    <div className="col-md-3"><b>Theophilus Tsiboah</b></div>
                                </div>
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                    <div className="col-md-8"><img src={ketu} alt="pizza"  class="img-responsive" width="100%" height="200px" /></div>
                                    <div className="col-md-1"><b>24</b></div>
                                    <div className="col-md-3"><b>Alex Ketu</b></div>
                                </div>
                            </div>


                            <div className="row">
                                <h3><b>MIDFIELDERS</b></h3>
                            </div>
                            <div class="row" id="line"></div>
                            <div className="row">
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                    <div className="col-md-4">sdfgh</div>
                                    <div className="col-md-2">4</div>
                                    <div className="col-md-6">dfghjkjhgfdfgh</div>
                                </div>

                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                    <div className="col-md-4">fghjj</div>
                                    <div className="col-md-2">4</div>
                                    <div className="col-md-6">cvbnmncvbncvb</div>
                                </div>
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                    <div className="col-md-4">fghj</div>
                                    <div className="col-md-2">4</div>
                                    <div className="col-md-6">sdfghjhgfddfg</div>
                                </div>
                            </div>



                            <div className="row">
                                <h3><b>FORWARDS</b></h3>
                            </div>
                            <div class="row" id="line"></div>
                            <div className="row">
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                    <div className="col-md-4">sdfgh</div>
                                    <div className="col-md-2">4</div>
                                    <div className="col-md-6">dfghjkjhgfdfgh</div>
                                </div>

                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                    <div className="col-md-4">fghjj</div>
                                    <div className="col-md-2">4</div>
                                    <div className="col-md-6">cvbnmncvbncvb</div>
                                </div>
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                    <div className="col-md-4">fghj</div>
                                    <div className="col-md-2">4</div>
                                    <div className="col-md-6">sdfghjhgfddfg</div>
                                </div>
                            </div>


                            <div className="row">
                                <h3><b>ON LOAN</b></h3>
                            </div>
                            <div class="row" id="line"></div>
                            <div className="row">
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                    <div className="col-md-4">sdfgh</div>
                                    <div className="col-md-2">4</div>
                                    <div className="col-md-6">dfghjkjhgfdfgh</div>
                                </div>

                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                    <div className="col-md-4">fghjj</div>
                                    <div className="col-md-2">4</div>
                                    <div className="col-md-6">cvbnmncvbncvb</div>
                                </div>
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                    <div className="col-md-4">fghj</div>
                                    <div className="col-md-2">4</div>
                                    <div className="col-md-6">sdfghjhgfddfg</div>
                                </div>
                            </div>

                        </div>


                        <div className="col-md-3"></div>
                    </div>
                </div>

           
               



            <div class="container-fluid" id="footer_first_container">

             
        
            </div >
            </div >
        
                 

        );
    }
}

export default Firstteam;