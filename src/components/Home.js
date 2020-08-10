
import React, {Component} from "react";



import $ from "jquery"

import soccerHomeimage1 from '../soccer/photos/soccer1.JPG'
import soccerHomeimage2 from '../soccer/photos/soccer31.jpg'
import soccerHomeimage3 from '../soccer/photos/soccer14.JPG'
import soccerangelslogo from '../soccer/photos/soccerangelslogo.JPG'
import Chairmanshipposition from '../soccer/photos/chaimanship.JPG'
import jerseyimage1 from '../soccer/photos/Picture8.jpg'
import jerseyimage2 from '../soccer/photos/Picture9.jpg'
import jerseyimage3 from '../soccer/photos/Picture7.jpg'
import jerseyimage5 from '../soccer/photos/Picture2.gif'
import jerseygrid from '../soccer/photos/0.gif'
import jerseyimage4 from '../soccer/photos/Picture10.jpg'
import asante from '../soccer/photos/W-asante.JPG'
import pressrelease from '../soccer/photos/press.JPG'
import justify from '../soccer/photos/justify.JPG'
import jayjay from '../soccer/photos/jayjay.JPG'
// profile images
import appiah from '../soccer/photos/Appiah.JPG'
import elvis  from '../soccer/photos/Elvis.JPG'
import cosmos from '../soccer/photos/cosmos.JPG'
import andrews from '../soccer/photos/Andrews.JPG'
import richmond from '../soccer/photos/Richmond.JPG'
import shargaa from '../soccer/photos/shargaa.JPG'
import theophilus from '../soccer/photos/theophilus.JPG'
import cobby from '../soccer/photos/cobby.JPG'
import ketu from '../soccer/photos/Ketu.JPG'









import {

    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  
  } from "react-router-dom";
