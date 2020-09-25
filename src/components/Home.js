import React, { Component } from "react";

import $ from "jquery";

import soccerHomeimage1 from "../soccer/photos/soccer1.JPG";
import soccerHomeimage3 from "../soccer/photos/soccer14.JPG";
import boahnationalcall from "../soccer/photos/boah.PNG";
import soccerangelslogo from "../soccer/photos/soccerangelslogo.JPG";
import ladiesnews from "../soccer/photos/headline.PNG";
import jerseyimage1 from "../soccer/photos/Picture8.jpg";
import jerseyimage2 from "../soccer/photos/Picture9.jpg";
import jerseyimage3 from "../soccer/photos/Picture7.jpg";
import jerseyimage5 from "../soccer/photos/Picture2.gif";
import jerseygrid from "../soccer/photos/0.gif";
import jerseyimage4 from "../soccer/photos/Picture10.jpg";
import asante from "../soccer/photos/W-asante.JPG";
import pressrelease from "../soccer/photos/press.JPG";
import jayjay from "../soccer/photos/jayjay.JPG";
import pascal from "../soccer/photos/pascal.JPG";
import juvenile2 from "../soccer/photos/juvinalle2.jpg";
import mainheadline from "../soccer/photos/headline.PNG";
import nationalflag from "../soccer/photos/nationalflag.jpg";


// profile images
import baaye from "../soccer/photos/Baaye.JPG";
import appiah from "../soccer/photos/Appiah.JPG";
import elvis from "../soccer/photos/Elvis.JPG";
import cosmos from "../soccer/photos/cosmos.JPG";
import andrews from "../soccer/photos/Andrews.JPG";
import richmond from "../soccer/photos/Richmond.JPG";
import shargaa from "../soccer/photos/shargaa.JPG";
import theophilus from "../soccer/photos/theophilus.JPG";
import cobby from "../soccer/photos/cobby.JPG";
import ketu from "../soccer/photos/Ketu.JPG";
import benard from "../soccer/photos/Benard.JPG";
import bright from "../soccer/photos/Bright.JPG";
import jonathan from "../soccer/photos/Jonathan.JPG";



import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
} from "react-router-dom";
import TimeAgo from "timeago-react";
import Footer from "./Footer";

