import React from 'react';
import './hero.css';
import BookaRide from './bookaride.js';

class Hero extends React.Component{
  render(){
    return(
      <div className="hero">
        <div className="image">
          <img src={require('../assets/hero.png')}/>
          <h1>The Leading Shuttle Service<br/> for Orlando and Port Canaveral</h1>
        </div>
        <BookaRide/>
      </div>
      )
  }
  
}

export default Hero;