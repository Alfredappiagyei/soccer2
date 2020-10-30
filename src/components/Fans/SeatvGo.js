import React, { Component } from "react";
import Footer from "../Footer";

class SocialMedia extends Component {
  render() {
    return (
      <div >
        <div className="line"> </div>
        <div className="container-fluid" style={{ color: "lawngreen" ,background: "green", margin: "0px 0px" }}>
          <h3>SAFA TV GO</h3>
        </div>

        <div style={{ margin: "0px 0px" }}>
          <iframe
            width="100%"
            height="500"
            title="SAFA"
            src="https://www.youtube.com/embed/videoseries?list=PL2yC1-VwXuLZCsx-qeHLeGbO_pt9zZ3f0&rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="line"></div>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default SocialMedia;
