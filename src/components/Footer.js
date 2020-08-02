import React, { Component } from "react";
import logo from './Fans/photos/soccerangelslogo.JPG'



 
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
              <div className="row">
              <img src={logo} alt="soccerangelslogo"  className="img-responsive" height="100px" width="100px"  />
                </div>

               <div className="row" style={{paddingTop:"20px"}}>
                  <span className="contacts"><i class="fa fa-envelope"></i><a href="mailto:appiagyeialfred815@gmail.com?  subject=hello%20everyone%20"> soccerangels@email.com</a></span>
                  <span className="contacts"><i class="fa fa-envelope"></i><a href="mailto:appiagyeialfred815@gmail.com?  subject=hello%20everyone%20"> +233######### / +233#######</a></span>
                          
                 <span className="socialinks"><a href="https://twitter.com/SoccerAngelAca1"><i class="fa fa-twitter"></i></a></span> 
                 <span className="socialinks"><a href="https://web.facebook.com/Soccer-Angels-Academy-115197873244725/"><i class="fa fa-facebook"></i></a></span> 
                 <span className="socialinks"><a  href="https://www.youtube.com/channel/UC6AD72yTtZpE7ox25eb6GZg" ><i class="fa fa-youtube"></i></a></span> 
                 <span className="socialinks"><a href="https://www.instagram.com/p/CAIWNzvF676/"><i class="fa fa-instagram"></i></a></span>  
                 </div>  

                 <div className="row">
                     <p>&copy Copright 2020 The Soccer Angels Football Club. All rights reserved.<br/>
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