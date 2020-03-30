
import React, {Component} from "react";




import soccerHomeimage1 from '../soccer/photos/soccer1.JPG'




class Home extends Component {
    render() {
        return (
            <div>

            <div class="container-fluid">
                <div class="row" >
                    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                        {/* Indicators */}
                        <ol class="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>

                        {/* Wrapper for slides  */}
                        <div class="carousel-inner carousel-content" role="listbox">
                            <div class="row" id="line"></div>
                            <div class="item active" id="carousel_item1" >
                                <div class="row" id="items_row">
                                    <div class="col-md-4">
                                        <img src={soccerHomeimage1} alt="pizza" class="img-responsive" />
                                    </div>
                                    <div class="col-md-4">
                                        <div class="row">
                                            <div class="col-xs-5 col-md-4"> <img src={soccerHomeimage1} alt="pizza"
                                                class="img-responsive" /></div>
                                            <div class="col-xs-7 col-md-8">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                
                                </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-5 col-md-4"> <img src={soccerHomeimage1} alt="pizza"
                                                class="img-responsive" /></div>
                                            <div class="col-xs-7 col-md-8">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                
                                </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-5 col-md-4"> <img src={soccerHomeimage1} alt="pizza"
                                                class="img-responsive" /></div>
                                            <div class="col-xs-7 col-md-8">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                
                                </div>
                                        </div>

                                    </div>
                                    <div class="col-md-4">
                                        <img src={soccerHomeimage1} alt="pizza" class="img-responsive" />
                                    </div>
                                </div>
                            </div>

                            <div class="item" id="carousel_item2">
                                <div class="row">
                                    <div class="col-xs-12 col-md-4"  id="lastmatch_colon">
                                        <p id="last_match_header_text"><b>LAST MATCH</b></p>
                                        <div class="col-xs-4  col-md-4"> <img src={soccerHomeimage1} alt="pizza"
                                            class="img-responsive" /></div>
                                        <div class="col-xs-4  col-md-4">
                                            <button id="last_match_button"><b>0-0</b></button>
                                        </div>
                                        <div class="col-xs-4  col-md-4"> <img src={soccerHomeimage1} alt="pizza"
                                            class="img-responsive" /></div><br />
                                        <div id="match_text">
                                            <p >SKGBUBS VBHXBJGB,HFJ</p>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-8" >
                                        <div class="col-xs-12 col-md-6" id="upcoming_colon">
                                        <p id="upcoming_match_header_text"><b>UPCOMING MATCH</b></p>
                                            <div class="col-xs-4  col-md-4"> <img src={soccerHomeimage1} alt="pizza"
                                                class="img-responsive" /></div>
                                            <div class="col-xs-4  col-md-4">
                                                <button id="upcoming_match_button"><b>VS</b></button>
                                            </div>
                                            <div class="col-xs-4  col-md-4"> <img src={soccerHomeimage1} alt="pizza"
                                                class="img-responsive" /></div>
                                            <div id="match_text">
                                                <p>SKGBUBS VBHXBJGB,HFJ</p>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-md-6" id="upcoming_colon">
                                        <p id="upcoming_match_header_text"><b>UPCOMING MATCH</b></p>
                                            <div class="col-xs-4  col-md-4"> <img src={soccerHomeimage1} alt="pizza"
                                                class="img-responsive" /></div>
                                            <div class="col-xs-4  col-md-4">
                                                <button id="upcoming_match_button"><b>VS</b></button>
                                            </div>
                                            <div class="col-xs-4  col-md-4"> <img src={soccerHomeimage1} alt="pizza"
                                                class="img-responsive" /></div>
                                            <div id="match_text">
                                                <p>SKGBUBS VBHXBJGB,HFJ</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Controls  */}
                        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>

                </div>
            </div><br />



            <div class="row" id="line"></div>


            <div class="container-fluid">
                <div class="row">
                    <a href="#"><button id="more_button">MORE ></button></a>
                    <h2 id="featured-vid-button"><b>Featured Videos</b></h2>
                    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                        {/* Indicators  */}
                        <ol class="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>

                        {/* Wrapper for slides  */}
                        <div class="carousel-inner" role="listbox">
                            <div class="item active">
                                <div class="col-md-3 col-xs-6">
                                    <div class="thumbnail">
                                      <player 
                                      playsInline
                                      poster="/assets/poster.png"
                                      src="https://media.w3.og/2010/05/sintel/trailer_hd.mp4"/>
                                        <div class="caption">
                                            <h3>Thumbnail label</h3>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-xs-6">
                                    <div class="thumbnail">
                                        <img src={soccerHomeimage1} alt="pizza"
                                            class="img-responsive" />
                                        <div class="caption">
                                            <h3>Thumbnail label</h3>
                                             
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-xs-6">
                                    <div class="thumbnail">
                                        <img src={soccerHomeimage1} alt="pizza"
                                            class="img-responsive" />
                                        <div class="caption">
                                            <h3>Thumbnail label</h3> 
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-xs-6">
                                    <div class="thumbnail">
                                        <img src={soccerHomeimage1} alt="pizza"
                                            class="img-responsive" />
                                        <div class="caption">
                                            <h3>Thumbnail label</h3>
                                       
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="item">
                                <div class="col-md-3 col-xs-6">
                                    <div class="thumbnail">
                                        <img src={soccerHomeimage1} alt="pizza"
                                            class="img-responsive" />
                                        <div class="caption">
                                            <h3>Thumbnail label</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-xs-6">
                                    <div class="thumbnail">
                                        <img src={soccerHomeimage1} alt="pizza"
                                            class="img-responsive" />
                                        <div class="caption">
                                            <h3>Thumbnail label</h3>
                                             
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-xs-6">
                                    <div class="thumbnail">
                                        <img src={soccerHomeimage1} alt="pizza"
                                            class="img-responsive" />
                                        <div class="caption">
                                            <h3>Thumbnail label</h3>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-xs-6">
                                    <div class="thumbnail">
                                        <img src={soccerHomeimage1} alt="pizza"
                                            class="img-responsive" />
                                        <div class="caption">
                                            <h3>Thumbnail label</h3>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                  ...
                </div>

                        {/* Controls */}
                        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>



            <div class="container-fluid" id="latest_news">
                <div class="row" id="latest_news_rows">
                    <a href="#" id="latest_news_header_text">
                        <h3><b>Latest News ></b></h3>
                    </a>
                    <div class="col-md-9 col-xs-12">
                        <div class="row"  id="latest_news_rows">
                            <div class="col-md-6 col-xs-12">
                                <div class="row" >
                                    <div class="col-md-4 col-xs-4">
                                        <a href="#"> <img src={soccerHomeimage1} alt="pizza"
                                            class="img-responsive" /></a>
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                        <a href="#" id="transfare_news_sub_headline">
                                            <p>
                                                <b>
                                                    Lorem ipsum dolor sit amet,  adipisicing elit, sed do eiusmod
                                                    
                                </b>
                                            </p>
                                        </a>
                                    </div>
                                </div>

                                <div class="row" >
                                    <div class="col-md-4 col-xs-4">
                                        <a href="#"> <img src={soccerHomeimage1} alt="pizza"
                                            class="img-responsive" /></a>
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                        <a href="#" id="transfare_news_sub_headline">
                                            <p>
                                                <b>
                                                    Lorem ipsum dolor sit amet,  adipisicing elit, sed do eiusmod
                                                    
                                </b>
                                            </p>
                                        </a>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-6 col-xs-12">

                                <div class="row">
                                    <div class="col-md-4 col-xs-4">
                                        <a href="#"> <img src={soccerHomeimage1} alt="pizza"
                                            class="img-responsive" /></a>
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                        <a href="#" id="transfare_news_sub_headline">
                                            <p>
                                                <b>
                                                    Lorem ipsum dolor sit amet,  adipisicing elit, sed do eiusmod
                                                    
                                </b>
                                            </p>
                                        </a>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-4 col-xs-4">
                                        <a href="#"> <img src={soccerHomeimage1} alt="pizza"
                                            class="img-responsive" /></a>
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                        <a href="#" id="transfare_news_sub_headline">
                                            <p>
                                                <b>
                                                    Lorem ipsum dolor sit amet,  adipisicing elit, sed do eiusmod
                                                    
                                </b>
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        


                        <div class="row">
                            <div>
                            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                                {/* Indicators  */}
                                <ol class="carousel-indicators">
                                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                                </ol>

                                {/* Wrapper for slides  */}
                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <div class="col-md-3 col-xs-6">
                                            <div class="thumbnail">
                                                <img src={soccerHomeimage1} alt="pizza"
                                                    class="img-responsive" />
                                                <div class="caption">
                                                   <div class="row">
                                                       <div class="col-md-2">hh</div>
                                                       <div class="col-md-10">bhkzhkdzdh</div>
                                                   </div>
                                        
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-xs-6">
                                            <div class="thumbnail">
                                                <img src={soccerHomeimage1} alt="pizza"
                                                    class="img-responsive" />
                                                <div class="caption">
                                                <div class="row">
                                                       <div class="col-md-2">hh</div>
                                                       <div class="col-md-10">bhkzhkdzdh</div>
                                                   </div>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-xs-6">
                                            <div class="thumbnail">
                                                <img src={soccerHomeimage1} alt="pizza"
                                                    class="img-responsive" />
                                                <div class="caption">
                                                <div class="row">
                                                       <div class="col-md-2">hh</div>
                                                       <div class="col-md-10">bhkzhkdzdh</div>
                                                   </div>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-xs-6">
                                            <div class="thumbnail">
                                                <img src={soccerHomeimage1} alt="pizza"
                                                    class="img-responsive" />
                                                <div class="caption">
                                                <div class="row">
                                                       <div class="col-md-2">hh</div>
                                                       <div class="col-md-10">bhkzhkdzdh</div>
                                                   </div>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="item">
                                        <div class="col-md-3 col-xs-6">
                                            <div class="thumbnail">
                                                <img src={soccerHomeimage1} alt="pizza"
                                                    class="img-responsive" />
                                                <div class="caption">
                                                <div class="row">
                                                       <div class="col-md-2">hh</div>
                                                       <div class="col-md-10">bhkzhkdzdh</div>
                                                   </div>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-xs-6">
                                            <div class="thumbnail">
                                                <img src={soccerHomeimage1} alt="pizza"
                                                    class="img-responsive" />
                                                <div class="caption">
                                                <div class="row">
                                                       <div class="col-md-2">hh</div>
                                                       <div class="col-md-10">bhkzhkdzdh</div>
                                                   </div>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-xs-6">
                                            <div class="thumbnail">
                                                <img src={soccerHomeimage1} alt="pizza"
                                                    class="img-responsive" />
                                                <div class="caption">
                                                <div class="row">
                                                       <div class="col-md-2">hh</div>
                                                       <div class="col-md-10">bhkzhkdzdh</div>
                                                   </div>
                                                 
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-xs-6">
                                            <div class="thumbnail">
                                                <img src={soccerHomeimage1} alt="pizza"
                                                    class="img-responsive" />
                                                <div class="caption">
                                                <div class="row">
                                                       <div class="col-md-2">hh</div>
                                                       <div class="col-md-10">bhkzhkdzdh</div>
                                                   </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                  ...
                </div>

                                {/* Controls */}
                                <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-xs-12">jkmgaebgthghggkjh</div>
            </div>
        
            

           
        </div>
  


        <div class="row" id="advertisment1">

        </div>
 

    {/* ABOUT LEAGUE  */ }
    <div class="row" id="league">
        <div class="col-md-6" id="league_headline">kbjbuibrlhlrugthisbystshustr</div>
        <div class="col-md-6" id="league_headline">tjgnlpghubvghkgvgyubhrgtuyvgtru</div>
    </div>








        <div class="container-fluid">
            <div class="row" id="features_mainRows">
                <a href="#" id="features_header_text">
                    <h3><b>FEATURES ></b></h3>
                </a>

                <div class="col-md-6">
                    <div class="row" id="features_subRows">
                        <div class="col-md-12 col-xs-12">
                            <a href="#"> <img src={soccerHomeimage1} alt="pizza"
                                class="img-responsive" /></a>
                        </div>
                        <div class="col-md-12 col-xs-12">
                            <a href="#" id="transfare_news_main_headline">
                                <p>
                                    <b>
                                        Lorem ipsum dolor sit amet,  adipisicing elit, sed do eiusmod
                                        
                                </b>
                                </p>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                            <a href="#"> <img src={soccerHomeimage1} alt="pizza"
                                class="img-responsive" /></a>
                        </div>
                        <div class="col-md-8 col-xs-7">
                            <a href="#" id="transfare_news_sub_headline">
                                <p>
                                    <b>
                                        Lorem ipsum dolor sit amet,  adipisicing elit, sed do eiusmod
                                        
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
                            <a href="#" id="transfare_news_sub_headline">
                                <p>
                                    <b>
                                        Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod
                                        
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
                            <a href="#" id="transfare_news_sub_headline">
                                <p>
                                    <b>
                                        Lorem ipsum dolor sit amet,adipisicing elit, sed do eiusmod
                                        
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
                            <a href="#" id="transfare_news_sub_headline">
                                <p>
                                    <b>
                                        Lorem ipsum dolor sit amet,  adipisicing elit, sed do eiusmod
                                        
                                </b>
                                </p>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>






        



        <div class="container-fluid" id="transfare_news_container">
            <div class="row" id="features_mainRows">
                <a href="#" id="features_header_text">
                    <h3><b>Transfare News ></b></h3>
                </a>

                <div class="col-md-6">
                    <div class="row" id="features_subRows">
                        <div class="col-md-12 col-xs-12">
                            <a href="#"> <img src={soccerHomeimage1} alt="pizza"
                                class="img-responsive" /></a>
                        </div>
                        <div class="col-md-12 col-xs-12">
                            <a href="#" id="transfare_news_main_headline">
                                <p>
                                    <b>
                                        Lorem ipsum dolor sit amet,  adipisicing elit, sed do eiusmod
                                        
                                </b>
                                </p>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                            <a href="#"> <img src={soccerHomeimage1} alt="pizza"
                                class="img-responsive" /></a>
                        </div>
                        <div class="col-md-8 col-xs-7">
                            <a href="#" id="transfare_news_sub_headline">
                                <p>
                                    <b>
                                        Lorem ipsum dolor sit amet,  adipisicing elit, sed do eiusmod
                                        
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
                            <a href="#" id="transfare_news_sub_headline">
                                <p>
                                    <b>
                                        Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod
                                        
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
                            <a href="#" id="transfare_news_sub_headline">
                                <p>
                                    <b>
                                        Lorem ipsum dolor sit amet,adipisicing elit, sed do eiusmod
                                        
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
                            <a href="#" id="transfare_news_sub_headline">
                                <p>
                                    <b>
                                        Lorem ipsum dolor sit amet,  adipisicing elit, sed do eiusmod
                                        
                                </b>
                                </p>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>













        <div class="container-fluid"  id="footer_first_container"> 

        <section class="bottomFooter">
    <div class="footerText">

        <div class="footer-middleBottom">
            <a title="Go to Privacy Policy" href="http://www.liverpoolfc.com/legal/privacy-policy">Privacy Policy</a> <span>|</span>
            <a title="Go to Terms and Conditions" href="http://www.liverpoolfc.com/legal/terms-and-conditions">Terms and Conditions</a> <span>|</span>
            <a title="Go to Anti-Slavery" href="http://www.liverpoolfc.com/corporate/anti-slavery">Anti-Slavery</a> <span>|</span>
            <a title="Go to Cookies" href="http://www.liverpoolfc.com/legal/cookies">Cookies</a> <span>|</span>
            <a title="Go to Help" href="https://help.liverpoolfc.com/">Help</a> <span>|</span>
            <a title="Go to Browser Support" href="http://www.liverpoolfc.com/corporate/browser-support">Browser Support</a> <span>|</span>
            <a title="Go to RSS Feeds" href="http://www.liverpoolfc.com/corporate/rss-feeds">RSS Feeds</a> <span>|</span>
            <a title="Go to Contact Us" href="http://www.liverpoolfc.com/contactus">Contact Us</a> <span>|</span>
            <a title="Go to Accessibility" href="http://www.liverpoolfc.com/accessible/accessible">Accessibility</a> <br/>
        </div>

        <div class="footer-left">
            &copy; Copyright 2020 The Soccer Angels Football Acadeny . All rights reserved.
        </div>

        <div class="footer-right">
            Developed and maintained by the LFC Technology and Transformation Team
        </div>

        <div class="footer-middle">
            Match Statistics supplied by Opta Sports Data Limited. Reproduced under licence from Football DataCo Limited. All rights reserved.
        </div>

    

</div>


</section>
         </div>
        

          
      
                 </div > 

        );
    }
}

export default Home;







