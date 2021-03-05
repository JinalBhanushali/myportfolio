import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../css/about.css';
import img3 from "../img/profile-img.jpg"

function About(params) {
    return (<div>


    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>I am pursuing my bachelor degree in Computer Science from A. D. Patel Institute of Technology, New Vallabh Vidyanagar.</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={img3} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>I am student of Computer Engineering.</h3>
            <p className="font-italic">
              
              I am pursuing my bachelor degree in Computer Science from A. D. Patel Institute of Technology, New Vallabh Vidyanagar.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>05 November 2000</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 63554 26035</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Gandhidham, Kutch</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor of Engineering </span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>jinal21bhanushali@gmail.com</span></li>
                </ul>
              </div>
            </div>
            <h3>Objective</h3>
            <p>
            
            To become a successful expert in the field of computer Science by channelizing my technical knowledge and skills to ensure personal and professional growth and to contribute to the prosperity of the organization. 
            To seek challenging avenues where my technical skills and engineering experience will match. I am Willing to work in a dynamic environment,
            while being able to make a significant contribution.

            </p>
          </div>
        </div>

      </div>
    </section>

    </div>);
  
}
export default About;