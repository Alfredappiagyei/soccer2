import React, {Component} from "react";
import precious from "../photos/precious.jpg";
import precious2 from "../photos/precious2.JPG";
import jerseygrid from "../photos/0.gif";
import soccerHomeimage1 from "../photos/soccer1.JPG";
 import {

     // BrowserRouter as Router,
     // Switch,
     // Route,
     Link
  
   } from "react-router-dom";


import Footer from "../../components/Footer";
import SocialHeader from "../../components/SocilaHeader";

class BoahDetails extends Component {
    render () {
        return(
            <div>
             <div className='line'></div>
             <div className="container-fluid">
                  <div className='detailsHeading'>
                      <h1>
                      Percious Boah welcomes Dreams fc move, but Soccer Angels
                      Academy will recognise truth about his trajectory
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
                      src={precious}
                      alt="pizza"
                      class="img-responsive"
                    />
                   </div>
                   <div className="detailsContext">
                       <p>
                       Former Dompim Soccer Angels Football play maker Precious Boah ends national U -20 call up.
                       Precious Boah which has spend most of his time with Dompim Soccer Angels football Academy and now 
                       with still believe Fc has been called to national
                       U-20 male team by coach Karim Zito and Evans Adotey. Boah among 70 players invited by the coaches.
                       </p>
                       <p>
                       Dompim Soccer Angels football Academy and now  with still believe Fc has been called to national           
                       U-20 male team by coach Karim Zito and Evans Adotey. Boah among 70 players invited by the coaches.
                       </p>
                   </div>

                   <div className="detailsImage">
                   <img
                      src={precious2}
                      alt="precious"
                      class="img-responsive"
                    />
                   </div>
                   <div className="detailsContext">
                       <p>
                       Soccer Angels Football Academy is happy for their former player call up to the national team. 
                       Boah deserve it and we wish him well said by the club Administration manager Francis Anapey.
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
                <div class="col-md-6 col-xs-7 details-tranfare">
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

export default BoahDetails;