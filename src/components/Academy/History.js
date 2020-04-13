import React, { Component } from "react";

import pop from "./photos/pop.GIF"

class History extends Component {
    render() {

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-xs-12">
                            <div className="row">
                                <h1 style={{fontSize:"120px", color:"lawngreen"}}><b>Our</b></h1>
                                <h1 style={{fontSize:"120px",}}><b> Story</b></h1>

                                <h2><b>Celebrating ... Of The Soccer Angels Way</b></h2>
                                <h4><b>Celebrate our heroes and relive the pivotal moment that 
                                    have shaped the academys illusrious history</b></h4>
                            </div>
                        </div>

                        <div className="col-md-5 col-xs-12">
                            <img src={pop} className="img-responsive" height="500px" width="500px"/>
                           <a style={{color:"#444444"}}> <button><b>Timeline</b></button></a>
                        </div>
                    </div>
                </div>
              
            </div >

        )
    }
}

export default History;