class Home extends Component {
  render() {
    $(document).ready(function () {
      var itemsMainDiv = ".MultiCarousel";
      var itemsDiv = ".MultiCarousel-inner";
      var itemWidth = "";

      $(".leftList, .rightList").click(function () {
        var condition = $(this).hasClass("leftList");
        if (condition) click(0, this);
        else click(1, this);
      });

      ResCarouselSize();

      $(window).resize(function () {
        ResCarouselSize();
      });

      //this function define the size of the items
      function ResCarouselSize() {
        var incno = 0;
        var dataItems = "data-items";
        var itemclass = ".item";
        var id = 0;
        var btnParentSb = "";
        var itemsSplit = "";
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $("body").width();
        $(itemsDiv).each(function () {
          id = id + 1;
          var itemNumbers = $(this).find(itemclass).length;
          btnParentSb = $(this).parent().attr(dataItems);
          itemsSplit = btnParentSb.split(",");
          $(this)
            .parent()
            .attr("id", "MultiCarousel" + id);

          if (bodyWidth >= 1200) {
            incno = itemsSplit[3];
            itemWidth = sampwidth / incno;
          } else if (bodyWidth >= 992) {
            incno = itemsSplit[2];
            itemWidth = sampwidth / incno;
          } else if (bodyWidth >= 768) {
            incno = itemsSplit[1];
            itemWidth = sampwidth / incno;
          } else {
            incno = itemsSplit[0];
            itemWidth = sampwidth / incno;
          }
          $(this).css({
            transform: "translateX(0px)",
            width: itemWidth * itemNumbers,
          });
          $(this)
            .find(itemclass)
            .each(function () {
              $(this).outerWidth(itemWidth);
            });

          $(".leftList").addClass("over");
          $(".rightList").removeClass("over");
        });
      }

      //this function used to move the items
      function ResCarousel(e, el, s) {
        var leftBtn = ".leftList";
        var rightBtn = ".rightList";
        var translateXval = "";
        var divStyle = $(el + " " + itemsDiv).css("transform");
        var values = divStyle.match(/-?[\d.]+/g);
        var xds = Math.abs(values[4]);
        if (e === 0) {
          translateXval = parseInt(xds) - parseInt(itemWidth * s);
          $(el + " " + rightBtn).removeClass("over");

          if (translateXval <= itemWidth / 2) {
            translateXval = 0;
            $(el + " " + leftBtn).addClass("over");
          }
        } else if (e === 1) {
          var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
          translateXval = parseInt(xds) + parseInt(itemWidth * s);
          $(el + " " + leftBtn).removeClass("over");

          if (translateXval >= itemsCondition - itemWidth / 2) {
            translateXval = itemsCondition;
            $(el + " " + rightBtn).addClass("over");
          }
        }
        $(el + " " + itemsDiv).css(
          "transform",
          "translateX(" + -translateXval + "px)"
        );
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
      var itemsMainDiv = ".vidMultiCarousel";
      var itemsDiv = ".vidMultiCarousel-inner";
      var itemWidth = "";

      $(".leftslide, .rightslide").click(function () {
        var condition = $(this).hasClass("leftslide");
        if (condition) click(0, this);
        else click(1, this);
      });

      ResCarouselSize();

      $(window).resize(function () {
        ResCarouselSize();
      });

      //this function define the size of the items
      function ResCarouselSize() {
        var incno = 0;
        var dataItems = "data-items";
        var itemclass = ".video";
        var id = 0;
        var btnParentSb = "";
        var itemsSplit = "";
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $("body").width();
        $(itemsDiv).each(function () {
          id = id + 1;
          var itemNumbers = $(this).find(itemclass).length;
          btnParentSb = $(this).parent().attr(dataItems);
          itemsSplit = btnParentSb.split(",");
          $(this)
            .parent()
            .attr("id", "vidMultiCarousel" + id);

          if (bodyWidth >= 1200) {
            incno = itemsSplit[2];
            itemWidth = sampwidth / incno;
          } else if (bodyWidth >= 992) {
            incno = itemsSplit[2];
            itemWidth = sampwidth / incno;
          } else if (bodyWidth >= 768) {
            incno = itemsSplit[1];
            itemWidth = sampwidth / incno;
          } else {
            incno = itemsSplit[0];
            itemWidth = sampwidth / incno;
          }
          $(this).css({
            transform: "translateX(0px)",
            width: itemWidth * itemNumbers,
          });
          $(this)
            .find(itemclass)
            .each(function () {
              $(this).outerWidth(itemWidth);
            });

          $(".leftslide").addClass("over");
          $(".rightslide").removeClass("over");
        });
      }

      //this function used to move the items
      function ResCarousel(e, el, s) {
        var leftBtn = ".leftslide";
        var rightBtn = ".rightslide";
        var translateXval = "";
        var divStyle = $(el + " " + itemsDiv).css("transform");
        var values = divStyle.match(/-?[\d.]+/g);
        var xds = Math.abs(values[4]);
        if (e === 0) {
          translateXval = parseInt(xds) - parseInt(itemWidth * s);
          $(el + " " + rightBtn).removeClass("over");

          if (translateXval <= itemWidth / 2) {
            translateXval = 0;
            $(el + " " + leftBtn).addClass("over");
          }
        } else if (e === 1) {
          var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
          translateXval = parseInt(xds) + parseInt(itemWidth * s);
          $(el + " " + leftBtn).removeClass("over");

          if (translateXval >= itemsCondition - itemWidth / 2) {
            translateXval = itemsCondition;
            $(el + " " + rightBtn).addClass("over");
          }
        }
        $(el + " " + itemsDiv).css(
          "transform",
          "translateX(" + -translateXval + "px)"
        );
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
        <div className=" homesocialheader">
          <div className="row">
                          <span className="homesocialinks"><img src={nationalflag} 
                            alt="nationality"
                            className="img-responsive" width="40" height="40"></img></span>
                          <span className="homesocialinks"><i className="fa fa-twitter"></i></span> 
                          <span className="homesocialinks"><i className="fa fa-facebook"></i></span> 
                          <span className="homesocialinks"><i className="fa fa-youtube"></i></span> 
                          <span className="homesocialinks"><i className="fa fa-instagram"></i></span>    
                          <p>welcome:  <span>home</span></p>
          </div>
        </div>

        <section>
          <Link to="#">
          <div className="row">
          <img
                            src={mainheadline}
                            alt="precious"
                            className="img-responsive"
                          />
          </div>
          <div className="line"></div>

          <div className="row mainHeadline">
              <h1>
                       Soccer Angels ladies starts their pre-season at Assin Ningo ahead  of the next 
                       division one league season
              </h1>
          </div>
          </Link>
          </section>


      
        <section>
          <div className="row">
            <div
              id="carousel-example-generic"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carousel-example-generic"
                  data-slide-to="2"
                ></li>
              </ol>

              <div className="carousel-inner carousel-content" role="listbox">
                <div className="row" id="line"></div>
                <div className="item active" id="carousel_item1">
                  <div className="row">
                    <div className="col-xs-12 col-md-4" id="lastmatch_colon">
                      <div className="row" style={{ minHeight: "200px" }}>
                        <img
                          src={jerseygrid}
                          alt="jersaecollection"
                          className="img-responsive"
                        />
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-8">
                      <div className="col-xs-12 col-md-6" id="upcoming_colon">
                        <p id="upcoming_match_header_text">
                          <b>UPCOMING MATCH</b>
                        </p>
                        <div className="col-xs-4  col-md-4">
                          {" "}
                          <img
                            src={soccerHomeimage1}
                            alt="pizza"
                            className="img-responsive"
                          />
                          <p>Suampongman Utd</p>
                        </div>
                        <div className="col-xs-4  col-md-4">
                          <button id="upcoming_match_button">
                            <b>VS</b>
                          </button>
                        </div>
                        <div className="col-xs-4  col-md-4">
                          {" "}
                          <img
                            src={soccerangelslogo}
                            alt="pizza"
                            className="img-responsive"
                          />
                          <p> Soccer Angels Academy</p>
                        </div>
                        <div id="match_text"></div>
                      </div>
                      <div className="col-xs-12 col-md-6" id="upcoming_colon">
                        <p id="upcoming_match_header_text">
                          <b>UPCOMING MATCH</b>
                        </p>
                        <div className="col-xs-4  col-md-4">
                          {" "}
                          <img
                            src={soccerangelslogo}
                            alt="pizza"
                            className="img-responsive"
                          />
                          <p>Soccer Angels Academy</p>
                        </div>
                        <div className="col-xs-4  col-md-4">
                          <button id="upcoming_match_button">
                            <b>VS</b>
                          </button>
                        </div>
                        <div className="col-xs-4  col-md-4">
                          {" "}
                          <img
                            src={soccerHomeimage1}
                            alt="pizza"
                            className="img-responsive"
                          />
                          <p>Twifo Wasko</p>
                        </div>
                        <div id="match_text"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
        </section>

       






















        <section>
          <div className="row">
            <Link to="/seatvgo">
              <button className="more_button_desktop" id="desktopmore">MORE</button>
            </Link>
            <Link to="/seatvgo" className="header">
              <h2>Featured videos</h2>
            </Link>
          </div>
          
          <div className="row">
            <div>
              <div
                className="vidMultiCarousel"
                data-items="1,3,5,6"
                data-slide="1"
                id="MultiCarousel"
                data-interval="1000"
              >
                <div className="vidMultiCarousel-inner">
                  <div className="video">
                    <div className="pad15">
                      <div className="thumbnail">
                        <iframe
                          width="560"
                          title="soccerangels"
                          height="315"
                          src="https://www.youtube.com/embed/_-Oe7lq0tBc?rel=0"
                          className="img-responsive"
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                        <div className="caption">                       
                            {" "}
                            <h4>
                             <b> Soccer Angels</b>
                            </h4>                         
                           <h3><b></b></h3>
                          <TimeAgo
                          datetime={'2020-08-28 14:12:00'}
                          locale='vi'/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="video">
                    <div className="pad15">
                      <div className="thumbnail">
                        <iframe
                          width="560"
                          height="315"
                          title="soccerangels"
                          src="https://www.youtube.com/embed/Hz1m-qHj7cI?rel=0"
                          frameBorder="0"
                          className="img-responsive"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                        <div className="caption">
                        <h4>
                             <b> Soccer Angels</b>
                            </h4>                         
                           <h3><b></b></h3>
                          <TimeAgo
                          datetime={'2020-08-28 14:12:00'}
                          locale='vi'/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="video">
                    <div className="pad15">
                      <div className="thumbnail">
                        <iframe
                          width="560"
                          height="315"
                          title="soccerangels"
                          className="img-responsive"
                          src="https://www.youtube.com/embed/mVVehlZoBU8?rel=0"
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                        <div className="caption">
                        <h4>
                             <b> Soccer Angels</b>
                            </h4>                         
                           <h3><b></b></h3>
                          <TimeAgo
                          datetime={'2020-08-28 14:12:00'}
                          locale='vi'/>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="video">
                    <div className="pad15">
                      <div className="thumbnail">
                        <iframe
                          width="560"
                          height="315"
                          title="soccerangels"
                          className="img-responsive"
                          src="https://www.youtube.com/embed/GbJDh_-DHfY?rel=0"
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                        <div className="caption">
                        <h4>
                             <b>Junior Premire League</b>
                            </h4>                         
                           <h3><b></b></h3>
                          <TimeAgo
                          datetime={'2020-08-28 14:12:00'}
                          locale='vi'/>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="video">
                    <div className="pad15">
                      <div className="thumbnail">
                        <iframe
                          width="560"
                          height="315"
                          title="soccerangels"
                          className="img-responsive"
                          src="https://www.youtube.com/embed/CRmoY58VEeQ?rel=0"
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                        <div className="caption">
                        <h4>
                             <b> Soccer Angels U13</b>
                            </h4>                         
                           <h3><b></b></h3>
                          <TimeAgo
                          datetime={'2020-08-28 14:12:00'}
                          locale='vi'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn  leftslide" id="btne">
                  <span className="glyphicon glyphicon-menu-left"></span>{" "}
                </button>
                <button className="btn  rightslide" id="btne">
                  <span className="glyphicon glyphicon-menu-right"></span>{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <Link to="/seatvgo">
              <button className="more_button_mobile">MORE</button>
            </Link>
        </section>
        
       























        <section>
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
        </section>

































        {/* ABOUT LEAGUE */}
        <section className="league">
          
            <div className="row">
              <div className="col-md-6 league_first_colon">
                <div className="row" style={{ margin: "auto" }}>
                <h2>Press Release</h2>
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
        
        </section>

        <div className="line"></div>

        <section>
          <div className="row">
            <div>
              <div
                className="MultiCarousel"
                data-items="1,3,5,6"
                data-slide="1"
                id="MultiCarousel"
                data-interval="1000"
              >
                <div className="MultiCarousel-inner">
                  <div className="item">
                    <div className="pad15">
                      <div className="card">
                        <Link to="/bismark">
                          {" "}
                          <img
                            src={baaye}
                            alt="pizza"
                            className="img-responsive"
                          />{" "}
                        </Link>
                        <div className="card-body">
                          <h4>
                            <strong>16</strong>
                          </h4>
                          <h5>
                            <b>Bismark</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <div className="card">
                        <Link to="/bright">
                          {" "}
                          <img
                            src={bright}
                            alt="Bright"
                            className="img-responsive"
                          />{" "}
                        </Link>
                        <div className="card-body">
                          <h4>
                            <strong>99</strong>
                          </h4>
                          <h5>
                            <b>Bright</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <div className="card">
                        <Link to="/jonathan">
                          {" "}
                          <img
                            src={jonathan}
                            alt="Bright"
                            className="img-responsive"
                          />{" "}
                        </Link>
                        <div className="card-body">
                          <h4>
                            <strong>1</strong>
                          </h4>
                          <h5>
                            <b>Jonathan</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <div className="card">
                        <Link to="/richmond">
                          {" "}
                          <img
                            src={richmond}
                            alt="pizza"
                            className="img-responsive"
                          />{" "}
                        </Link>
                        <div className="card-body">
                          <h4>
                            <strong>3</strong>
                          </h4>
                          <h5>
                            <b>Richmond</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <div className="card">
                        <Link to="/theophilus">
                          {" "}
                          <img
                            src={theophilus}
                            alt="pizza"
                            className="img-responsive"
                          />{" "}
                        </Link>
                        <div className="card-body">
                          <h4>
                            <strong>3</strong>
                          </h4>
                          <h5>
                            <b>Theophilus</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <div className="card">
                        <Link to="/elvis">
                          {" "}
                          <img
                            src={elvis}
                            alt="pizza"
                            className="img-responsive"
                          />{" "}
                        </Link>
                        <div className="card-body">
                          <h4>
                            <strong>3</strong>
                          </h4>
                          <h5>
                            <b>Elvis</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <div className="card">
                        <Link to="/cosmos">
                          {" "}
                          <img
                            src={cosmos}
                            alt="pizza"
                            className="img-responsive"
                          />{" "}
                        </Link>
                        <div className="card-body">
                          <h4>
                            <strong>3</strong>
                          </h4>
                          <h5>
                            <b>Cosmos</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <div className="card">
                        <Link to="/andrews">
                          {" "}
                          <img
                            src={andrews}
                            alt="pizza"
                            className="img-responsive"
                          />{" "}
                        </Link>
                        <div className="card-body">
                          <h4>
                            <strong>3</strong>
                          </h4>
                          <h5>
                            <b>Andrews</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <div className="card">
                        <Link to="/enock">
                          {" "}
                          <img
                            src={shargaa}
                            alt="pizza"
                            className="img-responsive"
                          />{" "}
                        </Link>
                        <div className="card-body">
                          <h4>
                            <strong>3</strong>
                          </h4>
                          <h5>
                            <b>Enock</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <div className="card">
                        <Link to="/isaac">
                          {" "}
                          <img
                            src={cobby}
                            alt="pizza"
                            className="img-responsive"
                          />{" "}
                        </Link>
                        <div className="card-body">
                          <h4>
                            <strong>3</strong>
                          </h4>
                          <h5>
                            <b>Isaac</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <div className="card">
                        <Link to="/ketu">
                          {" "}
                          <img
                            src={ketu}
                            alt="pizza"
                            className="img-responsive"
                          />{" "}
                        </Link>
                        <div className="card-body">
                          <h4>
                            <strong>3</strong>
                          </h4>
                          <h5>
                            <b>Ketu</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <div className="card">
                        <Link to="/benard">
                          {" "}
                          <img
                            src={benard}
                            alt="pizza"
                            className="img-responsive"
                          />{" "}
                        </Link>
                        <div className="card-body">
                          <h4>
                            <strong>9</strong>
                          </h4>
                          <h5>
                            <b>Benard</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <div className="card">
                        <Link to="/appiah">
                          {" "}
                          <img
                            src={appiah}
                            alt="pizza"
                            className="img-responsive"
                          />{" "}
                        </Link>
                        <div className="card-body">
                          <h4>
                            <strong>3</strong>
                          </h4>
                          <h5>
                            <b>Ishmael</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <div className="card">
                        <Link to="/appiah">
                          {" "}
                          <img
                            src={appiah}
                            alt="pizza"
                            className="img-responsive"
                          />{" "}
                        </Link>
                        <div className="card-body">
                          <h4>
                            <strong>3</strong>
                          </h4>
                          <h5>
                            <b>Ebenezer</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <div className="card">
                        <Link to="/appiah">
                          {" "}
                          <img
                            src={appiah}
                            alt="pizza"
                            className="img-responsive"
                          />{" "}
                        </Link>
                        <div className="card-body">
                          <h4>
                            <strong>3</strong>
                          </h4>
                          <h5>
                            <b>Christian</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="pad15">
                      <div className="card">
                        <Link to="/appiah">
                          {" "}
                          <img
                            src={appiah}
                            alt="pizza"
                            className="img-responsive"
                          />{" "}
                        </Link>
                        <div className="card-body">
                          <h4>
                            <strong>3</strong>
                          </h4>
                          <h5>
                            <b>Jeremiah</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <button className="btn  leftList" id="btne">
                  <span className="glyphicon glyphicon-menu-left"></span>{" "}
                </button>
                <button className="btn  rightList" id="btne">
                  <span className="glyphicon glyphicon-menu-right"></span>{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="line"></div>
        </section>

        




        <section >
          <div className="row">
            <Link to="#" className="header">
              <h2>Features</h2>
            </Link>
          </div>

          <div className="row" id="features_mainRows">
            <div className="col-md-6">
              <div className="row">
              <Link to="#">
                <div className="col-md-12 col-xs-12" style={{ padding: "40px" }}>             
                    {" "}
                    <img
                      src={jerseyimage1}
                      alt="pizza"
                      className="img-responsive"
                    />
                    <h4 className="bottom"><b>Soccer Angels Academy</b></h4>
                </div>
                <div className="col-md-12 col-xs-12 features-headline">
                  <h4>
                    {" "}
                    Soccer Angels new home kit for the 20201 season
                  </h4>
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
              <hr/>
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
              <hr/>
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
              <hr/>
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
















        <section  id="transfare_news">
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
        </section>

        <footer>
          <Footer />
        </footer>
    
      </div>

    );
  }
}

export default Home;
