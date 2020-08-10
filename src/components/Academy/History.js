import React, { Component } from "react";

import pop from "./photos/pop.GIF"

  

import {

    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  


  } from "react-router-dom";
class History extends Component {
    render() {

        return (
            <div style={{margin:"0px"}}>
                <div className="container-fluid history">
                    <div className="row"id="story" >
                        <div className="col-md-7 col-xs-12">
                            <div className="row">
                                <h1 style={{fontSize:"120px", color:"lawngreen"}}><b>Our</b></h1>
                                <h1 style={{fontSize:"120px",}}><b>Story</b></h1>                              

                                <h2><b style={{color:"yellow"}}>Celebrating 4 years Of The Soccer Angels Way.....</b></h2>
                                <h4><b style={{color:"lawngreen"}}>Celebrate our heroes and relive the pivotal moment that 
                                    have shaped the academys illusrious history</b></h4>
                              </div>
                          </div>

                      <div className="col-md-5 col-xs-12"  style={{textAlign:"center"}}>
                            <img src={pop} className="img-responsive" alt="history" height="500px" width="500px"/>
                          <button  style={{border:"none",padding:"15px 60px"}}> <Link to="/timeline"><b>Timeline</b> </Link></button> 
                        </div>
                    </div>
                </div>
              
            </div >

        )
    }
}

export default History;