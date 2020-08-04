import React, { Component } from "react";
import Footer from "../Footer";

import $ from "jquery"






class SocialMedia extends Component {
    render() {
  /*JS FOR SCROLLING THE ROW OF THUMBNAILS*/ 
$(document).ready(function () {
    $('.vid-item').each(function(index){
      $(this).on('click', function(){
        var current_index = index+1;
        $('.vid-item .thumb').removeClass('active');
        $('.vid-item:nth-child('+current_index+') .thumb').addClass('active');
      });
    });
  });
             
        return (
            <div style={{ backgroundColor: "#444444" }}>
                        <div className="line"></div>
                      <div className="row">
                      <iframe width="100%" style={{margin:"auto"}} height="500" src="https://www.youtube.com/embed/videoseries?list=PL2yC1-VwXuLZCsx-qeHLeGbO_pt9zZ3f0" frameborder="0" title="soccerangels" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

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