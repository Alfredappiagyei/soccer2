import React, {Component} from "react";

import logo1 from '../soccer/photos/Picture3.gif'
import logo2 from '../soccer/photos/1.gif'
import logo3 from '../soccer/photos/2.gif'
import logo4 from '../soccer/photos/3.gif'
import logo5 from '../soccer/photos/4.gif'




class Features extends Component {
    render () {
        return(
            

  <div class="container-fluid"  id="footer_first_container"> 
  <div className="row " id="footer-first-row">
     <a href="https://twitter.com/SoccerAngelAca1" > <img   src={logo1} alt="pizza"
                          class="img-responsive" width="40" height="40" /></a>
      <a href="https://web.facebook.com/Soccer-Angels-Academy-115197873244725/" > <img   src={logo2} alt="pizza"
                          class="img-responsive" width="40" height="40" /></a>
      <a href="https://www.youtube.com/channel/UC6AD72yTtZpE7ox25eb6GZg" > <img   src={logo3} alt="pizza"
                          class="img-responsive" width="40" height="40" /></a>
     <a href="#" > <img   src={logo4} alt="pizza"
                          class="img-responsive" width="40" height="40" /></a>
     <a href="https://www.instagram.com/p/CAIWNzvF676/" > <img   src={logo5} alt="pizza"
                          class="img-responsive" width="40" height="40" /></a>           
     </div>      
 </div>

           
        )
    }
}

export default Features;