import React, { Component } from "react";
import Home from '../assets/img/home.svg';
import Sm from './Sm';
import { greeting } from '../Name'
import './main.css'
import About from "./About"
import Developer from "./Developer";
import Designer from "./Designer";
import Cloud from "./Cloud";
import Mlai from "./Mlai";
import Game from "./Game";
import Data from "./Data";
import Programmer from "./Programmer";
import Robotic from "./Robotic";
import Quote from "./Quote";

class Main extends Component {
    render() {
    let show_about='';
    let Show_Programmer='';
    let Show_dev='';
    let Show_design='';
    let Show_cloud='';
    let Show_data='';
    let Show_mlai='';
    let Show_robotic='';
    let Show_game='';
    let show_quote='';
    
    if (greeting.About) {
      show_about = <About/>;
    }

    if (greeting.Programming) {
      Show_Programmer = <Programmer/>;
    }
    if (greeting.developer) {
      Show_dev = <Developer/>;
    }
    if (greeting.designer) {
      Show_design = <Designer/>;
    }
    if (greeting.cloud_infra_architecture) {
      Show_cloud = <Cloud/> ;
    }
    if (greeting.data_Science) {
      Show_data = <Data/>;
    }
    if (greeting.ml_ai) {
      Show_mlai = <Mlai/> ;
    }
    if (greeting.Robotic) {
      Show_robotic = <Robotic/>;
    }
    if (greeting.gamedev) {
      Show_game = <Game/>;
    }
    if (true) {
      show_quote = <Quote/>;
    }
      return (
        <div>
          <div className="main">

        
        {show_quote}
        {show_about}
        </div>
        <h1>What I Do?</h1>
        {Show_Programmer}
        {Show_dev}
        {Show_design}
        {Show_cloud}
        {Show_data}
        {Show_mlai}
        {Show_robotic}
        {Show_game}
        

        </div>
      );
    }
  }
  
  export default Main;