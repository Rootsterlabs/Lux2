import React from 'react';
import './footer.css';

class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
      <img src={"https://www.lux2transfer.com/wp-content/uploads/2019/04/12.png"}/>
      <p>
      <span className="highlight">CONTACT INFO</span> <br/>
      1365 N Courtenay Pkwy Suite C<br/>
      Merritt Island, FL 32953
      <br/><br/>
      Office: 321-349-0101
      <br/>
      7am-10pm Mon-Sun
      <br/><br/>
      info@lux2transfer.com
      </p>
      <p>
        <span className="highlight">
        Follow Us
        </span><br/> <br/>
        <a href="#"> On Facebook </a><br/><br/>
        <a href="#"> On Instagram </a>
      </p>
      
      <p>
      <span className="highlight">
      Join Our Mailing List
      </span>
      </p>
      </div>
      )
  }
}

export default Footer;