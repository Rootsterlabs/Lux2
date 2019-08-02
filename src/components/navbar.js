import React from 'react';
import './navbar.css';

class Navbar extends React.Component{
  render(){
    return(
      <div className="nav">
        <img src={require('../assets/luxlogo.png')} />
        <ul>
          <li>Home</li>
          <li>Booking</li>
          <li>About Us</li>
          <li>Group Rates</li>
          <li>Blog</li>
          <li>Travel Agents</li>
        </ul>
      </div>
      )
  }
}


export default Navbar;