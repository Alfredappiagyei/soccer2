import React, { Component } from "react";

 
 

import logo from './photos/soccerangelslogo.JPG'
import {
    Link
} from "react-router-dom";

import Footer from "../Footer";


class  SecondDivision extends Component {
    render() {
        return (
            <div>

            <div className="container-fluid  fixturecontainer">
            <div className="row">
                     <div className="row" style={{ backgroundColor: "#141414", color: " lawngreen", margin:"0px 0px 0px 0px" }}><h3>FIXTURES AND RESULLTS</h3>  </div> 

                        <div className="col-xs-12 col-md-4 col-sm-12" id="lastmatch_colon">
                          <div className="row" style={{ minHeight: "200px" }}>
                            ....
                          </div>
                        </div>
                        
                        <div className="col-xs-12 col-md-8">
                          <div className="col-xs-12 col-md-6" id="upcoming_colon">
                            <p id="upcoming_match_header_text">
                              UPCOMING MATCH
                            </p>
                            <div className="col-xs-4  col-md-4">
                              {" "}
                              <img
                                src={logo}
                                alt="pizza"
                                className="img-responsive"
                              />
                              <p>Suampongman</p>
                            </div>
                            <div className="col-xs-4  col-md-4">
                              <p id="upcoming_match_text">
                                VS
                              </p>
                            </div>
                            <div className="col-xs-4  col-md-4">
                              {" "}
                              <img
                                src={logo}
                                alt="pizza"
                                className="img-responsive"
                              />
                              <p> Soccer Angels</p>
                            </div>
                            <div id="match_text"></div>
                          </div>
                          <div className="col-xs-12 col-md-6" id="upcoming_colon">
                            <p id="upcoming_match_header_text">
                              UPCOMING MATCH
                            </p>
                            <div className="col-xs-4  col-md-4">
                              
                              <img
                                src={logo}
                                alt="pizza"
                                className="img-responsive"
                              />
                              <p>Soccer Angels </p>
                            </div>
                            <div className="col-xs-4  col-md-4">
                              <p id="upcoming_match_text">
                                VS
                              </p>
                            </div>
                            <div className="col-xs-4  col-md-4">
                              
                              <img
                                src={logo}
                                alt="OP"
                                className="img-responsive"
                              />
                              <p>Twifo Wasko</p>
                            </div>
                            <div id="match_text"></div>
                          </div>
                        </div>
                      </div>
            </div>



            <div className="container-fluid  fixturecontainer">
            <div className="row">
                     <div className="row" style={{ backgroundColor: "#141414", color: " lawngreen", margin:"0px 0px 0px 0px" }}><h3>FIXTURES AND RESULLTS</h3>  </div> 

                        <div className="col-xs-12 col-md-4 col-sm-12" id="lastmatch_colon">
                          <div className="row" style={{ minHeight: "200px" }}>
                            ....
                          </div>
                        </div>
                        
                        <div className="col-xs-12 col-md-8">
                          <div className="col-xs-12 col-md-6" id="upcoming_colon">
                            <p id="upcoming_match_header_text">
                              UPCOMING MATCH
                            </p>
                            <div className="col-xs-4  col-md-4">
                              {" "}
                              <img
                                src={logo}
                                alt="pizza"
                                className="img-responsive"
                              />
                              <p>Suampongman</p>
                            </div>
                            <div className="col-xs-4  col-md-4">
                              <p id="upcoming_match_text">
                                VS
                              </p>
                            </div>
                            <div className="col-xs-4  col-md-4">
                              {" "}
                              <img
                                src={logo}
                                alt="pizza"
                                className="img-responsive"
                              />
                              <p> Soccer Angels</p>
                            </div>
                            <div id="match_text"></div>
                          </div>
                          <div className="col-xs-12 col-md-6" id="upcoming_colon">
                            <p id="upcoming_match_header_text">
                              UPCOMING MATCH
                            </p>
                            <div className="col-xs-4  col-md-4">
                              
                              <img
                                src={logo}
                                alt="pizza"
                                className="img-responsive"
                              />
                              <p>Soccer Angels </p>
                            </div>
                            <div className="col-xs-4  col-md-4">
                              <p id="upcoming_match_text">
                                VS
                              </p>
                            </div>
                            <div className="col-xs-4  col-md-4">
                              
                              <img
                                src={logo}
                                alt="OP"
                                className="img-responsive"
                              />
                              <p>Twifo Wasko</p>
                            </div>
                            <div id="match_text"></div>
                          </div>
                        </div>
                      </div>
            </div>
    
    
         
    






            

        
                               
                             <div className="row">
                                 <nav className="navbar navbar-default">
                
                                         <div className="navbar-header">
                                             <Link to="/secondivision" className="navbar-brand" style={{ color: "#fff", font: "18px sans serif", }}><p>2ND DIVISION</p> </Link>
                                             {/* <Link to="#" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", }}><p>U10S </p> </Link>
                                             <Link to="#" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", }}><p>U13S</p> </Link>
                                             <Link to="#" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", }}><p>U17S</p> </Link>
                                            <Link to="#" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", }}><p>3RD DIVISION</p> </Link> */}
                                         </div>
                                
                                 </nav>
                            </div>

                 

               
             <div >
                    <Footer/>
            </div>
            </div>
 

        )
    }
}

export default SecondDivision;