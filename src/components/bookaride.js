import React from 'react';
import './bookaride.css';
import { Form, Row, FormGroup, Button, Input, InputGroup, InputGroupAddon, Label} from 'reactstrap';

class BookaRide extends React.Component{
  render(){
    return(
      <Form className="bookaride">
          <h3>Let's Ride! Book Now.</h3>
          <InputGroup className="input">
           <InputGroupAddon addonType="prepend">Pick-Up &nbsp;</InputGroupAddon>
           <Input placeholder="Where would you like to be picked up?" id="pickup"/>
          </InputGroup>
          <InputGroup className="input">
           <InputGroupAddon addonType="prepend">Drop-Off</InputGroupAddon>
           <Input placeholder="And where would you like to be dropped off?"/>
          </InputGroup>
          
          
          <Row style={{margin:'10px 10px 0px 1px'}} form>
          
          <InputGroup style={{width:'40%', marginRight:'10px'}}>
             <InputGroupAddon addonType="prepend"># of Passengers</InputGroupAddon>
             <Input type="number"/>
            </InputGroup>
            
          <FormGroup check>
            <Label className="input" check>
              <Input type="checkbox" />
              Round Trip?
            </Label>
          
          </FormGroup>
            
          </Row>
          <Button color="primary" className="input" id="findaride">Find a Ride</Button>
      </Form>
      )
  }
}

export default BookaRide;