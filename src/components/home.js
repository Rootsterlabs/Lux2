import React from 'react';
import Navbar from './navbar.js';
import './home.css';
import Hero from './hero.js';
import {Services} from './services.js';
import Rewards from './rewards.js';
import Footer from './footer.js';
class Home extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Hero />
        <Services />
        <Rewards />
        <Footer />
      </div>
      )
  }
}

export default Home;