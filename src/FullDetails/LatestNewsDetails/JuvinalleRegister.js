import React, {Component} from "react";
import ScreningImage1 from "../photos/juvinalle1.jpg";
import ScreningImage2 from "../photos/juvinalle2.jpg";
import jerseygrid from "../photos/0.gif";
import soccerHomeimage1 from "../photos/soccer1.JPG";
import precious from "../photos/precious.jpg";
 import {

     // BrowserRouter as Router,
     // Switch,
     // Route,
     Link
  
   } from "react-router-dom";


import Footer from "../../components/Footer";
import SocialHeader from "../../components/SocilaHeader";

class JuvenileScreening extends Component {
    render () {
        return(
            <div>
             <div className='line'></div>
             <div className="container-fluid">
                  <div className='detailsHeading'>
                      <h1>
                      Central regional football association visited Assin District football association for 
                      Juvenile screening
                      </h1>                     
                  </div>

               <div className="container">
               <div className="row">
                      <SocialHeader/>
                  </div>
                   <div className="row">
               <div className="col-md-9">
                   <div className="detailsImage">
                   <img
                      src={ScreningImage1}
                      alt="pizza"
                      class="img-responsive"
                    />
                   </div>
                   <div className="detailsContext">
                       <p>
                       On 26th August 2020 central regional football association visited 
                       Assin District football association for Juvenile screening. The program 
                       which is been held at Assin foso Jomsco Park were comprises of SOCCER ANGLES ACADEMY, 
                       ANYINBEREM YOUNG STARS, BERLIN FC, DESTINY ACADEMY, KINGS ACADEMY, DAWOMAKO SUPER STARS and ASSIN HOMAHO CITY ACADEMY.
                     

                        </p>
                      
                   </div>

                   <div className="detailsImage">
                   <img
                      src={ScreningImage2}
                      alt="precious"
                      class="img-responsive"
                    />
                   </div>
                   <div className="detailsContext">
                       <p>
                       Unfortunately ASSIN HOMAHO CITY ACADEMY were not present due to one or two things.
                       Representatives  from RFA were happy about the Clubs effort,
                       By FRANCIS ANAPEY and IMMENSE
                       </p>
                   </div>
               </div>
              
                 <div className="col-md-3">
             <div className='row'>
                     <img
                  src={jerseygrid}
                  alt="jersaecollection"
                  class="img-responsive"
                />
                     </div>
                     <div className="recomended">
                         <h4><b>RECOMENDED</b></h4>
                     </div>
                     <hr/>

                <div class="row" id="features_subRows">
                <Link to="/boahdetails">
                    <div class="col-md-6 col-xs-5">
                    {" "}
                    <img
                      src={precious}
                      alt="pizza"
                      class="img-responsive"
                    />               
                </div>
                <div class="col-md-6 col-xs-7 details-tranfare">
                  
                    <p>
                       Percious Boah welcomes Dreams fc move, but Soccer Angels
                      Academy will recognise truth about his trajectory
                 </p>                  
                </div>
                </Link>
              </div>
                <hr/>


              <div class="row" id="features_subRows">
                    <div class="col-md-6 col-xs-5">
                  <Link to="#">
                    {" "}
                    <img
                      src={soccerHomeimage1}
                      alt="pizza"
                      class="img-responsive"
                    />
                  </Link>
                </div>
                <div class="col-md-6 col-xs-7  details-tranfare">
                  <Link to="#">
                    <p>
                      Soccer Angels has officcially signed Mustapha Osman from
                      Lakers fc
                    </p>
                  </Link>
                </div>
              </div>
              <hr/>

              <div class="row" id="features_subRows">
                    <div class="col-md-6 col-xs-6">
                  <Link to="#">
                    {" "}
                    <img
                      src={soccerHomeimage1}
                      alt="pizza"
                      class="img-responsive"
                    />
                  </Link>
                </div>
                <div class="col-md-6 col-xs-6  details-tranfare">
                  <Link to="#">
                    <p>
                      Soccer Angels has officcially signed Mustapha Osman from
                      Lakers fc
                    </p>
                  </Link>
                </div>
              </div>
              <hr/>


              <div class="row" id="features_subRows">
                    <div class="col-md-6 col-xs-5">
                  <Link to="#">
                    {" "}
                    <img
                      src={soccerHomeimage1}
                      alt="pizza"
                      class="img-responsive"
                    />
                  </Link>
                </div>
                <div class="col-md-6 col-xs-7  details-tranfare">
                  <Link to="#">
                    <p>
                      Soccer Angels has officcially signed Mustapha Osman from
                      Lakers fc
                    </p>
                  </Link>
                </div>
              </div>
              

                 </div>
                 </div>
               </div>
              
             </div>    













      <footer>
          <Footer />
        </footer>
      </div>
         

        )
    }
}

export default JuvenileScreening;