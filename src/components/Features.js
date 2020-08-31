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
            <div>
        <section className="container-fluid">
        <div className="row">
          <Link to="#" className="header">
            <h2>Features</h2>
          </Link>
        </div>

        <div className="row" id="features_mainRows">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12 col-xs-12" style={{ padding: "40px" }}>
                <Link to="#">
                  {" "}
                  <img
                    src={jerseyimage1}
                    alt="pizza"
                    className="img-responsive"
                  />
                </Link>
                <div className="line"></div>
              </div>
              <div className="col-md-12 col-xs-12">
                <h4 className=" features_main_headline">
                  {" "}
                  Soccer Angels new home kit
                </h4>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row" id="features_subRows">
              <div className="col-md-4 col-xs-5">
                <Link to="#">
                  {" "}
                  <img
                    src={jerseyimage2}
                    alt="pizza"
                    className="img-responsive"
                  />
                </Link>
              </div>
              <div className="col-md-8 col-xs-7 ">
                <p className="features_sub_headline">
                  Soccer Angels men's tracksuit
                </p>
              </div>
            </div>

            <div className="row" id="features_subRows">
              <div className="col-md-4 col-xs-5">
                <Link to="#">
                  {" "}
                  <img
                    src={jerseyimage5}
                    alt="pizza"
                    className="img-responsive"
                  />
                </Link>
              </div>
              <div className="col-md-8 col-xs-7">
                <p className="features_sub_headline">
                  Soccer Angels away jersey kit
                </p>
              </div>
            </div>

            <div className="row" id="features_subRows">
              <div className="col-md-4 col-xs-5">
                <Link to="#">
                  {" "}
                  <img
                    src={jerseyimage3}
                    alt="pizza"
                    className="img-responsive"
                  />
                </Link>
              </div>
              <div className="col-md-8 col-xs-7">
                <p className="features_sub_headline">
                  Soccer angels goalkeeper's training kit
                </p>
              </div>
            </div>

            <div className="row" id="features_subRows">
              <div className="col-md-4 col-xs-5">
                <Link to="#">
                  {" "}
                  <img
                    src={jerseyimage4}
                    alt="pizza"
                    className="img-responsive"
                  />
                </Link>
              </div>
              <div className="col-md-8 col-xs-7">
                <p className="features_sub_headline">
                  Soccer Angels shake up kit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <footer>
          <Footer />
        </footer>
      </div>
         

        )
    }
}

export default Features;