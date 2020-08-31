import React, { Component } from "react";
import Footer from "../Footer";

 






class SocialMedia extends Component {
    render() {           
        return (
          <div  style={{background:"green"}}>
           <div className="line">   </div>
           <div className="container"  style={{color:"lawngreen"}}>
           <h3>SAFA TV GO</h3>
           </div>
           <div className="container">
           <section>
                    <iframe width="100%" height="500" title="SAFA" src="https://www.youtube.com/embed/videoseries?list=PL2yC1-VwXuLZCsx-qeHLeGbO_pt9zZ3f0&rel=0"  frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                      </iframe>
                </section>
           </div>
               
            <div className="line"></div>
    
                  <footer>
                  <Footer />
                 </footer>
      
           
    </div>

        )
    }
}

export default SocialMedia;