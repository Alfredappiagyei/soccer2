import React, { Component } from "react";
import baaye from "./photos/Baaye.JPG"
import appiah from '../Team/photos/Appiah.JPG' 
import jerseygrid from './photos/0.gif'
import andrews from "./photos/Andrews.JPG"
import richmond from "./photos/richmond.JPG"
import elvis from "./photos/Elvis.JPG"
import ketu from "./photos/Ketu.JPG"
import cosmos from "./photos/cosmos.JPG"
import shargaa from "./photos/shargaa.JPG"
import theophilus from "./photos/theophilus.JPG"
import Seconddivission from "./photos/academy.JPG"
import cobby from "./photos/cobby.JPG"
import {
    Link

} from "react-router-dom";
import Footer from "../Footer";


class Secdiv extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid" style={{margin:"0px"}}>
                
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row" style={{ backgroundColor: "#141414", color: "lawngreen" }}>
                                <h4><b>SECOND DIVISION</b></h4>
                            </div>
                              
                            <div className="row">
                                 <img src={Seconddivission } alt="angels"
                                class="img-responsive" /> 
                            </div>
                            <div className="line"></div>
                            <div className="row">
                                <nav class="navbar navbar-home" style={{ backgroundColor: '#333333',borderRadius:"none" }}>
                                
                                        <div class="navbar-header">
                                            <Link to="/firstteam" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", }}>Second Division </Link>
                                        
                                        </div>
                                    
                                </nav>
                            </div>




                            <div className="row">
                                <h3><b>GOALKEEPERS</b></h3>
                            </div>
                            <div class="row line"></div>

                            <div className="row">
                            <Link to="/bismark"> 
                                <div className="col-md-4 col-xs-12" id="wholedettailcard">
                                      <div >
                                     <img src={baaye} alt="pizza"  class="img-responsive  playerimagecard"  />
                                     </div>
                                     <div id="playernumbercard">
                                     <b>16</b>
                                    </div>
                                    <div id="playercardname">
                                    <b>Bismark Baaye</b>
                                    </div>
                                </div>
                                </Link>

                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" id="wholedettailcard"> 
                                    <div >
                                     <img src={appiah} alt="pizza"  class="img-responsive  playerimagecard"  />
                                     </div>
                                     <div  id="playernumbercard">
                                    <b>3</b>
                                    </div>
                                    <div  id="playercardname">
                                    <b>Daniel Appiah</b>
                                    </div>
                                    
                                </div>
                                </Link>

                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" id="wholedettailcard">
                                    <div >
                                     <img src={appiah} alt="pizza"  class="img-responsive  playerimagecard"  />
                                     </div>
                                     <div  id="playernumbercard">
                                    <b>3</b>
                                    </div>
                                    <div  id="playercardname">
                                    <b>Daniel Appiah</b>
                                    </div>
                                </div>
                                </Link>

                            </div>





                            <div className="row">
                                <h3><b>DEFENDERS</b></h3>
                            </div>
                            <div class="row line"></div>
                            <div className="row">

                            <Link to="/appiah"> 
                                <div className="col-md-4 col-xs-12" id="wholedettailcard">
                                   <div >
                                     <img src={appiah} alt="pizza"  class="img-responsive  playerimagecard"  />
                                     </div>
                                     <div  id="playernumbercard">
                                    <b>3</b>
                                    </div>
                                    <div  id="playercardname">
                                    <b>Daniel Appiah</b>
                                    </div>
                                </div>
                                </Link>


                                <Link to="/richmond"> 
                                <div className="col-md-4 col-xs-12" id="wholedettailcard">
                                    <div >
                                     <img src={richmond} alt="pizza"  class="img-responsive  playerimagecard"  />
                                     </div>
                                     <div  id="playernumbercard">
                                    <b>2</b>
                                    </div>
                                    <div  id="playercardname">
                                    <b>Richmond Sarfoh</b>
                                    </div>
                                </div>
                                </Link>

                                <Link to="/elvis"> 
                                <div className="col-md-4 col-xs-12" id="wholedettailcard">
                                    <div >
                                     <img src={elvis} alt="pizza"  class="img-responsive  playerimagecard"  />
                                     </div>
                                     <div   id="playernumbercard">
                                    <b>3</b>
                                    </div>
                                    <div id="playercardname">
                                    <b>Elvis Botwe</b>
                                    </div>
                                </div>
                                </Link>
                            </div>

                            <hr/> 

                            <div className="row">
                            <Link to="/theophilus"> 
                                <div className="col-md-4 col-xs-12" id="wholedettailcard">
                                    <div>
                                     <img src={theophilus} alt="pizza"  class="img-responsive  playerimagecard"  />
                                     </div>
                                     <div  id="playernumbercard">
                                    <b>3</b>
                                    </div>
                                    <div id="playercardname">
                                    <b>Theophilus</b>
                                    </div>
                                </div>
                                </Link>

                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" id="wholedettailcard">
                                    <div>
                                     <img src={appiah} alt="pizza"  class="img-responsive  playerimagecard"  />
                                     </div>
                                     <div  id="playernumbercard">
                                    <b>3</b>
                                    </div>
                                    <div id="playercardname">
                                    <b>Daniel Appiah</b>
                                    </div>
                                </div>
                                </Link>

                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" id="wholedettailcard">
                                    <div >
                                     <img src={appiah} alt="pizza"  class="img-responsive  playerimagecard"  />
                                     </div>
                                     <div  id="playernumbercard">
                                    <b>3</b>
                                    </div>
                                    <div  id="playercardname">
                                    <b>Daniel Appiah</b>
                                    </div>
                                </div>
                                </Link>

                            </div>


                            <div className="row">
                                <h3><b>MIDFIELDERS</b></h3>
                            </div>
                            <div class="row line"></div>
                            <div className="row">
                            <Link to="#"> 
                                <div className="col-md-4 col-xs-12" id="wholedettailcard">
                                    <div>
                                     <img src={ketu} alt="pizza"  class="img-responsive  playerimagecard"  />
                                     </div>
                                     <div id="playernumbercard">
                                    <b>3</b>
                                    </div>
                                    <div  id="playercardname">
                                    <b>Alex Ketu</b>
                                    </div>
                                </div>
                                </Link>


                                <Link to="/cosmos"> 
                                <div className="col-md-4 col-xs-12" id="wholedettailcard">
                                    <div >
                                     <img src={cosmos} alt="pizza"  class="img-responsive  playerimagecard"  />
                                     </div>
                                     <div  id="playernumbercard">
                                    <b>3</b>
                                    </div>
                                    <div  id="playercardname">
                                    <b>Cosmos</b>
                                    </div>
                                </div>
                                </Link>

                                <Link to="/enock"> 
                                <div className="col-md-4 col-xs-12" id="wholedettailcard">
                                    <div >
                                     <img src={shargaa} alt="pizza"  class="img-responsive  playerimagecard"  />
                                     </div>
                                     <div  id="playernumbercard">
                                    <b>3</b>
                                    </div>
                                    <div id="playercardname">
                                    <b>Enock</b>
                                    </div>
                                </div>
                                </Link>
                            </div>



                            <div className="row">
                                <h3><b>FORWARDS</b></h3>
                            </div>
                            <div class="row line"></div>
                            <div className="row">

                            <Link to="/andrews"> 
                                <div className="col-md-4 col-xs-12" id="wholedettailcard">
                                    <div >
                                     <img src={andrews} alt="pizza"  class="img-responsive  playerimagecard"  />
                                     </div>
                                     <div  id="playernumbercard">
                                    <b>3</b>
                                    </div>
                                    <div  id="playercardname">
                                    <b>Andrews</b>
                                    </div>
                                </div>
                                </Link>


                                <Link to="/cobby"> 
                                <div className="col-md-4 col-xs-12"  id="wholedettailcard">
                                    <div style={{backgroundColor:"blueviolet"}}>
                                     <img src={cobby} alt="pizza"  class="img-responsive  playerimagecard"  />
                                     </div>
                                     <div  id="playernumbercard">
                                    <b>3</b>
                                    </div>
                                    <div id="playercardname">
                                    <b>Entsie</b>
                                    </div>
                                </div>
                                </Link>

                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12"  id="wholedettailcard">
                                <div >
                                     <img src={appiah} alt="pizza"  class="img-responsive  playerimagecard"  />
                                     </div>
                                     <div  id="playernumbercard">
                                    <b>3</b>
                                    </div>
                                    <div  id="playercardname">
                                    <b>Daniel Appiah</b>
                                    </div>
                                </div>
                                </Link>
                            </div>


                            <div className="row">
                                <h3><b>ON LOAN</b></h3>
                            </div>
                            <div className="row line"></div>

                            <div className="row">
                            <Link to="#"> 
                                <div className="col-md-4 col-xs-12"  id="wholedettailcard">
                                <div >
                                     <img src={appiah} alt="pizza"  class="img-responsive  playerimagecard"  />
                                     </div>
                                     <div  id="playernumbercard">
                                    <b>3</b>
                                    </div>
                                    <div id="playercardname">
                                    <b>Daniel Appiah</b>
                                    </div>
                                </div>
                                </Link>
         

                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12"  id="wholedettailcard">
                                   <div >
                                     <img src={appiah} alt="pizza"  class="img-responsive  playerimagecard"  />
                                     </div>
                                     <div  id="playernumbercard">
                                    <b>3</b>
                                    </div>
                                    <div id="playercardname">
                                    <b>Daniel Appiah</b>
                                    </div>
                                </div>
                                </Link>
                                
                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12"  id="wholedettailcard">
                                <div>
                                     <img src={appiah} alt="pizza"  class="img-responsive  playerimagecard"  />
                                     </div>
                                     <div  id="playernumbercard">
                                    <b>3</b>
                                    </div>
                                    <div id="playercardname">
                                    <b>Daniel Appiah</b>
                                    </div>
                                </div>
                                </Link>

