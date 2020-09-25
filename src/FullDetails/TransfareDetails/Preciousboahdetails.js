import React, {Component} from "react";
import precious from "../photos/boah.PNG";
import precious2 from "../photos/precious2.JPG";
import jerseygrid from "../photos/0.gif";
import soccerHomeimage1 from "../photos/soccer1.JPG";
import juvenile2 from "../photos/juvinalle2.jpg";
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
                      Dreams Fc Striker Percious Boah Get A National Team Call Up
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
                      className="img-responsive"
                    />
                   </div>
                   <div className="detailsContext">
                       <p>
                       Percious Boah with jersey number ten (10) in the middle of the photograph, who plays his football
                        for Dawu based club Dreams FC have gotten a call up to Ghana National U-20 team known as the Black Satellites,
                        which  is considered to be the feeder team for the Ghana national football team.
                       </p>
                       <p>
                       Boah started his football career from a second division side Assin Dansame Young Mighty Atoms,
                        played for Domping Soccer Angel Football Academy and now a striker for Dreams Football Club.
                       </p>
                   </div>

                   <div className="detailsImage">
                   <img
                      src={precious2}
                      alt="precious"
                      className="img-responsive"
                    />
                   </div>
                   <div className="detailsContext">
                       <p>
                       This comes after the coach of Black Satellites Yaw Preko had shown interest in him and thinks
                        that his addition is expected to boost the team’s
                        attacking options as the team yearns for an improved goal scoring in the upcoming matches.
                       </p>
                   </div>
               </div>
              
                 <div className="col-md-3">
             <div className='row'>
                     <img
                  src={jerseygrid}
                  alt="jersaecollection"
                  className="img-responsive"
                />
                     </div>
                     <div className="recomended">
                         <h4><b>RECOMENDED</b></h4>
                     </div>
                     <hr/>

                <div className="row" id="features_subRows">
                    <div className="col-md-6 col-xs-5">
                  <Link to="/juvinileregister">
                    {" "}
                    <img
                      src={juvenile2}
                      alt="pizza"
                      className="img-responsive"
                    />
                  </Link>
                </div>
                <div className="col-md-6 col-xs-7 details-tranfare">
                  <Link to="#">
                    <p>
                       Central regional football association visited Assin District football association for 
                      Juvenile screening
                    </p>
                  </Link>
                </div>
              </div>
                <hr/>


              <div className="row" id="features_subRows">
                    <div className="col-md-6 col-xs-5">
                  <Link to="#">
                    {" "}
                    <img
                      src={soccerHomeimage1}
                      alt="pizza"
                      className="img-responsive"
                    />
                  </Link>
                </div>
                <div className="col-md-6 col-xs-7  details-tranfare">
                  <Link to="#">
                    <p>
                      Soccer Angels has officcially signed Mustapha Osman from
                      Lakers fc
                    </p>
                  </Link>
                </div>
              </div>
              <hr/>

              <div className="row" id="features_subRows">
                    <div className="col-md-6 col-xs-6">
                  <Link to="#">
                    {" "}
                    <img
                      src={soccerHomeimage1}
                      alt="pizza"
                      className="img-responsive"
                    />
                  </Link>
                </div>
                <div className="col-md-6 col-xs-6  details-tranfare">
                  <Link to="#">
                    <p>
                      Soccer Angels has officcially signed Mustapha Osman from
                      Lakers fc
                    </p>
                  </Link>
                </div>
              </div>
              <hr/>


              <div className="row" id="features_subRows">
                    <div className="col-md-6 col-xs-5">
                  <Link to="#">
                    {" "}
                    <img
                      src={soccerHomeimage1}
                      alt="pizza"
                      className="img-responsive"
                    />
                  </Link>
                </div>
                <div className="col-md-6 col-xs-7  details-tranfare">
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