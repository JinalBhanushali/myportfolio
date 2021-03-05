import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import About from './components/about';
import Contact from './components/contact';
import Resume from './components/resume';
import logo from './img/profile-img.jpg';
import Scroll from './components/scroll';
import { ContactSupportOutlined } from "@material-ui/icons";
import { Link, animateScroll as scroll } from "react-scroll";

function App(params) {

    const [click, setClick] = useState(false)

    
   
    var x = document.getElementById("header");
        if((window.innerWidth < 1199 ) && document.getElementById("header")){
            if( (!click) && document.getElementById("header")){
                x.style.left=0;
               
                
            }else if(document.getElementById("header")){
                x.style.left=  "-300px";
               
            }
       }
       
    
    // if(window.innerWidth > 1024 && document.getElementById("header")){
    //     console.log(window.innerWidth);
    //     x.style.left= 0;
    // }
    // function ClickBtn() {

    //     setClick(!click);
        
    // }

    return (<div>
    { 
          <button onClick={()=>setClick(!click)}><i className={click ? "fa fa-bars mobile-nav-toggle d-xl-none" : "fa fa-times mobile-nav-toggle d-xl-none"}></i> </button>
    }
   

   <header id="header"> 
    <div className="d-flex flex-column">

      <div className="profile">
        <img src={logo} alt="" className="img-fluid rounded-circle"/>
        <h1 className="text-light"><a href="index.html">Jinal Bhanushali</a></h1>
        <div className="social-links mt-3 text-center">
          <a href="https://twitter.com/Bhanushali_21?s=08" className="twitter"><i className="fa fa-twitter"></i></a>
          <a href="https://www.facebook.com/" className="facebook"><i className="fa fa-facebook"></i></a>
          <a href="https://www.instagram.com/" className="instagram"><i className="fa fa-instagram"></i></a>
          <a href="https://github.com/JinalBhanushali0628" className="google-plus"><i className="fa fa-github"></i></a>
          <a href="https://www.linkedin.com/in/jinal-bhanushali-648a86179" className="linkedin"><i className="fa fa-linkedin"></i></a>
        </div>
      </div> 

     <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" className="nav-link scrollto active "><i className="fa fa-home"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="fa fa-user"></i> <span>About</span></a></li>
          <li><a href="#resume" className="nav-link scrollto"><i className="fa fa-file"></i> <span>Resume</span></a></li>
          <li><a href="#contact" className="nav-link scrollto"><i className="fa fa-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>  
      
     </div>
  </header> 


  <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      <h1>Jinal Bhanushali</h1>
      <p>This is my portfolio <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
    </div>
  </section>

<About/>
<Resume/>
<Contact/>

 <Scroll showBelow={250} /> 
    </div>);
}
export default App;
