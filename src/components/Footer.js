import React, { Component } from "react";
import footlogo from './Fans/photos/footlogo.JPG'



 
// import {

//     // BrowserRouter as Router,
//     // Switch,
//     // Route,
//     Link
  
//   } from "react-router-dom";
class Footer extends Component {
    render() {

        return (
            <section className="container-fluid   footer-container">
                 <div className="container">
              <div className="row" style={{alignItems:"center",display:"block"}}>
               <img src={footlogo} alt="soccerangelslogo"   className="img-responsive" height="100px" width="100px"  /> 
              
                </div>

                      <div className="row" style={{paddingTop:"20px"}}>
                          <div className="col-md-6 col-xs-12">
                          <span className="contacts"><i class="fa fa-envelope"></i><a href="mailto:appiagyeialfred815@gmail.com?  subject=hello%20everyone%20"> soccerangels@email.com</a></span>
                          <span className="contacts"><i class="fa fa-envelope"></i><a href="mailto:appiagyeialfred815@gmail.com?  subject=hello%20everyone%20"> +233######### / +233#######</a></span>
                          </div>

                          <div className="col-md-6 col-xs-12">
                          <span className="socialinks"><a href="https://twitter.com/SoccerAngelAca1"><i class="fa fa-twitter"></i></a></span> 
                          <span className="socialinks"><a href="https://web.facebook.com/Soccer-Angels-Academy-115197873244725/"><i class="fa fa-facebook"></i></a></span> 
                          <span className="socialinks"><a  href="https://www.youtube.com/channel/UC6AD72yTtZpE7ox25eb6GZg" ><i class="fa fa-youtube"></i></a></span> 
                          <span className="socialinks"><a href="https://www.instagram.com/p/CAIWNzvF676/"><i class="fa fa-instagram"></i></a></span>  
                          </div>
               
                         </div>  

                 <div className="row">
                     <p>&copy; Copright 2020 The Soccer Angels Football Club. All rights reserved.<br/>
                         Developed and maintained by the SAFA Technology Team .<br/>
                          All rights reserved.
                     </p>

            
                 </div>
                 </div>             
            </section>


        )
    }
}

export default Footer;