
import React, {Component} from "react";



import $ from "jquery"



import soccerHomeimage1 from '../soccer/photos/soccer1.JPG'
import soccerHomeimage2 from '../soccer/photos/soccer30.jpg'
import soccerHomeimage3 from '../soccer/photos/soccer14.JPG'
import soccerangelslogo from '../soccer/photos/soccerangelslogo.JPG'
import Chairmanshipposition from '../soccer/photos/chaimanship.JPG'
import jerseyimage1 from '../soccer/photos/Picture8.jpg'
import jerseyimage2 from '../soccer/photos/Picture9.jpg'
import jerseyimage3 from '../soccer/photos/Picture7.jpg'
import jerseyimage5 from '../soccer/photos/Picture2.gif'
import jerseygrid from '../soccer/photos/0.gif'
import jerseyimage4 from '../soccer/photos/Picture10.jpg'

// profile images
import appiah from '../soccer/photos/Appiah.JPG'
import elvis  from '../soccer/photos/Elvis.JPG'
import cosmos from '../soccer/photos/cosmos.JPG'
import andrews from '../soccer/photos/Andrews.JPG'
import richmond from '../soccer/photos/Richmond.JPG'
import shargaa from '../soccer/photos/shargaa.JPG'
import theophilus from '../soccer/photos/theophilus.JPG'
import cobby from '../soccer/photos/cobby.JPG'


import video1 from "../components/video/vid2.MP4"




import {

    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  
  } from "react-router-dom";


