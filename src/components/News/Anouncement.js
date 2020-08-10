import React, { Component } from "react";
import justify from '../News/photos/justify.JPG'
import pressrelease from '../News/photos/press.JPG'

 
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
                  <div className="container-fluid justify">
                    <div className="container justifyimg_container">
                        <img src={justify} alt="justify" className="img-responsive" style={{margin:"auto"}}></img>
                    </div>
                </div>

                <section> 
    <div className="container-fluid   league" >
       <div className="row">
           <div className="col-md-6 league_first_colon">
               <div className="row" style={{margin:"auto"}}>
                   <h2>PRESS RELEASE</h2>
                   </div>
               <div className="row">
                   <img src={pressrelease} alt="pressrelease" className="img-responsive" />
               </div>
           </div>
           <div className="col-md-6  league_second_colon" >
               <h2>OFFICIALL ANOUNCEMENT</h2>
               <ul>
                   <li>ISSAC ENTSIE</li>
                   <li>BENJAMIN APPIAH</li>
                   <li>PRINCE MAHAMA</li>
                   <li>MILLER AUGUSTINE</li>
                   <li>ERNEST OPPONG</li>
                 
               </ul>
               <h2>JOINS THE SENIOR SIDE OF SOCCER ANGELS ACADEMY</h2>
           </div>
       </div>
       </div>
   </section>

            </div>

        )
    }
}

export default Anouncement;