import React, {Component} from "react";
import soccerHomeimage1 from '../soccer/photos/soccer1.JPG'
import soccerHomeimage2 from '../soccer/photos/soccer30.jpg'
import soccerHomeimage3 from '../soccer/photos/soccer14.JPG'




import {

    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  
  } from "react-router-dom";

class TransfareNews extends Component {
    render () {
        return( 
            

     <section class="container-fluid" id="transfare_news_container">
     <div className="row">
          <Link to="#"> <h2><b>Transfare News</b></h2></Link>                   
          </div>
     

        <div className="row" id="features_mainRows">
            <div className="col-md-6">
                <div className="row" id="features_subRows">
                    <div className="col-md-12 col-xs-12">
                        <a href="#"> <img src={soccerHomeimage3} alt="pizza"
                            class="img-responsive" /></a>
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
                        <a href="#"> <img src={soccerHomeimage2} alt="pizza"
                            class="img-responsive" />
                        </a>
                    </div>
                    <div class="col-md-8 col-xs-7">
                        <a href="#" id="transfare_news_sub_headline" style={{textDecoration:"none", fontFamily:"sans serif"}}>
                         <h4><b>OFFICIAL:PERCIOUS BOAH JOINS DREAMS FC</b> </h4>
                            <p>
                                <b>
                                  Percious Boah welcomes Dreams fc move, but Soccer Angels Academy
                                   will recognise truth about his trajectory  
                                 </b>
                            </p>
                        </a>
                    </div>
                </div>

                <div class="row" id="features_subRows">
                    <div class="col-md-4 col-xs-5">
                        <a href="#"> <img src={soccerHomeimage1} alt="pizza"
                            class="img-responsive" />
                        </a>
                    </div>
                    <div class="col-md-8 col-xs-7">
                        <a href="#" id="transfare_news_sub_headline" style={{textDecoration:"none", fontFamily:"sans serif"}}>
                            <h4><b>OFFICIAL:JUSTICE ASAMOAH JOINS SOCCER ANGELS</b> </h4>
                            <p>
                                <b>
                                  Soccer Angels has officcially signed Justice Asamoah from Mighty Ocean       
                                </b>
                            </p>
                        </a>
                    </div>
                </div>

                <div class="row" id="features_subRows">
                    <div class="col-md-4 col-xs-5">
                        <a href="#"> <img src={soccerHomeimage1} alt="pizza"
                            class="img-responsive" /></a>
                    </div>
                    <div class="col-md-8 col-xs-7">
                        <a href="#" id="transfare_news_sub_headline" style={{textDecoration:"none", fontFamily:"sans serif"}}>
                        <h4><b>OFFICIAL:GODFRED AMOAKOH BOATENG JOINS SOCCER ANGELS</b> </h4>
                            <p>
                             <b>
                               Soccer Angels has officcially signed Godfred Amoakoh Boateng from Victory fc       
                            </b>
                            </p>
                        </a>
                    </div>
                </div>

                <div class="row" id="features_subRows">
                    <div class="col-md-4 col-xs-5">
                        <a href="#"> <img src={soccerHomeimage1} alt="pizza"
                            class="img-responsive" /></a>
                    </div>
                    <div class="col-md-8 col-xs-7">
                        <a href="#" id="transfare_news_sub_headline" style={{textDecoration:"none", fontFamily:"sans serif"}}>
                        <h4><b>OFFICIAL:MUSTAPHA OSMAN JOINS SOCCER ANGELS</b> </h4>
                            <p>
                             <b>
                               Soccer Angels has officcially signed Mustapha Osman from Lakers fc       
                            </b>
                            </p>
                        </a>
                    </div>
                </div>

                            
                   </div>   
                </div>
        </section> 

        )
    }
}

export default TransfareNews;