 
import Footer from "../Footer";
import React, { Component } from 'react'
class Contacts extends Component {
render() {
           
    return (
      <div >
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-7">
                <div className="row"><h1><b>Contact Us</b></h1> </div>
                    <hr/>

                <div className="row">
                    - On this page<br/>
                    <p>Fan Service contact information</p>
                    
                </div>
                <hr/>

                
                <div className="row">
                   <p><h3>Fans Services contact information</h3></p><br/>

                   <p>Need help with <b  style={{color:"lawngreen"}}>ticketing</b>, SAFA Oficial Membership, Statium Tours, The Online Store,
                   SAFA TV , or have a general feedback about you <b  style={{color:"lawngreen"}}>SEA</b> <b style={{color:"lawngreen"}}>Experience</b>? Here are the ways
                   you  can find an answer or get in touch:</p><br/>



                   <p><b>Call Us</b></p><br/>
                   <p>For all Enquiries <a href="tel:+233240311729"  style={{textDecoration:"none",color:"lawngreen"}}> +233 240311729 </a>/ <a href="tel:+233547908886"  style={{textDecoration:"none",color:"lawngreen"}}> +233 240311729 </a></p><br/>


                   <p><b>Email Us</b></p><br/>
                    <span className="contacts"><i class="fa fa-envelope"></i><a href="mailto:soccerangelsa67@gmail.com? "  style={{textDecoration:"none",color:"lawngreen"}}> soccerangelsa67@gmail.com</a></span><br/>
                    <span className="contacts"><i class="fa fa-envelope"></i><a href="mailto:soccerangels@gmail.com? "  style={{textDecoration:"none",color:"lawngreen"}}> soccerangels@gmail.com</a></span>
                   <br/>
                   
                   <p><b>Tweet Us</b></p><br/>
                   <p> We're now on Tweeter to help you with your queastions. You can find us <a href="https://twitter.com/SoccerAngelAca1" style={{textDecoration:"none",color:"lawngreen"}}>@SAFA</a> </p><br/>
                   
                   <br/>

                   <p><b>Team address</b></p>
                   <p>Assin Fosu(CENTRAL REGION)</p><br/>
                   <p>Soccer Angels Footbal Academy</p><br/>
                   <p>Dompim</p><br/>
                   
                </div>
                <hr/>
            </div>
            <div className="col-md-5">
                <div className="row">  
                <h3>Get in touch with us</h3>                          
                <form action="https://getform.io/f/275659fa-c96e-4145-8b25-ce4ebcb0fe6d" method="POST">
                 <label>Your Name</label>
              <input type="text" name="name"/>
              <label>Email</label>
              <input type="email" name="email"/>
              <label>Message</label>
              <input type="text" name="message"/>
             <button type="submit">Send</button>
            </form>
                </div>

                <div className="row">
 
                </div>
            </div>
        </div>
    </div>


    <div >
       <Footer/>
    </div>


     
      </div>
    )
  }
}
export default Contacts;


























