import React, { Component } from "react";

import pop from "./photos/pop.GIF"
import Footer from "../Footer";

class Timeline extends Component {
    render() {

        return (
            <div style={{margin:"0px"}}>

                
                <div className="container-fluid linefirst">
                    <div className="row"id="story" >
                        <div className="col-md-7 col-xs-12">
                            <div className="row">
                                <h1 style={{fontSize:"120px", color:"lawngreen"}}><b>Our</b></h1>
                                <h1 style={{fontSize:"120px",}}><b>History</b></h1>
                                <h1 style={{fontSize:"#", color:"#fff"}}><b>The story of SAFA through the years</b></h1>

                            
                            </div>
                        </div>

                        <div className="col-md-5 col-xs-12">
                            <img src={pop}  className="img-responsive" alt="timeline" height="500px" width="500px"/>
                        </div>
                    </div>
                </div>










                <section className="container-fluid" style={{background:"lawngreen"}}>
                <div className="timeline">
                            <div className="time">
                                <div className="img"><img src="https://picsum.photos/400" alt="timeline"/></div>
                                <div className="wrap">
                                    <div className="date">Upper heading</div>
                                    <h3 className="title">Heading</h3>
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio omnis inventore quisquam ratione ut aliquid saepe beatae culpa atque adipisci, error, deleniti dolor iusto iste possimus asperiores magni sunt eum?</p>
                                    </div>
                                </div>
                            </div>

                            <div className="time">
                                <div className="img"><img src="https://picsum.photos/403" alt="timeline"/></div>
                                <div className="wrap">
                                    <div className="date">Upper heading</div>
                                    <h3 className="title">Heading</h3>
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio omnis inventore quisquam ratione ut aliquid saepe beatae culpa atque adipisci, error, deleniti dolor iusto iste possimus asperiores magni sunt eum?</p>
                                    </div>
                                </div>
                            </div>

                            <div className="time">
                                <div className="img"><img src="https://picsum.photos/402" alt="timeline"/></div>
                                <div className="wrap">
                                    <div className="date">Upper heading</div>
                                    <h3 className="title">Heading</h3>
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio omnis inventore quisquam ratione ut aliquid saepe beatae culpa atque adipisci, error, deleniti dolor iusto iste possimus asperiores magni sunt eum?</p>
                                    </div>
                                </div>
                            </div>

                            <div className="time">
                                <div className="img"><img src="https://picsum.photos/401" alt="timeline"/></div>
                                <div className="wrap">
                                    <div className="date">Upper heading</div>
                                    <h3 className="title">Heading</h3>
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio omnis inventore quisquam ratione ut aliquid saepe beatae culpa atque adipisci, error, deleniti dolor iusto iste possimus asperiores magni sunt eum?</p>
                                    </div>
                                </div>
                            </div>

                            <div className="time">
                                <div className="img"><img src="https://picsum.photos/407" alt="timeline"/></div>
                                <div className="wrap">
                                    <div className="date">Upper heading</div>
                                    <h3 className="title">Heading</h3>
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio omnis inventore quisquam ratione ut aliquid saepe beatae culpa atque adipisci, error, deleniti dolor iusto iste possimus asperiores magni sunt eum?</p>
                                    </div>
                                </div>
                            </div>

                            <div className="time">
                                <div className="img"><img src="https://picsum.photos/408" alt="timeline"/></div>
                                <div className="wrap">
                                    <div className="date">Upper heading</div>
                                    <h3 className="title">Heading</h3>
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio omnis inventore quisquam ratione ut aliquid saepe beatae culpa atque adipisci, error, deleniti dolor iusto iste possimus asperiores magni sunt eum?</p>
                                    </div>
                                </div>
                            </div>

                            <div className="time">
                                <div className="img"><img src="https://picsum.photos/409" alt="timeline"/></div>
                                <div className="wrap">
                                    <div className="date">Upper heading</div>
                                    <h3 className="title">Heading</h3>
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio omnis inventore quisquam ratione ut aliquid saepe beatae culpa atque adipisci, error, deleniti dolor iusto iste possimus asperiores magni sunt eum?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                </section>
                <footer>
                  <Footer />
                 </footer>
              
            </div >

        )
    }
}

export default Timeline;