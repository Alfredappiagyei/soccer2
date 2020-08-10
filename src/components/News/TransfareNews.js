import React, {Component} from "react";

import soccerHomeimage1 from './photos/soccer1.JPG'
import soccerHomeimage2 from './photos/soccer31.jpg'
import soccerHomeimage3 from './photos/soccer14.JPG'
import Chairmanshipposition from './photos/chaimanship.JPG'
import jerseyimage1 from './photos/Picture8.jpg'
import jerseyimage2 from './photos/Picture9.jpg'
import jerseygrid from './photos/0.gif'
import asante from './photos/W-asante.JPG'
import pascal from './photos/pascal.JPG'



import {

    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  
  } from "react-router-dom";

class TransfareNews extends Component {
    render () {
        return( 
                <div>

          <section  class="container-fluid" id="latest_news">
              <div className="row">
              <Link to="#"  className="header"> <h2>Latest News</h2></Link>                   
              </div>
            
                <div class="row" id="latest_news_rows">                 
                    <div class="col-md-9 col-xs-12">
                        <div class="row"  id="latest_news_rows">
                            <div class="col-md-6 col-xs-12">
                                <div class="row" >
                                    <div class="col-md-4 col-xs-4">
                                    <div className="row">
                                       <Link to="#"><img src={Chairmanshipposition} alt="pizza"
                                            class="img-responsive" /></Link>                   
                                     </div>
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                    <p className="latest_news_sub_headline">     
                                         The C.E.O of Soccer Angels Academy is the new Assin district football association chairman                                     
                                    </p>   
                                    </div>
                                </div>
                                <hr/>
                                <div class="row" >
                                    <div class="col-md-4 col-xs-4">
                                    <Link to="#"><img src={soccerHomeimage2} alt="pizza"
                                            class="img-responsive" /></Link>  
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                    <p className="latest_news_sub_headline">     
                                    Dreams Football Club has officially signed Soccer Angels  supper star Percious Boah on a four year long deal from
                                     Soccer Angels Academy.
                                                                                    
                                    </p>   
                                    </div>
                                </div>
                                <hr/>
                                <div class="row" >
                                    <div class="col-md-4 col-xs-4">
                                    <Link to="#"><img src={asante} alt="pizza"
                                            class="img-responsive" /></Link>  
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                    <p className="latest_news_sub_headline">     
                                       Soccer Angels Academy has officcially appointed Mr.WILLIAM ASANTE as the new 
                                       communication director of the team.
                                                                                    
                                    </p>   
                                    </div>
                                </div>
                                <hr/>

                                <div class="row" >
                                    <div class="col-md-4 col-xs-4">
                                    <Link to="#"><img src={pascal} alt="pizza"
                                            class="img-responsive" /></Link>  
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                    <p className="latest_news_sub_headline">     
                                       Soccer Angels Academy has officcially appointed NANA KWAKU PASCAL (Head of sports, SPLASH FM) as
                                       Communication Team member .
                                                                                    
                                    </p>   
                                    </div>
                                </div>


                            </div>

                            <div class="col-md-6 col-xs-12">

                                <div class="row">
                                    <div class="col-md-4 col-xs-4">
                                    <Link to="#"><img src={jerseyimage1} alt="pizza"
                                            class="img-responsive" /></Link>  
                                       
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                    <p className="latest_news_sub_headline">     
                                    Soccer Angels unviel its new jersey for the 2020-2021  league                                                                                                       
                                    </p>   
                                       
                                    </div>
                                </div>
                                <hr/>
                                <div class="row">
                                    <div class="col-md-4 col-xs-4">
                                    <Link to="#"><img src={jerseyimage2} alt="pizza"
                                            class="img-responsive" /></Link>  
                                       
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                    <p className="latest_news_sub_headline">     
                                        Soccer Angels home tracksuit                                                                                                     
                                    </p>                                         
                                    </div>
                                </div>
                                  <hr/>
                                <div class="row">
                                    <div class="col-md-4 col-xs-4">
                                    <Link to="#"><img src={jerseyimage2} alt="pizza"
                                            class="img-responsive" /></Link>  
                                       
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                    <p className="latest_news_sub_headline">     
                                       Soccer Angels Academy has officcially appointed JAY JAY (Sports presenter at NKWA FM) as the new 
                                       Deputy communication director of the team.                                                                                                   
                                    </p>                                         
                                    </div>
                                </div>
                              
                            </div>
                          </div>
                        </div>



                        

           
                       <div class="col-md-3 col-xs-12">
                         <div className="row" style={{minHeight:"200px",}}>
                             <img src={jerseygrid} alt="jersaecollection" class="img-responsive" />                 
                        </div>
                        </div>
                 
                 </div>              
         </section> 




              



     <section class="container-fluid" id="transfare_news">
         <div className="row">
              <Link to="#" className="header"> <h2>Transfare News</h2></Link>                   
              </div>
         

            <div className="row" id="features_mainRows">
                <div className="col-md-6">
                    <div className="row" id="features_subRows">
                        <div className="col-md-12 col-xs-12">
                        <Link to="#"> <img src={soccerHomeimage3} alt="angels" class="img-responsive"/></Link>                            
                         <div className="line"></div>
                        </div>
                        <div className="col-md-12 col-xs-12">
                        <div class="col-md-12 col-xs-12">
                             <h4 className=" features_main_headline">
                                  Soccer angels could look for creative solution to solve a tranfare problem 
                             </h4>
                          </div>
                        </div>  
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                         <Link to="#"> <img src={soccerHomeimage2} alt="pizza" class="img-responsive"/></Link> 
                           
                        </div>
                        
                        <div class="col-md-8 col-xs-7 transfare_news_sub_headline">
                        <Link to="#">
                          <h4><b>OFFICIAL:PERCIOUS BOAH JOINS DREAMS FC</b> </h4>
                                <p>   
                                 Percious Boah welcomes Dreams fc move, but Soccer Angels Academy 
                                 will recognise truth about his trajectory                   
                                </p>
                        </Link> 
                        </div>    
                    </div>

                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                        <Link to="#"> <img src={soccerHomeimage1} alt="pizza" class="img-responsive"/></Link> 
                            
                        </div>
                        <div class="col-md-8 col-xs-7 transfare_news_sub_headline">
                        <Link to="#">
                        <h4><b>OFFICIAL:JUSTICE ASAMOAH JOINS SOCCER ANGELS</b> </h4>
                                <p>   
                                   Soccer Angels has officcially signed Godfred Amoakoh Boateng from Victory fc                 
                                </p>
                        </Link> 
                        </div>          
                    </div>

                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                        <Link to="#"> <img src={soccerHomeimage1} alt="pizza" class="img-responsive"/></Link> 
                            
                        </div>
                        <div class="col-md-8 col-xs-7 transfare_news_sub_headline">
                        <Link to="#">
                            <h4><b>OFFICIAL:GODFRED AMOAKOH BOATENG JOINS SOCCER ANGELS</b> </h4>
                                <p>   
                                   Soccer Angels has officcially signed Godfred Amoakoh Boateng from Victory fc                 
                                </p>
                        </Link> 
                        </div>
                    </div>

                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                        <Link to="#"> <img src={soccerHomeimage1} alt="pizza" class="img-responsive"/></Link> 
                           
                        </div>
                        <div class="col-md-8 col-xs-7 transfare_news_sub_headline">
                        <Link to="#">
                            <h4><b>OFFICIAL:MUSTAPHA OSMAN JOINS SOCCER ANGELS</b> </h4>
                                <p>                                
                                   Soccer Angels has officcially signed Mustapha Osman from Lakers fc       
                                </p>
                        </Link> 
                        </div>
                    </div>

                                
                       </div>   
                    </div>
            </section> 
















  

























                </div>


          
        )
    }
}

export default TransfareNews;