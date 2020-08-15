import React, { Component } from "react";
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

    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link

} from "react-router-dom";
import Footer from "../Footer";


class Secdiv extends Component {
    render() {
        return (
            <div style={{backgroundColor:"lightgray"}}>
                <div className="container">
                
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row" style={{ backgroundColor: "lawngreen", color: "#141414" }}>
                                <h3>SECOND DIVISION</h3>
                            </div>
                              
                            <div className="row">
                                 <img src={Seconddivission } alt="angels"
                                class="img-responsive" /> 
                            </div>
                            <div className="line"></div>
                            <div className="row">
                                <nav class="navbar navbar-default" style={{ backgroundColor: '#333333', color: "#fff", }}>
                                    <div class="container-fluid">
                                        <div class="navbar-header">
                                            <Link to="/firstteam" className="navbar-brand" style={{ color: "#fff", font: "22px sans serif", }}><b>Second Division</b> </Link>
                                            
                

                                        </div>
                                    </div>
                                </nav>
                            </div>




                            <div className="row">
                                <h3><b>GOALKEEPERS</b></h3>
                            </div>
                            <div class="row line"></div>
                            <div className="row">
                            <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>

                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>
                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>

                            </div>


                            <div className="row">
                                <h3><b>DEFENDERS</b></h3>
                            </div>
                            <div class="row line"></div>
                            <div className="row">
                            <Link to="/appiah"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>


                                <Link to="/richmond"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={richmond} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Richmond Sarfoh</b></div>
                                </div>
                                </Link>

                                <Link to="/elvis"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={elvis} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Elvis Botwe</b></div>
                                </div>
                                </Link>
                            </div>
                            <hr/> 
                            <div className="row">
                            <Link to="/theophilus"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={theophilus} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Theophilus</b></div>
                                </div>
                                </Link>

                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>

                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>

                            </div>


                            <div className="row">
                                <h3><b>MIDFIELDERS</b></h3>
                            </div>
                            <div class="row line"></div>
                            <div className="row">
                            <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={ketu} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Alex Ketu</b></div>
                                </div>
                                </Link>


                                <Link to="/cosmos"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={cosmos} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Cosmos</b></div>
                                </div>
                                </Link>

                                <Link to="/enock"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={shargaa} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Enock</b></div>
                                </div>
                                </Link>
                            </div>



                            <div className="row">
                                <h3><b>FORWARDS</b></h3>
                            </div>
                            <div class="row line"></div>
                            <div className="row">
                            <Link to="/andrews"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={andrews} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Andrews</b></div>
                                </div>
                                </Link>


                                <Link to="/cobby"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={cobby} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>

                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>
                            </div>


                            <div className="row">
                                <h3><b>ON LOAN</b></h3>
                            </div>
                            <div className="row line"></div>
                            <div className="row">
                            <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>
         

                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
                                </div>
                                </Link>
                                
                                <Link to="#"> 
                                <div className="col-md-4 col-xs-12" style={{ display: "flex", }}>
                                <div className="col-md-8">
                                     <img src={appiah} alt="pizza"  class="img-responsive" width="100%" height="200px" />
                                    </div>
                                    <div className="col-md-1" id="jerseynumber"><b>3</b></div>
                                    <div className="col-md-3"><b>Daniel Appiah</b></div>
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
                            <div className="row"  style={{background:"lawngreen",padding:"0px 5px",marginTop:"20px"}}>
                                <h3 style={{margin:"0px"}}><b>First Team Staff</b></h3>
                            </div>
                            <div className="row" style={{paddingLeft:"5px"}}>
                            <Link to="/" className="staff"><h4>Thumbnail label</h4></Link> 
                            <Link to="/" className="staff"><h4>Thumbnail label</h4></Link> 
                            <Link to="/" className="staff"><h4>Thumbnail label</h4></Link> 
                            <Link to="/" className="staff"><h4>Thumbnail label</h4></Link> 
                            <Link to="/" className="staff"><h4>Thumbnail label</h4></Link> 
                            <Link to="/" className="staff"><h4>Thumbnail label</h4></Link> 
                            </div>
                            <div className="row">
                            <img src={jerseygrid} alt="pizza"
                                class="img-responsive" />
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