{/*                                 
                                 <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link> */}

                            </div>
                            <hr/> 
                        </div>


                        <div className="col-md-3">
                        <div className="row">
                            <img src={jerseygrid} alt="pizza"
                                class="img-responsive" />
                            </div>
                            <div className="row"  style={{background:"#141414" }}>
                                <h3 style={{margin:"5px 0px 5px 0px", color:"lawngreen"}}><b>First Team Staff</b></h3>
                            </div>
                            <div className="row" style={{paddingLeft:"5px"}}>
                            <Link to="/" className="staff"><h4>Emmanuel Danso Akonkoh</h4></Link> 
                            <Link to="/" className="staff"><h4>Reginald Nana Appiagyei</h4></Link> 
                            <Link to="/" className="staff"><h4>Emmanuel Essel Dadzie</h4></Link> 
                            <Link to="/" className="staff"><h4>Fransis Anapey</h4></Link> 
                            <Link to="/" className="staff"><h4>Obed Sarkey</h4></Link> 
                            <Link to="/" className="staff"><h4>Emmanuel Yaw Duku</h4></Link> 
                            <Link to="/" className="staff"><h4>William Asante</h4></Link> 
                            <Link to="/" className="staff"><h4>Jay Jay</h4></Link> 
                            <Link to="/" className="staff"><h4>Nana Kwaku</h4></Link> 
                            </div>
                           
                        </div>
                    </div>
                </div>



                <div className="contaier-fluid">
                    <Footer/>
                </div>
 
            </div >
        
                 

        );
    }
}

export default Secdiv;