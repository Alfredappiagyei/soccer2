import React, { Component } from "react";
import video1 from "../Fans/video/vid1.MP4"
// import socialmediafacebookimage from "../Fans/photos/so4.png"





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
                     
                        

                  
                </div>




            </div >

        )
    }
}

export default SocialMedia;