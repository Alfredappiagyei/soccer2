import React, { Component } from "react";
import Footer from "../Footer";

 






class SocialMedia extends Component {
    render() {           
        return (
          <div>
           <div className="line"></div>
                <section>
                    <iframe width="100%" height="500" title="SAFA" src="https://www.youtube.com/embed/videoseries?list=PL2yC1-VwXuLZCsx-qeHLeGbO_pt9zZ3f0&rel=0"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                      </iframe>
                </section>
            <div className="line"></div>
    
                  <footer>
                  <Footer />
                 </footer>
      
           
    </div>

        )
    }
}

export default SocialMedia;