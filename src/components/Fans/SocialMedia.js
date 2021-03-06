import React, { Component } from "react";

import socialmediafacebookimage from "../Fans/photos/so7.PNG";
import socialmediatweeterimage from "../Fans/photos/so2.png";
import socialmediainstagramimage from "../Fans/photos/so1.jpeg";
import socialmediayoutubeimage from "../Fans/photos/so5.JPG";

import socialmediafirstimage from "../Fans/photos/so8.JPG";
import Footer from "../Footer";

class SocialMedia extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid" style={{  margin: "0px 0px" }}>
          <div
            className="row"
            style={{ backgroundColor: "green", color: "lawngreen", }}
          >
            <h4><b>SAFA ON SOCIAL MEDIA</b></h4>
          </div>

          <div className="row">
            <div className="col-md-9">
              <div
                className="row"
                style={{ height: "200px", backgroundColor: "red" }}
              >
                <img
                  src={socialmediafirstimage}
                  style={{ height: "200px", width: "100%" }}
                  alt="angels"
                  className="img-responsive"
                />
              </div>
              <hr />

              <div className="row">
                <p>
                  <h4>
                    Stay connected SAFA via the clubs official social media
                    platforms...
                  </h4>
                </p>
              </div>
              <hr />

              <div className="row">
                <a href="https://web.facebook.com/Soccer-Angels-Academy-115197873244725/">
                  <img
                    src={socialmediafacebookimage}
                    alt="angels"
                    className="img-responsive"
                  />
                </a>
                <h4>
                  Like us
                  <a
                    href="https://web.facebook.com/Soccer-Angels-Academy-115197873244725/"
                    style={{ color: "lawngreen" }}
                  >
                    @SoccerAngelsAcademy
                  </a>
                  for daily news,videos,interviews and look out for SAFA
                  facebook live events!
                </h4>
              </div>

              <hr />

              <div className="row">
                <a href="https://twitter.com/SoccerAngelAca1">
                  <img
                    src={socialmediatweeterimage}
                    alt="angels"
                    className="img-responsive"
                  />
                </a>
                <h4>
                  Follow us{" "}
                  <a
                    href="https://twitter.com/SoccerAngelAca1"
                    style={{ color: "lawngreen" }}
                  >
                    {" "}
                    @SAFA
                  </a>{" "}
                  for breaking news,stats,team news, videos,photos and much
                  more.
                </h4>
              </div>
              <hr />

              <div className="row">
                <a href="https://instagram.com/academysoccerangels?igshid=gwkqax81h7lw">
                  <img
                    src={socialmediainstagramimage}
                    alt="angels"
                    className="img-responsive"
                  />
                </a>
                <h4>
                  Follow us at soccerangelsacademy for classNameic and current
                  shots, as well as our stories including matchday and
                  behind-the-scenes coverage
                </h4>
              </div>
              <hr />

              <div className="row">
                <a
                  style={{ margin: "auto", position: "relative" }}
                  href="https://www.youtube.com/channel/UC6AD72yTtZpE7ox25eb6GZg"
                >
                  <img
                    src={socialmediayoutubeimage}
                    alt="youtube"
                    className="img-responsive"
                  />
                </a>
                <h4>
                  Watch exclusive video content on the official SAFA YouTube
                  channel.With hundreds of videos posted, it's the best way to
                  watch the best clips from the academy
                </h4>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>

        <div  style={{ padding: "0px" }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default SocialMedia;
