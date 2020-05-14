import React, { Component } from "react";

import socialmediafacebookimage from "../Fans/photos/so7.PNG"
import socialmediatweeterimage from "../Fans/photos/so2.png"
import socialmediainstagramimage from "../Fans/photos/so1.jpeg"
import socialmediayoutubeimage from "../Fans/photos/so5.JPG"
import socialmediasnapchatimage from "../Fans/photos/so6.JPG"

import socialmediafirstimage from '../Fans/photos/so8.JPG'



class SocialMedia extends Component {
    render() {
        return (
            <div>
            
                <div className="container-fluid">
                    <div className="row" style={{ backgroundColor: "#444444", color: "lawngreen" }}><h3><b>SEA ON  SOCIAL MEDIA</b></h3> </div>

                    <div className="row">
                        <div className="col-md-9">
                            <div className="row" style={{ height: "200px",  backgroundColor: "red"}}>
                            <a href="#"><img src={socialmediafirstimage} style={{ height: "200px",width: "100%"}} alt="angels" class="img-responsive" /></a> 
                            </div>
                            <hr />

                            <div className="row">
                                <p>
                                    <h4> Stay connected SEA via the clubs official social media platforms...</h4>
                                </p>
                            </div>
                            <hr />

                            <div className="row">
                                <a href="https://web.facebook.com/Soccer-Angels-Academy-115197873244725/"><img src={socialmediafacebookimage} alt="angels" class="img-responsive" /></a>
                                <h4>Like us <a href="https://web.facebook.com/Soccer-Angels-Academy-115197873244725/">@SoccerAngelsAcademy</a>for daily news,videos,interviews and look out for SEA facebook live events!</h4>
                            </div>

                            <hr />

                            <div className="row">
                                <a href="https://twitter.com/SoccerAngelAca1"><img src={socialmediatweeterimage} alt="angels" class="img-responsive" /></a>
                                <h4>Follo us <a href="https://twitter.com/SoccerAngelAca1">@SEA</a> for breaking news,stats,team news, videos,photos and much more.</h4>
                            </div>
                            <hr />

                            <div className="row">
                                <a href="#"><img src={socialmediainstagramimage} alt="angels" class="img-responsive" /></a>
                                <h4>Follow us at soccerangelsacademy for classic and current shots,
                                as well as our stories including matchday and behind-the-scenes
                                coverage
                              </h4>
                            </div>
                            <hr />

                            <div className="row">
                                <a href="#"> <img src={socialmediasnapchatimage} alt="angels" class="img-responsive" /></a>
                                <h4>
                                    Add SEA for exclusive behind-the-scenes stories,photos and videos on matchdays.
                              </h4>
                            </div>
                            <hr />

                            <div className="row">
                                <a  style={{justifyContent:"center"}}  href="https://www.youtube.com/channel/UC6AD72yTtZpE7ox25eb6GZg"><img src={socialmediayoutubeimage} alt="angels" class="img-responsive" /></a>
                                <h4>
                                    Watch exclusive video content on the official SEA YouTube channel.With hundreds
                                    of videos posted, it's the best way to watch the best clips from the academy
                              </h4>
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

export default SocialMedia;