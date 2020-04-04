import React, { Component } from "react";


// import soccerFirstteamImage1 from "../soccer/photos/soccer1.JPG"
import under23image1 from '../Match/photos/soccer1.JPG'

import {

    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link

} from "react-router-dom";


class Under23 extends Component {
    render() {
        return (
            <div>
                <div className="container">
                <div className="row" style={{ backgroundColor: "#E31B23", color: "#ddd" }}><h3>FIXTURES AND RESULLTS</h3>  </div>
                    <div class="row">
                                    <div class="col-xs-12 col-md-4"  id="lastmatch_colon">
                                        <p id="last_match_header_text"><b>LAST MATCH</b></p>
                                        <div class="col-xs-4  col-md-4"> <img src={under23image1 } alt="pizza"
                                            class="img-responsive" /></div>
                                        <div class="col-xs-4  col-md-4">
                                            <button id="last_match_button"><b>0-0</b></button>
                                        </div>
                                        <div class="col-xs-4  col-md-4"> <img src={under23image1 } alt="pizza"
                                            class="img-responsive" /></div><br />
                                        <div id="match_text">
                                            <p >SKGBUBS VBHXBJGB</p>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-8" >
                                        <div class="col-xs-12 col-md-6" id="upcoming_colon">
                                        <p id="upcoming_match_header_text"><b>UPCOMING MATCH</b></p>
                                            <div class="col-xs-4  col-md-4"> <img src={under23image1 } alt="pizza"
                                                class="img-responsive" /></div>
                                            <div class="col-xs-4  col-md-4">
                                                <button id="upcoming_match_button"><b>VS</b></button>
                                            </div>
                                            <div class="col-xs-4  col-md-4"> <img src={under23image1 } alt="pizza"
                                                class="img-responsive" /></div>
                                            <div id="match_text">
                                                <p>SKGBUBS VBHXBJGB</p>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-md-6" id="upcoming_colon">
                                        <p id="upcoming_match_header_text"><b>UPCOMING MATCH</b></p>
                                            <div class="col-xs-4  col-md-4"> <img src={under23image1 } alt="pizza"
                                                class="img-responsive" /></div>
                                            <div class="col-xs-4  col-md-4">
                                                <button id="upcoming_match_button"><b>VS</b></button>
                                            </div>
                                            <div class="col-xs-4  col-md-4"> <img src={under23image1 } alt="pizza"
                                                class="img-responsive" /></div>
                                            <div id="match_text">
                                                <p>SKGBUBS VBHXBJGB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                            <div className="row">
                                <nav class="navbar navbar-default" style={{ backgroundColor: '#333333', color: "#fff", }}>
                                    <div class="container-fluid">
                                        <div class="navbar-header">
                                            <Link to="/firstteam" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", }}><b>First Team</b> </Link>
                                            <Link to="#" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", }}><b>Women </b> </Link>
                                            <Link to="/under23" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", }}><b>U23S</b> </Link>
                                            <Link to="/under18" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", }}><b>U18S</b> </Link>

                                        </div>
                                    </div>
                                </nav>
                            </div>



                </div>

               
            <div class="container-fluid" id="footer_first_container">

                <section class="bottomFooter">
                    <div class="footerText">

                        <div class="footer-middleBottom">
                            <a title="Go to Privacy Policy" href="http://www.liverpoolfc.com/legal/privacy-policy">Privacy Policy</a> <span>|</span>
                            <a title="Go to Terms and Conditions" href="http://www.liverpoolfc.com/legal/terms-and-conditions">Terms and Conditions</a> <span>|</span>
                            <a title="Go to Anti-Slavery" href="http://www.liverpoolfc.com/corporate/anti-slavery">Anti-Slavery</a> <span>|</span>
                            <a title="Go to Cookies" href="http://www.liverpoolfc.com/legal/cookies">Cookies</a> <span>|</span>
                            <a title="Go to Help" href="https://help.liverpoolfc.com/">Help</a> <span>|</span>
                            <a title="Go to Browser Support" href="http://www.liverpoolfc.com/corporate/browser-support">Browser Support</a> <span>|</span>
                            <a title="Go to RSS Feeds" href="http://www.liverpoolfc.com/corporate/rss-feeds">RSS Feeds</a> <span>|</span>
                            <a title="Go to Contact Us" href="http://www.liverpoolfc.com/contactus">Contact Us</a> <span>|</span>
                            <a title="Go to Accessibility" href="http://www.liverpoolfc.com/accessible/accessible">Accessibility</a> <br />
                        </div>

                        <div class="footer-left">
                            &copy; Copyright 2020 The Soccer Angels Football Acadeny . All rights reserved.
                        </div>

                        <div class="footer-right">
                            Developed and maintained by the LFC Technology and Transformation Team
                        </div>

                        <div class="footer-middle">
                            Match Statistics supplied by Opta Sports Data Limited. Reproduced under licence from Football DataCo Limited. All rights reserved.
                         </div>
                    </div>
                </section>
            </div>
     </div > 
 

        )
    }
}

export default Under23;