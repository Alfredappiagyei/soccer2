import React, {Component} from "react";

import jerseyimage1 from '../soccer/photos/Picture8.jpg'
import jerseyimage2 from '../soccer/photos/Picture9.jpg'
import jerseyimage3 from '../soccer/photos/Picture7.jpg'
import jerseyimage5 from '../soccer/photos/Picture2.gif'
import jerseyimage4 from '../soccer/photos/Picture10.jpg'



import {

    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  
  } from "react-router-dom";
import Footer from "./Footer";

class Features extends Component {
    render () {
        return(
            

     
         <div class="container-fluid">
         <div className="row">
              <Link to="#"> <h2><b>Features</b></h2></Link>                   
              </div>
   
            <div class="row" id="features_mainRows">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-12 col-xs-12" style={{padding:"40px"}}>
                        <Link to="#"> <img src={jerseyimage1} alt="pizza" class="img-responsive"/></Link>      
                                <div className="line"></div>
                        </div>
                        <div class="col-md-12 col-xs-12">
                             <h4 className=" features_main_headline"> Soccer Angels new home kit </h4>
                        </div>
                    </div>
                </div>


                <div class="col-md-6">
                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                        <Link to="#"> <img src={jerseyimage2} alt="pizza" class="img-responsive"/></Link>     
                            
                        </div>
                        <div class="col-md-8 col-xs-7 ">
                                <p className="features_sub_headline">     
                                        Soccer Angels men's tracksuit                                       
                                </p>    
                        </div>
                    </div>

                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                        <Link to="#"> <img src={jerseyimage5} alt="pizza" class="img-responsive"/></Link>     
                            
                        </div>
                        <div class="col-md-8 col-xs-7">
                            <p className="features_sub_headline">     
                                Soccer Angels away jersey kit                                             
                           </p>                         
                        </div>
                    </div>

                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                        <Link to="#"> <img src={jerseyimage3} alt="pizza" class="img-responsive"/></Link>     
                            
                        </div>
                        <div class="col-md-8 col-xs-7">
                           <p className="features_sub_headline">     
                               Soccer angels goalkeeper's training kit                                            
                           </p> 
                            
                        </div>
                    </div>
                   
                    
                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                        <Link to="#"> <img src={jerseyimage4} alt="pizza" class="img-responsive"/></Link>     
 
                        </div>
                        <div class="col-md-8 col-xs-7">
                           <p className="features_sub_headline">     
                              Soccer Angels shake up kit                                           
                           </p> 
                            
                        </div>
                    </div> 
                </div>
            </div>
            <div className="row">
                <Footer/>
            </div>
        </div>
 




        )
    }
}

export default Features;