class Home extends Component {
    render() {


        
                
        $(document).ready(function () {
            var itemsMainDiv = ('.MultiCarousel');
            var itemsDiv = ('.MultiCarousel-inner');
            var itemWidth = "";
        
            $('.leftLst, .rightLst').click(function () {
                var condition = $(this).hasClass("leftLst");
                if (condition)
                    click(0, this);
                else
                    click(1, this)
            });
        
           ResCarouselSize();
        
        
        
        
            $(window).resize(function () {
                ResCarouselSize();
            });
        
            //this function define the size of the items
            function ResCarouselSize() {
                var incno = 0;
                var dataItems = ("data-items");
                var itemClass = ('.item');
                var id = 0;
                var btnParentSb = '';
                var itemsSplit = '';
                var sampwidth = $(itemsMainDiv).width();
                var bodyWidth = $('body').width();
                $(itemsDiv).each(function () {
                    id = id + 1;
                    var itemNumbers = $(this).find(itemClass).length;
                    btnParentSb = $(this).parent().attr(dataItems);
                    itemsSplit = btnParentSb.split(',');
                    $(this).parent().attr("id", "MultiCarousel" + id);
        
        
                    if (bodyWidth >= 1200) {
                        incno = itemsSplit[3];
                        itemWidth = sampwidth / incno;
                    }
                    else if (bodyWidth >= 992) {
                        incno = itemsSplit[2];
                        itemWidth = sampwidth / incno;
                    }
                    else if (bodyWidth >= 768) {
                        incno = itemsSplit[1];
                        itemWidth = sampwidth / incno;
                    }
                    else {
                        incno = itemsSplit[0];
                        itemWidth = sampwidth / incno;
                    }
                    $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
                    $(this).find(itemClass).each(function () {
                        $(this).outerWidth(itemWidth);
                    });
        
                    $(".leftLst").addClass("over");
                    $(".rightLst").removeClass("over");
        
                });
            }
        
        
            //this function used to move the items
            function ResCarousel(e, el, s) {
                var leftBtn = ('.leftLst');
                var rightBtn = ('.rightLst');
                var translateXval = '';
                var divStyle = $(el + ' ' + itemsDiv).css('transform');
                var values = divStyle.match(/-?[\d\.]+/g);
                var xds = Math.abs(values[4]);
                if (e == 0) {
                    translateXval = parseInt(xds) - parseInt(itemWidth * s);
                    $(el + ' ' + rightBtn).removeClass("over");
        
                    if (translateXval <= itemWidth / 2) {
                        translateXval = 0;
                        $(el + ' ' + leftBtn).addClass("over");
                    }
                }
                else if (e == 1) {
                    var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
                    translateXval = parseInt(xds) + parseInt(itemWidth * s);
                    $(el + ' ' + leftBtn).removeClass("over");
        
                    if (translateXval >= itemsCondition - itemWidth / 2) {
                        translateXval = itemsCondition;
                        $(el + ' ' + rightBtn).addClass("over");
                    }
                }
                $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
            }
        
            //It is used to get some elements from btn
            function click(ell, ee) {
                var Parent = "#" + $(ee).parent().attr("id");
                var slide = $(Parent).attr("data-slide");
                ResCarousel(ell, Parent, slide);
            }
        
        });
          
          
          


        return (
            <div id="body">

                <header class="container-fluid">        
                 <div class="row" >
                    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                        
                        <ol class="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>

                        
                        <div class="carousel-inner carousel-content" role="listbox">
                            <div class="row" id="line"></div>
                            <div class="item active"  id="carousel_item1" >
                            <div class="row">
                                    <div class="col-xs-12 col-md-4"  id="lastmatch_colon">
                                        <p id="last_match_header_text"><b>LAST MATCH</b></p>
                                        <div class="col-xs-4  col-md-4"> <img src={soccerangelslogo} alt="pizza"
                                            class="img-responsive" /><p >Soccer Angels Academy</p></div>
                                        <div class="col-xs-4  col-md-4">
                                            <button id="last_match_button"><b>2-2</b></button>
                                        </div>
                                        <div class="col-xs-4  col-md-4"> <img src={soccerHomeimage1} alt="pizza"
                                            class="img-responsive" /><p ></p>Coperative Utd</div><br />
                                       
                                    </div>
                                    <div class="col-xs-12 col-md-8" >
                                        <div class="col-xs-12 col-md-6" id="upcoming_colon">
                                        <p id="upcoming_match_header_text"><b>UPCOMING MATCH</b></p>
                                            <div class="col-xs-4  col-md-4"> <img src={soccerHomeimage1} alt="pizza"
                                                class="img-responsive" /><p >Suampongman Utd</p></div>
                                            <div class="col-xs-4  col-md-4">
                                                <button id="upcoming_match_button"><b>VS</b></button>
                                            </div>
                                            <div class="col-xs-4  col-md-4"> <img src={soccerangelslogo} alt="pizza"
                                                class="img-responsive" /><p >  Soccer Angels Academy</p></div>
                                            <div id="match_text">
                                              
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-md-6" id="upcoming_colon">
                                        <p id="upcoming_match_header_text"><b>UPCOMING MATCH</b></p>
                                            <div class="col-xs-4  col-md-4"> <img src={soccerangelslogo} alt="pizza"
                                                class="img-responsive" /><p >Soccer Angels Academy</p></div>
                                            <div class="col-xs-4  col-md-4">
                                                <button id="upcoming_match_button"><b>VS</b></button>
                                            </div>
                                            <div class="col-xs-4  col-md-4"> <img src={soccerHomeimage1} alt="pizza"
                                                class="img-responsive" /><p >Twifo Wasko</p></div>
                                            <div id="match_text">
                                                
                                            </div>
                                        </div>
                               
                                       </div>

                            <div class="item">
                                
                                    </div>
                                </div>
                            </div>
                        </div>

                        
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
                </header>
 














 



           <section className="container-fluid"> 
                  <div className="row" >
                    <Link to="/seatvgo"><button id="more_button">MORE</button> </Link>
                    <h2><b>Featured Videos</b></h2>
                    </div>       
                <div className="row">                
                        <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video> </div>
                        <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                        <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>
                        <div className="col-md-3 col-xs-6"><video src={video1} className="img-responsive" controls></video></div>                                
                </div>
            </section>
 












          
            


          <section  class="container-fluid" id="latest_news">
              <div className="row">
              <Link to="#"> <h2><b>Latest News</b></h2></Link>                   
              </div>
            
                <div class="row" id="latest_news_rows">                 
                    <div class="col-md-9 col-xs-12">
                        <div class="row"  id="latest_news_rows">
                            <div class="col-md-6 col-xs-12">
                                <div class="row" >
                                    <div class="col-md-4 col-xs-4">
                                        <a href="#"> <img src={Chairmanshipposition} alt="pizza"
                                            class="img-responsive" /></a>
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                        <a href="#" id="latest_news_sub_headline" style={{textDecoration:"none",fontFamily:"sans serif"}}>
                                            <p>
                                                <b>
                                                    The C.E.O of Soccer Angels Academy is the new Assin district football association chairman
                                                    
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
                                        <a href="#" id="latest_news_sub_headline" style={{textDecoration:"none",fontFamily:"sans serif"}}>
                                            <p>
                                                <b>
                                                    Dreams Football Club has officially signed Soccer Angels
                                                     supper star Percious Boah on a four year long deal from
                                                      Soccer Angels Academy.
                                                    
                                                 </b>
                                            </p>
                                        </a>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-6 col-xs-12">

                                <div class="row">
                                    <div class="col-md-4 col-xs-4">
                                        <a href="#"> <img src={jerseyimage1} alt="pizza"
                                            class="img-responsive" /></a>
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                        <a href="#" id="latest_news_sub_headline" style={{textDecoration:"none",fontFamily:"sans serif"}}>
                                            <p>
                                                <b>
                                                    Soccer Angels unviel its new jersey for the 2020-2021
                                                    league
                                                    
                                               </b>
                                            </p>
                                        </a>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-4 col-xs-4">
                                        <a href="#"> <img src={jerseyimage2} alt="pizza"
                                            class="img-responsive" /></a>
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                        <a href="#" id="latest_news_sub_headline" style={{textDecoration:"none",fontFamily:"sans serif"}}>
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

           
                       <div class="col-md-3 col-xs-12">
                         <div className="row" style={{minHeight:"200px",}}>
                            <a href="#"> <img src={jerseygrid} alt="pizza" class="img-responsive" /> </a>                 
                        </div>
                        </div>
                 
                 </div>              
         </section> 
  















    <div className="line"></div>

    {/* ABOUT LEAGUE */ }  
    <section> 
    <div className="container-fluid   league" >
       <div className="row">
           <div className="col-md-6">fghjkbvcxcvbnm,.,mn</div>
           <div className="col-md-6  league_second_colon" >
               <h1><b>OFFICIALL ANOUNCEMENT</b></h1>
               <ul>
                   <li>ISSAC ENTSIE</li>
                   <li>BENJAMIN APPIAH</li>
                   <li>PRINCE MAHAMA</li>
                   <li>MILLER AUGUSTINE</li>
                   <li>ERNEST OPPONG</li>
                 
               </ul>
               <h1><b>JOINS THE SENIOR SIDE OF SOCCER ANGELS ACADEMY</b></h1>
           </div>
       </div>
       </div>
   </section>

   <div className="line"></div>
 





















  <section class="container-fluid">
   
       <div class="row">
       <div>
         <div class="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
            <div class="MultiCarousel-inner">
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                    <Link to="/appiah">   <img src={appiah} alt="pizza"  class="img-responsive" /> </Link>   
                      <div class="card-body">
                      <h4><strong>3</strong></h4>
                      <h5><b>Daniel</b></h5>   
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                    <Link to="/appiah">   <img src={appiah} alt="pizza"  class="img-responsive" /> </Link>               
                      <div class="card-body">
                     <h4><strong>3</strong></h4>
                      <h5><b>Daniel</b></h5>   
                      </div>
                     </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                    <Link to="/richmond">   <img src={richmond} alt="pizza"  class="img-responsive" /> </Link>   
                      <div class="card-body">
                      <h4><strong>3</strong></h4>
                      <h5><b>Richmond</b></h5>   
                      </div>
                     </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                    <Link to="/theophilus">   <img src={theophilus} alt="pizza"  class="img-responsive" /> </Link>   
                      <div class="card-body">
                      <h4><strong>3</strong></h4>
                      <h5><b>Theophilus</b></h5>   
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                    <Link to="/elvis">   <img src={elvis} alt="pizza"  class="img-responsive" /> </Link>   
                      <div class="card-body">
                      <h4><strong>3</strong></h4>
                      <h5><b>Elvis</b></h5>   
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                    <Link to="/cosmos">   <img src={cosmos} alt="pizza"  class="img-responsive" /> </Link>   
                      <div class="card-body">
                      <h4><strong>3</strong></h4>
                      <h5><b>Daniel</b></h5>   
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                    <Link to="/andrews">   <img src={andrews} alt="pizza"  class="img-responsive" /> </Link>   
                      <div class="card-body">
                      <h4><strong>3</strong></h4>
                      <h5><b>Andrews</b></h5>   
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                    <Link to="/enock">   <img src={shargaa} alt="pizza"  class="img-responsive" /> </Link>   
                      <div class="card-body">
                      <h4><strong>3</strong></h4>
                      <h5><b>Daniel</b></h5>   
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                    <Link to="/cobby">   <img src={cobby} alt="pizza"  class="img-responsive" /> </Link>   
                      <div class="card-body">
                      <h4><strong>3</strong></h4>
                      <h5><b>Cobby</b></h5>   
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                    <Link to="/appiah">   <img src={appiah} alt="pizza"  class="img-responsive" /> </Link>   
                      <div class="card-body">
                      <h4><strong>3</strong></h4>
                      <h5><b>Daniel</b></h5>   
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                    <Link to="/appiah">   <img src={appiah} alt="pizza"  class="img-responsive" /> </Link>   
                      <div class="card-body">
                      <h4><strong>3</strong></h4>
                      <h5><b>Daniel</b></h5>   
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                    <Link to="/appiah">   <img src={appiah} alt="pizza"  class="img-responsive" /> </Link>   
                      <div class="card-body">
                      <h4><strong>3</strong></h4>
                      <h5><b>Daniel</b></h5>   
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                    <Link to="/appiah">   <img src={appiah} alt="pizza"  class="img-responsive" /> </Link>   
                      <div class="card-body">
                      <h4><strong>3</strong></h4>
                      <h5><b>Daniel</b></h5>   
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                    <Link to="/appiah">   <img src={appiah} alt="pizza"  class="img-responsive" /> </Link>   
                      <div class="card-body">
                      <div className="col-md-2">34</div>
                     <div className="col-md-10"><b>Daniel</b></div>
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                    <Link to="/appiah">   <img src={appiah} alt="pizza"  class="img-responsive" /> </Link>   
                      <div class="card-body">
                      <div className="col-md-2">34</div>
                     <div className="col-md-10"><b>Daniel</b></div>
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                    <Link to="/appiah">   <img src={appiah} alt="pizza"  class="img-responsive" /> </Link>   
                      <div class="card-body">
                      <div className="col-md-2">34</div>
                     <div className="col-md-10"><b>Daniel</b></div>
                      </div>
                 </div>
                    </div>
                </div>
            </div>
               <button class="btn  leftLst" id="btne"><span className="glyphicon glyphicon-menu-left"></span> </button>
                 <button class="btn  rightLst" id="btne"><span className="glyphicon glyphicon-menu-right"></span> </button>
                       
                 </div>
             </div>
       </div>
   </section>
 
   <div className="line"></div>









 


     
         <section class="container-fluid">
         <div className="row">
              <Link to="#"> <h2><b>Features</b></h2></Link>                   
              </div>
   
            <div class="row" id="features_mainRows">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-12 col-xs-12" style={{padding:"40px"}}>
                            <a href="#"> <img src={jerseyimage1} alt="pizza"
                                class="img-responsive"/></a>
                                <div className="line"></div>
                        </div>
                        <div class="col-md-12 col-xs-12">
                             <h4 className=" features_main_headline"> Soccer Angels new home kit </h4>
                        </div>
                    </div>
                </div>


                <div class="col-md-6">
                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                            <a href="#"> <img src={jerseyimage2} alt="pizza"
                                class="img-responsive" /></a>
                        </div>
                        <div class="col-md-8 col-xs-7 ">
                                <p className="features_sub_headline">     
                                        Soccer Angels men's tracksuit                                       
                                </p>    
                        </div>
                    </div>

                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                            <a href="#"> <img src={jerseyimage5} alt="pizza"
                                class="img-responsive" /></a>
                        </div>
                        <div class="col-md-8 col-xs-7">
                            <p className="features_sub_headline">     
                                Soccer Angels away jersey kit                                             
                           </p>                         
                        </div>
                    </div>

                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                            <a href="#"> <img src={jerseyimage3} alt="pizza"
                                class="img-responsive" /></a>
                        </div>
                        <div class="col-md-8 col-xs-7">
                           <p className="features_sub_headline">     
                               Soccer angels goalkeeper's training kit                                            
                           </p> 
                            
                        </div>
                    </div>
                   
                    
                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                            <a href="#"> <img src={jerseyimage4} alt="pizza"
                                class="img-responsive" /></a>
                        </div>
                        <div class="col-md-8 col-xs-7">
                           <p className="features_sub_headline">     
                              Soccer Angels shake up kit                                           
                           </p> 
                            
                        </div>
                    </div> 
                </div>
            </div>
        </section>
 


























     <section class="container-fluid" id="transfare_news_container">
         <div className="row">
              <Link to="#"> <h2><b>Transfare News</b></h2></Link>                   
              </div>
         

            <div className="row" id="features_mainRows">
                <div className="col-md-6">
                    <div className="row" id="features_subRows">
                        <div className="col-md-12 col-xs-12">
                            <a href="#"> <img src={soccerHomeimage3} alt="pizza"
                                class="img-responsive" /></a>
                                  <div className="line"></div>
                        </div>
                        <div className="col-md-12 col-xs-12">
                        <div class="col-md-12 col-xs-12">
                             <h4 className=" features_main_headline">
                                  Soccer angels could look for creative solution to solve a tranfare problem 
                             </h4>
                          </div>
                            
                        </div>  
                    </div>
                </div>

                <div class="col-md-6">

                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                            <a href="#"> <img src={soccerHomeimage2} alt="pizza"
                                class="img-responsive" />
                            </a>
                        </div>
                        <div class="col-md-8 col-xs-7">
                            <a href="#" id="transfare_news_sub_headline" style={{textDecoration:"none", fontFamily:"sans serif"}}>
                             <h4><b>OFFICIAL:PERCIOUS BOAH JOINS DREAMS FC</b> </h4>
                                <p>
                                    <b>
                                      Percious Boah welcomes Dreams fc move, but Soccer Angels Academy
                                       will recognise truth about his trajectory  
                                     </b>
                                </p>
                            </a>
                        </div>
                    </div>

                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                            <a href="#"> <img src={soccerHomeimage1} alt="pizza"
                                class="img-responsive" />
                            </a>
                        </div>
                        <div class="col-md-8 col-xs-7">
                            <a href="#" id="transfare_news_sub_headline" style={{textDecoration:"none", fontFamily:"sans serif"}}>
                                <h4><b>OFFICIAL:JUSTICE ASAMOAH JOINS SOCCER ANGELS</b> </h4>
                                <p>
                                    <b>
                                      Soccer Angels has officcially signed Justice Asamoah from Mighty Ocean       
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
                            <a href="#" id="transfare_news_sub_headline" style={{textDecoration:"none", fontFamily:"sans serif"}}>
                            <h4><b>OFFICIAL:GODFRED AMOAKOH BOATENG JOINS SOCCER ANGELS</b> </h4>
                                <p>
                                 <b>
                                   Soccer Angels has officcially signed Godfred Amoakoh Boateng from Victory fc       
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
                            <a href="#" id="transfare_news_sub_headline" style={{textDecoration:"none", fontFamily:"sans serif"}}>
                            <h4><b>OFFICIAL:MUSTAPHA OSMAN JOINS SOCCER ANGELS</b> </h4>
                                <p>
                                 <b>
                                   Soccer Angels has officcially signed Mustapha Osman from Lakers fc       
                                </b>
                                </p>
                            </a>
                        </div>
                    </div>

                                
                       </div>   
                    </div>
            </section> 









   <footer class="container-fluid" id="footer-container">
        <div class="row" id="contacts">
            <h3 style={{color:"#fff"}}>Contact us</h3>
            <span><i class="fa fa-envelope"><a href="mailto:appiagyeialfred815@gmail.com?
            subject=hello%20everyone%20">soccerangels@email.com</a></i></span>
            <span><i class="fa fa-envelope">Nname@domain.com</i></span>
            <span><i class="fa fa-phone"></i>#########/#######</span>         
       </div>
        <div className="row " id="footer-first-row">
             <span><a href="https://twitter.com/SoccerAngelAca1"><i class="fa fa-twitter"></i></a></span> 
             <span><a href="https://web.facebook.com/Soccer-Angels-Academy-115197873244725/"><i class="fa fa-facebook"></i></a></span> 
             <span><a  href="https://www.youtube.com/channel/UC6AD72yTtZpE7ox25eb6GZg" ><i class="fa fa-youtube"></i></a></span> 
             <span><a href="https://www.instagram.com/p/CAIWNzvF676/"><i class="fa fa-instagram"></i></a></span>  
           </div>      
      
      </footer>

     </div>     
      
 


      

        );
    }
}

export default Home;







