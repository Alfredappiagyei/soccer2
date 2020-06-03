import React, { Component } from "react";
import video1 from "../Fans/video/vid2.MP4"
class SocialMedia extends Component {
    render() {

        return (
            <div style={{ backgroundColor: "#444444" }}>
                <div className="container">
                    <div className="row">
                        <h1 style={{ fontSize: "20px", color: "lawngreen" }}>SOCCER ANGELS ACADEMY GO</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                        <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                        <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                        <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                        <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                        <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                        <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                    </div>
                    <hr />

                </div>


                <div class="container-fluid" id="footer-container">
                    <div className="row " id="footer-first-row">
                        <span><a href="https://twitter.com/SoccerAngelAca1"><i class="fa fa-twitter"></i></a></span>
                        <span><a href="https://web.facebook.com/Soccer-Angels-Academy-115197873244725/"><i class="fa fa-facebook"></i></a></span>
                        <span><a href="https://www.youtube.com/channel/UC6AD72yTtZpE7ox25eb6GZg" ><i class="fa fa-youtube"></i></a></span>
                        <span><a href="https://www.instagram.com/p/CAIWNzvF676/"><i class="fa fa-instagram"></i></a></span>
                    </div>
                </div>

            </div>







        )
    }
}

export default SocialMedia;