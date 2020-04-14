import React, { Component } from "react";
import video1 from "../Fans/video/vid2.MP4"
// import socialmediafacebookimage from "../Fans/photos/so4.png"

import logo1 from '../Fans/photos/Picture3.gif'
import logo2 from '../Fans/photos/1.gif'
import logo3 from '../Fans/photos/2.gif'
import logo4 from '../Fans/photos/3.gif'
import logo5 from '../Fans/photos/4.gif'





class SocialMedia extends Component {
    render() {

        return (
            <div style={{backgroundColor:"#444444"}}>
                <div className="container">
                    <div className="row">
                        <h1 style={{fontSize:"20px", color:"lawngreen"}}>SOCCER ANGELS ACADEMY GO</h1>
                    </div>
                <div className="row">
                          <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                          <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                          <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                          <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                      </div>
                      <hr/>
                      <div className="row">
                      <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                          <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                          <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                          <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                      </div>
                      <hr/>
                      <div className="row">
                      <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                          <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                          <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                          <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                      </div>
                      <hr/>
                      <div className="row">
                      <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                          <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                          <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                          <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                      </div>
                      <hr/>
                      <div className="row">
                      <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                          <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                          <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                          <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                      </div>
                </div>

                <div class="container-fluid" id="footer_first_container">
                <div className="row " id="footer-first-row">
        <a href="https://twitter.com/SoccerAngelAca1" > <img   src={logo1} alt="pizza"
                                class="img-responsive" width="40" height="40" /></a>
         <a href="https://web.facebook.com/Soccer-Angels-Academy-115197873244725/" > <img   src={logo2} alt="pizza"
                                class="img-responsive" width="40" height="40" /></a>
         <a href="https://www.youtube.com/channel/UC6AD72yTtZpE7ox25eb6GZg" > <img   src={logo3} alt="pizza"
                                class="img-responsive" width="40" height="40" /></a>
         <a href="#" > <img   src={logo4} alt="pizza"
                                class="img-responsive" width="40" height="40" /></a>
         <a href="#" > <img   src={logo5} alt="pizza"
                                class="img-responsive" width="40" height="40" /></a>
             
        </div>
       
         </div>
                     
                        

                  
                </div>




    

        )
    }
}

export default SocialMedia;