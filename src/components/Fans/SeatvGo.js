import React, { Component } from "react";
import Footer from "../Footer";

 






class SocialMedia extends Component {
    render() {           
        return (
            <div style={{ backgroundColor: "#444444" }}>
                        <div className="line"></div>
                      <div className="row">
                      <iframe width="100%" height="500" src="https://www.youtube.com/embed/videoseries?list=PL2yC1-VwXuLZCsx-qeHLeGbO_pt9zZ3f0?rel=0" frameborder="0" title="safatv" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                      </iframe>
                      </div>
                      <div className="line"></div>
                        <div class="container-fluid"  style={{padding:"0px"}}>
                      <Footer/>
                      </div>
                    </div>


               

            
 






        )
    }
}

export default SocialMedia;