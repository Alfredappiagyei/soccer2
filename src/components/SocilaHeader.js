import React, { Component } from "react";




 
// import {

//     // BrowserRouter as Router,
//     // Switch,
//     // Route,
//     Link
  
//   } from "react-router-dom";
class SocialHeader extends Component {
    render() {

        return (
            <div>
            <hr/>
              <div className="socialHead">
                          <span><h3>SOCCER ANGELS NEWS</h3></span>  
                          <span className="socialink"><a href="https://twitter.com/SoccerAngelAca1"><i class="fa fa-twitter"></i></a>|</span> 
                          <span className="socialink"><a href="https://web.facebook.com/Soccer-Angels-Academy-115197873244725/"><i class="fa fa-facebook"></i></a>|</span> 
                          <span className="socialink"><a  href="https://www.youtube.com/channel/UC6AD72yTtZpE7ox25eb6GZg" ><i class="fa fa-youtube"></i></a>|</span> 
                          <span className="socialink"><a href="https://www.instagram.com/p/CAIWNzvF676/"><i class="fa fa-instagram"></i></a>|</span>  
                      
                </div> 
                <hr/>
                </div>
        )
    }
}

export default SocialHeader;