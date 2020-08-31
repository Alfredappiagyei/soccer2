import React, { Component } from "react";

 
 
import soccerHomeimage1 from './photos/soccer1.JPG'
import soccerangelslogo from './photos/soccerangelslogo.JPG'
import {

    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link

} from "react-router-dom";
import Footer from "../Footer";


class  SecondDivision extends Component {
    render() {
        return (

            <div className="conatiner-fluid" style={{margin:"0px"}}>
            <div className="row" style={{ backgroundColor: "lawngreen", color: "#141414", margin:"0px 0px 0px 0px" }}><h3>FIXTURES AND RESULLTS</h3>  </div> 
            <div className="carousel-inner carousel-content" role="listbox">
            <div className="item active"  id="carousel_item1" >
            <div className="row" style={{margin:"0px"}}>
                    <div className="col-xs-12 col-md-4"  id="lastmatch_colon">
                        
                    <div className="row" style={{minHeight:"200px",}}>
                    <p id="upcoming_match_header_text">LAST MATCH</p>

                            <div className="col-xs-4  col-md-4"> <img src={soccerHomeimage1} alt="pizza"
                                className="img-responsive" /><p >Suampongman Utd</p>
                                </div>

                            <div className="col-xs-4  col-md-4">
                                <button id="upcoming_match_button"><b>VS</b></button>
                            </div>

                            <div className="col-xs-4  col-md-4"> <img src={soccerangelslogo} alt="pizza"
                                className="img-responsive" /><p >  Soccer Angels Academy</p></div>
                            <div id="match_text">
                              
                            </div>       
                    </div>
                       
                    </div>
                    <div className="col-xs-12 col-md-8" >
                        <div className="col-xs-12 col-md-6" id="upcoming_colon">
                        <p id="upcoming_match_header_text">UPCOMING MATCH</p>
                            <div className="col-xs-4  col-md-4"> <img src={soccerHomeimage1} alt="pizza"
                                className="img-responsive" /><p >Suampongman Utd</p></div>
                            <div className="col-xs-4  col-md-4">
                                <button id="upcoming_match_button"><b>VS</b></button>
                            </div>
                            <div className="col-xs-4  col-md-4"> <img src={soccerangelslogo} alt="pizza"
                                className="img-responsive" /><p >  Soccer Angels Academy</p></div>
                            <div id="match_text">
                              
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6" id="upcoming_colon">
                        <p id="upcoming_match_header_text">UPCOMING MATCH</p>
                            <div className="col-xs-4  col-md-4"> <img src={soccerangelslogo} alt="pizza"
                                className="img-responsive" /><p >Soccer Angels Academy</p></div>
                            <div className="col-xs-4  col-md-4">
                                <button id="upcoming_match_button"><b>VS</b></button>
                            </div>
                            <div className="col-xs-4  col-md-4"> <img src={soccerHomeimage1} alt="pizza"
                                className="img-responsive" /><p >Twifo Wasko</p></div>
                            <div id="match_text">
                                
                            </div>
                        </div>
               
                       </div>
 
                </div>
            </div>
        















           
                


                                
                            <div className="row">
                                <nav className="navbar navbar-default" style={{ backgroundColor: '#141414', color: "#fff", }}>
                                    <div className="container-fluid">
                                        <div className="navbar-header">
                                            <Link to="/secondivision" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", }}><p>2ND DIVISION</p> </Link>
                                            {/* <Link to="#" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", }}><p>U10S </p> </Link>
                                            <Link to="#" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", }}><p>U13S</p> </Link>
                                            <Link to="#" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", }}><p>U17S</p> </Link>
                                            <Link to="#" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", }}><p>3RD DIVISION</p> </Link> */}
                                        </div>
                                    </div>
                                </nav>
                            </div>

                </div>

               
            <div className="container-fluid" style={{padding:"0px"}}>
                   <Footer/>
            </div>
     </div > 
 

        )
    }
}

export default SecondDivision;