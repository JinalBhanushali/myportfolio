import React from 'react';
import '../css/resume.css';

function Resume(params) {
    return (<div>
         <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
          <p>To become a successful expert in the field of computer engineering by channelizing my technical knowledge and skills to ensure personal and professional growth and to contribute to the prosperity of the organization.</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Jinal Bhanushali</h4>
              <p><em></em></p>
              <ul>
                <li>Gandhidham, Kutch</li>
                <li>+91 63554 26035</li>
                <li>jinal21bhanushali@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of computer engineering</h4>
              <h5>2018 - 2022</h5>
              <p><em>A. D. Patel Institute of Technology, New Vallabh Vidyanagar.</em></p>
              <p>University : Gujarat Technical University</p>
              <p>Result : CPI : 7.75</p>
            </div>
            <div className="resume-item">
              <h4>H. S. C.</h4>
              <h5>2018</h5>
              <p><em>S.V.P. School, Gandhidham</em></p>
              <p>Board : Gujarat Secondary and Higher secondary Education Board</p>
              <p>Result : 71.84%</p>
            </div>
            <div className="resume-item">
              <h4>S. S. C.</h4>
              <h5>2016</h5>
              <p><em>M.P.Patel School, Gandhidham</em></p>
              <p>Board : Gujarat Secondary and Higher secondary Education Board</p>
              <p>Result : 76%</p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Technical Skills</h3>
            <div className="resume-item">
              
              <ul>
                <li>Programming language : java, c, python (basic)</li>
                <li>Web development : HTML5, CSS, Bootstrap, React js</li>
                <li>Tools & Software : Visual studio Code, Visual Studio 2019, Postman, microsoft SQL Server Management Studio(SQL Database), mongoDB (No SQL database)</li>
                <li>MVC framework</li>
              </ul>
            </div>
            
            <h3 className="resume-title">Project</h3>
            <div className="resume-item">
              <b>Mobile Application for blind people operated using voice command :</b>
              <p>Features are OCR auto reading newspaper, Distance measurement and object detection. User friendly Mobile application operated using voice command for blind people. </p>
            </div>

            <div className="resume-item">
              <b>Inventory management Mobile Application </b>
              <p>Features are managing inventory, store details of stoke, company and employee. Notification when stock less than saved quantity.</p>
            </div>

            <h3 className="resume-title">Other</h3>
            <div className="resume-item">
              <b >Co- Curricular Activities</b>
              <p>Participated in Smart Gujarat hackathon 2020</p>
              <p>Successfully completed coursera course of Algorithmic toolbox</p>
            </div>

            <div className="resume-item">
              <b>Strength</b><br></br><br></br>
              <ul>
                <li>Team Work</li>
                <li>Time Management</li>
                <li>Willingness to work</li>
                <li>Quick learner</li>
              </ul>
            </div>

            

          </div>

          
          
        </div>

      </div>
    </section>
    </div>);
}
export default Resume;