import Footer from "./Footer";


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
                var values = divStyle.match(/-?[\d.]+/g);
                var xds = Math.abs(values[4]);
                if (e === 0) {
                    translateXval = parseInt(xds) - parseInt(itemWidth * s);
                    $(el + ' ' + rightBtn).removeClass("over");
        
                    if (translateXval <= itemWidth / 2) {
                        translateXval = 0;
                        $(el + ' ' + leftBtn).addClass("over");
                    }
                }
                else if (e === 1) {
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


        // FEATURED VIDEOS

           
                
        $(document).ready(function () {
            var itemsMainDiv = ('.vidMultiCarousel');
            var itemsDiv = ('.vidMultiCarousel-inner');
            var itemWidth = "";
        
            $('.leftslide, .rightslide').click(function () {
                var condition = $(this).hasClass("leftslide");
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
                var itemClass = ('.video');
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
                    $(this).parent().attr("id", "vidMultiCarousel" + id);
        
        
                    if (bodyWidth >= 1200) {
                        incno = itemsSplit[2];
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
        
                    $(".leftslide").addClass("over");
                    $(".rightslide").removeClass("over");
        
                });
            }
        
        
            //this function used to move the items
            function ResCarousel(e, el, s) {
                var leftBtn = ('.leftslide');
                var rightBtn = ('.rightslide');
                var translateXval = '';
                var divStyle = $(el + ' ' + itemsDiv).css('transform');
                var values = divStyle.match(/-?[\d.]+/g);
                var xds = Math.abs(values[4]);
                if (e === 0) {
                    translateXval = parseInt(xds) - parseInt(itemWidth * s);
                    $(el + ' ' + rightBtn).removeClass("over");
        
                    if (translateXval <= itemWidth / 2) {
                        translateXval = 0;
                        $(el + ' ' + leftBtn).addClass("over");
                    }
                }
                else if (e === 1) {
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
            <div className="body">
                <div className="container-fluid justify">
                    <div className="container justifyimg_container">
                        <img src={justify} alt="justify" className="img-responsive" style={{margin:"auto"}}></img>
                    </div>
                </div>

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
                                    <div className="row" style={{minHeight:"200px",}}>
                                    <img src={jerseygrid} alt="jersaecollection" class="img-responsive"  />                 
                        </div>
                                       
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

                    </div>
                </div>
                </header>
 














 



           <section className="container-fluid"> 
                  <div className="row" >
                    <Link to="/seatvgo"><button id="more_button">MORE</button> </Link>
                    <Link to="#"  className="header"> <h2>Featured videos</h2></Link> 
                    </div>       
                <div className="row">
                <div>
         <div class="vidMultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
            <div class="vidMultiCarousel-inner">
                <div class="video">
                    <div class="pad15">
                     <div class="thumbnail">
                     <iframe width="560" title="soccerangels" height="315" src="https://www.youtube.com/embed/_-Oe7lq0tBc?rel=0" className="img-responsive" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                     </iframe>
                        <div class="caption">
                        <Link to="/"> <h5><b>Thumbnail label</b></h5></Link> 
                        <p>...</p>
                        </div>  

                        </div>
                    </div>
                </div>
                <div class="video">
                    <div class="pad15">
                     <div class="thumbnail">
                     <iframe width="560" height="315" title="soccerangels" src="https://www.youtube.com/embed/Hz1m-qHj7cI?rel=0" frameborder="0"  className="img-responsive" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                     </iframe>
                    <div class="caption">
                    <Link to="/"> <h5><b>Thumbnail label</b></h5></Link> 
                        <p>...</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div class="video">
                    <div class="pad15">
                    <div class="thumbnail">
                    <iframe width="560" height="315" title="soccerangels" className="img-responsive" src="https://www.youtube.com/embed/mVVehlZoBU8?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>                
                    <div class="caption">
                    <Link to="/"> <h5><b>Thumbnail label</b></h5></Link> 
                        <p>...</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div class="video">
                    <div                    class="pad15">
                    <div class="thumbnail">
                    <iframe width="560" height="315" title="soccerangels" className="img-responsive" src="https://www.youtube.com/embed/GbJDh_-DHfY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                    </iframe>
                    <div class="caption">
                    <Link to="/"> <h5><b>Thumbnail label</b></h5></Link> 
                        <p>...</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div class="video">
                    <div class="pad15">
                    <div class="thumbnail">
                    ......
                    <div class="caption">
                    <Link to="/"> <h5><b>Thumbnail label</b></h5></Link> 
                        <p>...</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div class="video">
                    <div class="pad15">
                    <div class="thumbnail">
                    ......
                    <div class="caption">
                    <Link to="/"> <h5><b>Thumbnail label</b></h5></Link> 
                        <p>...</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div class="video">
                    <div class="pad15">
                    <div class="thumbnail">
                   ..............
                    <div class="caption">
                    <Link to="/"> <h5><b>Thumbnail label</b></h5></Link> 
                        <p>...</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div class="video">
                    <div class="pad15">
                    <div class="thumbnail">
                   ..............
                    <div class="caption">
                    <Link to="/"> <h5><b>Thumbnail label</b></h5></Link> 
                        <p>...</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div class="video">
                    <div class="pad15">
                    <div class="thumbnail">
                    ................
                    <div class="caption">
                    <Link to="/"> <h5><b>Thumbnail label</b></h5></Link> 
                        <p>...</p>
                    </div>
                    </div>
                    </div>
                </div>
                
                
            </div>
               <button class="btn  leftslide" id="btne"><span className="glyphicon glyphicon-menu-left"></span> </button>
                 <button class="btn  rightslide" id="btne"><span className="glyphicon glyphicon-menu-right"></span> </button>
                       
                 </div>
             </div>
                </div>
            </section>
 







 

          <section  class="container-fluid" id="latest_news">
              <div className="row">
              <Link to="#"  className="header"> <h2>Latest News</h2></Link>                   
              </div>
            
                <div class="row" id="latest_news_rows">                 
                    <div class="col-md-9 col-xs-12">
                        <div class="row"  id="latest_news_rows">
                            <div class="col-md-6 col-xs-12">
                                <div class="row" >
                                    <div class="col-md-4 col-xs-4">
                                    <div className="row">
                                       <Link to="#"><img src={Chairmanshipposition} alt="pizza"
                                            class="img-responsive" /></Link>                   
                                     </div>
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                    <p className="latest_news_sub_headline">     
                                         The C.E.O of Soccer Angels Academy is the new Assin district football association chairman                                     
                                    </p>   
                                    </div>
                                </div>
                                <hr/>
                                <div class="row" >
                                    <div class="col-md-4 col-xs-4">
                                    <Link to="#"><img src={soccerHomeimage2} alt="pizza"
                                            class="img-responsive" /></Link>  
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                    <p className="latest_news_sub_headline">     
                                    Dreams Football Club has officially signed Soccer Angels  supper star Percious Boah on a four year long deal from
                                     Soccer Angels Academy.
                                                                                    
                                    </p>   
                                    </div>
                                </div>
                                <hr/>
                                <div class="row" >
                                    <div class="col-md-4 col-xs-4">
                                    <Link to="#"><img src={asante} alt="pizza"
                                            class="img-responsive" /></Link>  
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                    <p className="latest_news_sub_headline">     
                                       Soccer Angels Academy has officcially appointed Mr.WILLIAM ASANTE as the new 
                                       communication director of the team.
                                                                                    
                                    </p>   
                                    </div>
                                </div>
                                <hr/>

                                <div class="row" >
                                    <div class="col-md-4 col-xs-4">
                                    <Link to="#"><img src={asante} alt="pizza"
                                            class="img-responsive" /></Link>  
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                    <p className="latest_news_sub_headline">     
                                       Soccer Angels Academy has officcially appointed NANA KWAKU PASCAL (Head of sports, SPLASH FM) as
                                       Communication Team member .
                                                                                    
                                    </p>   
                                    </div>
                                </div>


                            </div>

                            <div class="col-md-6 col-xs-12">

                                <div class="row">
                                    <div class="col-md-4 col-xs-4">
                                    <Link to="#"><img src={jerseyimage1} alt="pizza"
                                            class="img-responsive" /></Link>  
                                       
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                    <p className="latest_news_sub_headline">     
                                    Soccer Angels unviel its new jersey for the 2020-2021  league                                                                                                       
                                    </p>   
                                       
                                    </div>
                                </div>
                                <hr/>
                                <div class="row">
                                    <div class="col-md-4 col-xs-4">
                                    <Link to="#"><img src={jerseyimage2} alt="pizza"
                                            class="img-responsive" /></Link>  
                                       
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                    <p className="latest_news_sub_headline">     
                                        Soccer Angels home tracksuit                                                                                                     
                                    </p>                                         
                                    </div>
                                </div>
                                  <hr/>
                                <div class="row">
                                    <div class="col-md-4 col-xs-4">
                                    <Link to="#"><img src={jayjay} alt="pizza"
                                            class="img-responsive" /></Link>  
                                       
                                    </div>
                                    <div class="col-md-8 col-xs-8">
                                    <p className="latest_news_sub_headline">     
                                       Soccer Angels Academy has officcially appointed JAY JAY (Sports presenter at NKWA FM) as the new 
                                       Deputy communication director of the team.                                                                                                   
                                    </p>                                         
                                    </div>
                                </div>
                              
                            </div>
                          </div>
                        </div>



                        

           
                       <div class="col-md-3 col-xs-12">
                         <div className="row" style={{minHeight:"200px",}}>
                             <img src={jerseygrid} alt="jersaecollection" class="img-responsive" />                 
                        </div>
                        </div>
                 
                 </div>              
         </section> 
  















    <div className="line"></div>

    {/* ABOUT LEAGUE */ }  
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
                      <h5><b>Cosmos</b></h5>   
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
                      <h5><b>Enock</b></h5>   
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
                    <Link to="/ketu">   <img src={ketu} alt="pizza"  class="img-responsive" /> </Link>   
                      <div class="card-body">
                      <h4><strong>3</strong></h4>
                      <h5><b>Ketu</b></h5>   
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
                
               
            </div>
               <button class="btn  leftLst" id="btne"><span className="glyphicon glyphicon-menu-left"></span> </button>
                 <button class="btn  rightLst" id="btne"><span className="glyphicon glyphicon-menu-right"></span> </button>
                       
                 </div>
             </div>
       </div>
   </section>
 
   <div className="line"></div>









 


     
         <section class="container-fluid" id="features">
         <div className="row">
              <Link to="#"  className="header"> <h2>Features</h2></Link>                   
              </div>
   
            <div class="row" id="features_mainRows">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-12 col-xs-12" style={{padding:"40px"}}>
                        <Link to="#"> <img src={jerseyimage1} alt="pizza" class="img-responsive"/></Link>      
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
                        <Link to="#"> <img src={jerseyimage2} alt="pizza" class="img-responsive"/></Link>     
                            
                        </div>
                        <div class="col-md-8 col-xs-7 ">
                                <p className="features_sub_headline">     
                                        Soccer Angels men's tracksuit                                       
                                </p>    
                        </div>
                    </div>

                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                        <Link to="#"> <img src={jerseyimage5} alt="pizza" class="img-responsive"/></Link>     
                            
                        </div>
                        <div class="col-md-8 col-xs-7">
                            <p className="features_sub_headline">     
                                Soccer Angels away jersey kit                                             
                           </p>                         
                        </div>
                    </div>

                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                        <Link to="#"> <img src={jerseyimage3} alt="pizza" class="img-responsive"/></Link>     
                            
                        </div>
                        <div class="col-md-8 col-xs-7">
                           <p className="features_sub_headline">     
                               Soccer angels goalkeeper's training kit                                            
                           </p> 
                            
                        </div>
                    </div>
                   
                    
                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                        <Link to="#"> <img src={jerseyimage4} alt="pizza" class="img-responsive"/></Link>     
 
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
 


























     <section class="container-fluid" id="transfare_news">
         <div className="row">
              <Link to="#" className="header"> <h2>Transfare News</h2></Link>                   
              </div>
         

            <div className="row" id="features_mainRows">
                <div className="col-md-6">
                    <div className="row" id="features_subRows">
                        <div className="col-md-12 col-xs-12">
                        <Link to="#"> <img src={soccerHomeimage3} alt="angels" class="img-responsive"/></Link>                            
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
                         <Link to="#"> <img src={soccerHomeimage2} alt="pizza" class="img-responsive"/></Link> 
                           
                        </div>
                        
                        <div class="col-md-8 col-xs-7 transfare_news_sub_headline">
                        <Link to="#">
                          <h4><b>OFFICIAL:PERCIOUS BOAH JOINS DREAMS FC</b> </h4>
                                <p>   
                                 Percious Boah welcomes Dreams fc move, but Soccer Angels Academy 
                                 will recognise truth about his trajectory                   
                                </p>
                        </Link> 
                        </div>    
                    </div>

                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                        <Link to="#"> <img src={soccerHomeimage1} alt="pizza" class="img-responsive"/></Link> 
                            
                        </div>
                        <div class="col-md-8 col-xs-7 transfare_news_sub_headline">
                        <Link to="#">
                        <h4><b>OFFICIAL:JUSTICE ASAMOAH JOINS SOCCER ANGELS</b> </h4>
                                <p>   
                                   Soccer Angels has officcially signed Godfred Amoakoh Boateng from Victory fc                 
                                </p>
                        </Link> 
                        </div>          
                    </div>

                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                        <Link to="#"> <img src={soccerHomeimage1} alt="pizza" class="img-responsive"/></Link> 
                            
                        </div>
                        <div class="col-md-8 col-xs-7 transfare_news_sub_headline">
                        <Link to="#">
                            <h4><b>OFFICIAL:GODFRED AMOAKOH BOATENG JOINS SOCCER ANGELS</b> </h4>
                                <p>   
                                   Soccer Angels has officcially signed Godfred Amoakoh Boateng from Victory fc                 
                                </p>
                        </Link> 
                        </div>
                    </div>

                    <div class="row" id="features_subRows">
                        <div class="col-md-4 col-xs-5">
                        <Link to="#"> <img src={soccerHomeimage1} alt="pizza" class="img-responsive"/></Link> 
                           
                        </div>
                        <div class="col-md-8 col-xs-7 transfare_news_sub_headline">
                        <Link to="#">
                            <h4><b>OFFICIAL:MUSTAPHA OSMAN JOINS SOCCER ANGELS</b> </h4>
                                <p>                                
                                   Soccer Angels has officcially signed Mustapha Osman from Lakers fc       
                                </p>
                        </Link> 
                        </div>
                    </div>

                                
                       </div>   
                    </div>
            </section> 









   <footer class="container-fluid footer-container">
           <Footer/>
      </footer>

     </div>     
      
 


      

        );
    }
}

export default Home;







