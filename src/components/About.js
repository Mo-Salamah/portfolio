import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Sm from '../components/Sm';
import aboutimg from '../assets/img/About.png';
import { greeting, AboutBio } from '../Name';
// import './About.css'
import './About.css';

class About extends Component {
    render() {
      const Biolist = AboutBio.map(
        bio=> (
          <div key={bio}>
          <p><span role="img" aria-label="Heart">⚡</span> {bio}</p>
          </div>

      )
      )
      return (
          <div className="main">



            <div className="text-part">
              <div className="text">
                <h1>{ greeting.title } </h1>
                <p> { greeting.subTitle } </p>
              </div>
            </div>
            <div className="img-part" >
              <img src={aboutimg} alt="about"/>
            </div>
          </div>

          

      );
      

    }
  }
  
  export default About;