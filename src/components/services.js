import React from 'react';
import './services.css';

export class Services extends React.Component {
      
    pictures = {
      hotel:'https://49lg1r5qit613g3e7irib0xf-wpengine.netdna-ssl.com/wp-content/themes/supershuttle/images/Shared-Icon.svg',
      group:'https://49lg1r5qit613g3e7irib0xf-wpengine.netdna-ssl.com/wp-content/themes/supershuttle/images/Shared-Icon.svg',
      priv:'https://49lg1r5qit613g3e7irib0xf-wpengine.netdna-ssl.com/wp-content/themes/supershuttle/images/Shared-Icon.svg'
    }
  render(){

    return(
        <div className="services">
          <Service
          img={this.pictures.hotel}
          title="Hotel Packages"
          blurb="Save big when you book a hotel with your shuttle."
          />
          <Service
          img={this.pictures.group}
          title="Group Rides"
          blurb="Get exclusive deals when you ride with a group."
          />
          <Service
          img={this.pictures.priv}
          title="Private Transport"
          blurb="Get a private ride in one of our luxury vehicles."
          />
        </div>
      )
  }
}

export class Service extends React.Component {
  render(){
    return(
        <div className="service">
          <img src={this.props.img}/>
          <div>
            <h5>{this.props.title}</h5>
            <p>{this.props.blurb}</p>
            <a href="#">Learn More &#x2192;</a>
          </div>
        </div>
      )
  }
}

