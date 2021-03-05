import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../css/contact.css';

function Contact(params) {
    return (<div>
         <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
        </div>

       

          <div className=" d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="fa fa-map-marker"></i>
                <h4>Location:</h4>
                <p>504, A/11, Gitagram Society, Bharat Nagar, Gandhidham, Kutch</p>
              </div>

              <div className="email">
                <i className="fa fa-envelope"></i>
                <h4>Email:</h4>
                <p>jinal21bhanushali@gmail.com</p>
              </div>

              <div className="phone">
                <i className="fa fa-phone"></i>
                <h4>Call:</h4>
                <p>+91 63554 26035</p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58731.71713705689!2d70.08367470159122!3d23.07027319166356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950b98e8bec0d97%3A0x9d6ccb522ee8f6e0!2sGandhidham%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1614923507858!5m2!1sen!2sin" frameborder="0" style={{"border":"0", "width": "100%", "height": "290px"}} allowfullscreen></iframe>
            </div>

          </div>

         

        </div>

     
    </section>
    </div>);
}
export default Contact;