import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Sm from '../components/Sm';
import aboutimg from '../assets/img/About.png';
import { greeting, AboutBio } from '../Name';
// import './About.css'
// import './About.css';
import './main.css'

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
<div class="col-xs-12 subtitle">
<p>&ldquo;I want to help others to make the right decisions, data-driven decisions&rdquo;</p>
</div>
      );
      

    }
  }
  
  export default About;
