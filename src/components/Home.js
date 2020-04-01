
import React, {Component} from "react";


import video1 from "../components/video/vid1.MP4"
import $ from "jquery"

import soccerHomeimage1 from '../soccer/photos/soccer1.JPG'




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

            <video src={video1}  controls="controls" class="img-responsive"/>
            <div class="container-fluid">
                <div class="row">
                    <a href="#"><button id="more_button">MORE ></button></a>
                    <h2 id="featured-vid-button"><b>Featured Videos</b></h2>
                    

                    
                  
                   
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
                            <div class="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
            <div class="MultiCarousel-inner">
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                     <a href="#"> <img src={soccerHomeimage1} alt="pizza"  class="img-responsive" /></a>
                      <div class="card-body">
                      <a href="#" class="card-link">1</a>
                      <a href="#" class="card-link">Another link</a>
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                     <a href="#"> <img src={soccerHomeimage1} alt="pizza"  class="img-responsive" /></a>
                      <div class="card-body">
                      <a href="#" class="card-link">1</a>
                      <a href="#" class="card-link">Another link</a>
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                     <a href="#"> <img src={soccerHomeimage1} alt="pizza"  class="img-responsive" /></a>
                      <div class="card-body">
                      <a href="#" class="card-link">1</a>
                      <a href="#" class="card-link">Another link</a>
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                     <a href="#"> <img src={soccerHomeimage1} alt="pizza"  class="img-responsive" /></a>
                      <div class="card-body">
                      <a href="#" class="card-link">1</a>
                      <a href="#" class="card-link">Another link</a>
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                     <a href="#"> <img src={soccerHomeimage1} alt="pizza"  class="img-responsive" /></a>
                      <div class="card-body">
                      <a href="#" class="card-link">1</a>
                      <a href="#" class="card-link">Another link</a>
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                     <a href="#"> <img src={soccerHomeimage1} alt="pizza"  class="img-responsive" /></a>
                      <div class="card-body">
                      <a href="#" class="card-link">1</a>
                      <a href="#" class="card-link">Another link</a>
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                     <a href="#"> <img src={soccerHomeimage1} alt="pizza"  class="img-responsive" /></a>
                      <div class="card-body">
                      <a href="#" class="card-link">1</a>
                      <a href="#" class="card-link">Another link</a>
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                     <a href="#"> <img src={soccerHomeimage1} alt="pizza"  class="img-responsive" /></a>
                      <div class="card-body">
                      <a href="#" class="card-link">1</a>
                      <a href="#" class="card-link">Another link</a>
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                     <a href="#"> <img src={soccerHomeimage1} alt="pizza"  class="img-responsive" /></a>
                      <div class="card-body">
                      <a href="#" class="card-link">1</a>
                      <a href="#" class="card-link">Another link</a>
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                     <a href="#"> <img src={soccerHomeimage1} alt="pizza"  class="img-responsive" /></a>
                      <div class="card-body">
                      <a href="#" class="card-link">1</a>
                      <a href="#" class="card-link">Another link</a>
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                     <a href="#"> <img src={soccerHomeimage1} alt="pizza"  class="img-responsive" /></a>
                      <div class="card-body">
                      <a href="#" class="card-link">1</a>
                      <a href="#" class="card-link">Another link</a>
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                     <a href="#"> <img src={soccerHomeimage1} alt="pizza"  class="img-responsive" /></a>
                      <div class="card-body">
                      <a href="#" class="card-link">1</a>
                      <a href="#" class="card-link">Another link</a>
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                     <a href="#"> <img src={soccerHomeimage1} alt="pizza"  class="img-responsive" /></a>
                      <div class="card-body">
                      <a href="#" class="card-link">1</a>
                      <a href="#" class="card-link">Another link</a>
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                     <a href="#"> <img src={soccerHomeimage1} alt="pizza"  class="img-responsive" /></a>
                      <div class="card-body">
                      <a href="#" class="card-link">1</a>
                      <a href="#" class="card-link">Another link</a>
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                     <a href="#"> <img src={soccerHomeimage1} alt="pizza"  class="img-responsive" /></a>
                      <div class="card-body">
                      <a href="#" class="card-link">1</a>
                      <a href="#" class="card-link">Another link</a>
                      </div>
                 </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pad15">
                    <div class="card">
                     <a href="#"> <img src={soccerHomeimage1} alt="pizza"  class="img-responsive" /></a>
                      <div class="card-body">
                      <a href="#" class="card-link">1</a>
                      <a href="#" class="card-link">Another link</a>
                      </div>
                 </div>
                    </div>
                </div>
            </div>
            <button class="btn  leftLst"><h2></h2> </button>
            <button class="btn  rightLst"><h2>></h2></button>

                          
   
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
   <div className="container-fluid">
       <div className="row" id="league">
           <div className="col-md-6" id="league_initial_colon">fghjkbvcxcvbnm,.,mn</div>
           <div className="col-md-6">dfghjklkjhgfdfghjkjhg</div>
       </div>
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







