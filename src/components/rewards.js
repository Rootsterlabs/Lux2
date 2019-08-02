import React from 'react';
import './rewards.css';
import {Button} from 'reactstrap'

class Rewards extends React.Component{
  render(){
    return(
        <div className="rewards">
          <div className="blurb">
            <h3>Join Our Rewards Program</h3>
            <p>Become a frequent traveler with our rewards program and receive tons of travel oppurtunities and perks!</p>
            <ul>
              <li>Receive reward points for every ride and use them for discounts and free transfers</li>
              <li>Members only discounts and offers</li>
              <li> Private Transportation Priority Services</li>
            </ul>
            <Button color="primary">Join Now</Button>
          </div>
          <img src={require('../assets/deals.png')}/>
        </div>
      )
  }
}

export default Rewards;