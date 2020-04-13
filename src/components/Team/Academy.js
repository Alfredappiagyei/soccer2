import React, { Component } from "react";


// import soccerFirstteamImage1 from "../soccer/photos/soccer1.JPG"

import {

    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link

} from "react-router-dom";


class Academy extends Component {
    render() {
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row" style={{ backgroundColor: "#444444", color: "lawngreen" }}>
                                <h3><b>ACADEMY</b></h3>
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

           
            </div>
     </div > 
 

        )
    }
}

export default Academy;