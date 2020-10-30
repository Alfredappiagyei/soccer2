import React, { Component } from "react";
import pressrelease from '../News/photos/press.JPG'
import Footer from "../Footer";

 //  import {

//      BrowserRouter as Router,
//      Switch,
//      Route,
//     Link
  
//    } from "react-router-dom";

class Anouncement extends Component {
    render() {

        return (
            <div>
               

        <div  className="container-fluid   league">   
          <div className="row">
            <div className="col-md-6 league_first_colon">
              <div className="row" style={{ margin: "auto" }}>
              </div>
              <div className="row">
                <img
                  src={pressrelease}
                  alt="pressrelease"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="col-md-6  league_second_colon">
              <h2>Official Anouncement</h2>
              <ul>
                <li>ISSAC ENTSIE</li>
                <li>BENJAMIN APPIAH</li>
                <li>PRINCE MAHAMA</li>
                <li>MILLER AUGUSTINE</li>
                <li>ERNEST OPPONG</li>
              </ul>
              <h2>Joins the senior side of Soccer Angels Academy</h2>
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

export default Anouncement;