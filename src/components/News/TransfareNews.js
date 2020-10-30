import React, {Component} from "react";
 
import soccerHomeimage3 from './photos/soccer14.JPG';
import jerseyimage2 from './photos/Picture9.jpg';
import jerseygrid from './photos/0.gif';
import asante from './photos/W-asante.JPG';
import pascal from './photos/pascal.JPG';
import jayjay from "./photos/jayjay.JPG";
import boahnationalcall from "./photos/boah.PNG";
import ladiesnews from "./photos/headline.PNG";
import juvenile2 from "./photos/juvinalle1.jpg";



import {

    Link
  
  } from "react-router-dom";
import Footer from "../Footer";

class TransfareNews extends Component {
    render () {
        return( 
                <div id="transfare">
 
 
 


 <div className="container-fluid">
          <div className="row">
            <Link to="transfarenews" className="header">
              {" "}
              <h2>Latest News</h2>
            </Link>
          </div>

          <div className="row" id="latest_news_rows">
            <div className="col-md-9 col-xs-12">
              <div className="row" id="latest_news_rows">
                <div className="col-md-6 col-xs-12">
                  <div className="row">
                    <div className="col-md-4 col-xs-4">
                      <div className="row">
                        <Link to="#">
                          <img
                            src={ladiesnews }
                            alt="pizza"
                            className="img-responsive"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-8 col-xs-8">
                      <p className="latest_news_sub_headline">
                      Soccer Angels ladies starts their pre-season at Assin Ningo ahead  of the next 
                       division one league season

                       </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                  <Link to="/boahdetails">
                    <div className="col-md-4 col-xs-4">             
                        <img
                          src={boahnationalcall}
                          alt="pizza"
                          className="img-responsive"
                        />
                    </div>
                    <div className="col-md-8 col-xs-8">
                      <p className="latest_news_sub_headline">
                      Dreams Fc Striker Percious Boah Get A National Team Call Up
                      </p>
                    </div>
                    </Link>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-4 col-xs-4">
                      <Link to="#">
                        <img src={asante} alt="pizza" className="img-responsive" />
                      </Link>
                    </div>
                    <div className="col-md-8 col-xs-8">
                      <p className="latest_news_sub_headline">
                        Soccer Angels Academy has officcially appointed
                        Mr.WILLIAM ASANTE as the new communication director of
                        the team.
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-md-4 col-xs-4">
                      <Link to="#">
                        <img src={pascal} alt="pizza" className="img-responsive" />
                      </Link>
                    </div>
                    <div className="col-md-8 col-xs-8">
                      <p className="latest_news_sub_headline">
                        Soccer Angels Academy has officcially appointed NANA
                        KWAKU PASCAL (Head of sports, SPLASH FM) as
                        Communication Team member .
                      </p>
                    </div>
                  </div>
                </div>
              
                <div className="col-md-6 col-xs-12">
                  <div className="row">
                  <Link to="/juvinileregister">
                    <div className="col-md-4 col-xs-4">            
                        <img
                          src={juvenile2}
                          alt="pizza"
                          className="img-responsive"
                        />
                    </div>
                    <div className="col-md-8 col-xs-8">
                      <p className="latest_news_sub_headline">
                      Central regional football association visited Assin District football association for 
                      Juvenile screening                  
                      </p>
                    </div>
                    </Link>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-4 col-xs-4">
                      <Link to="#">
                        <img
                          src={jerseyimage2}
                          alt="pizza"
                          className="img-responsive"
                        />
                      </Link>
                    </div>
                    <div className="col-md-8 col-xs-8">
                      <p className="latest_news_sub_headline">
                        Soccer Angels home tracksuit
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-4 col-xs-4">
                      <Link to="#">
                        <img src={jayjay} alt="pizza" className="img-responsive" />
                      </Link>
                    </div>
                    <div className="col-md-8 col-xs-8">
                      <p className="latest_news_sub_headline">
                        Soccer Angels Academy has officcially appointed JAY JAY
                        (Sports presenter at NKWA FM) as the new Deputy
                        communication director of the team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-xs-12">
              <div className="row" style={{ minHeight: "200px" }}>
                <img
                  src={jerseygrid}
                  alt="jersaecollection"
                  className="img-responsive"
                />
              </div>
            </div>
          </div>
          
        <div className="line"></div>
        </div>






        <div className="container-fluid"  id="transfare_news">
          <div className="row">
            <Link to="#" className="header">
              {" "}
              <h2>Transfare News</h2>
            </Link>
          </div>

          <div className="row" id="features_mainRows">
            <div className="col-md-6">
              <div className="row" id="features_subRows">
              <Link to="/boahdetails">
                <div className="col-md-12 col-xs-12">              
                    {" "}
                    <img
                      src={boahnationalcall}
                      alt="angels"
                      className="img-responsive"
                    />
                       <h4 className="bottom"><b>Transfare News</b></h4>                             
                </div>
                <div className="col-md-12 col-xs-12">
                  <div className="col-md-12 col-xs-12 transfarenews-headline">
                    <h4>
                    Dreams Fc Striker Percious Boah Get A National Team Call Up
                    </h4>
                  </div>
                </div>
                </Link>      
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="row" id="features_subRows">
                <div className="col-md-4 col-xs-5">
                  <Link to="#">
                    {" "}
                    <img
                      src={soccerHomeimage3}
                      alt="pizza"
                      className="img-responsive"
                    />
                  </Link>
                </div>

                <div className="col-md-8 col-xs-7 transfare_news_sub_headline">
                  <Link to="/boahdetails">
                    <p>
                    Soccer angels could look for creative solution to solve a
                      tranfare problem
                    </p>
                  </Link>
                </div>
              </div>
              <hr/>            
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

export default TransfareNews;