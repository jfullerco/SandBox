import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
  
    <div>
      
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Client Search"
              
            />
              <InputGroup.Addon>
              <Glyphicon></Glyphicon>
              </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
    
    </div>
    )
    
  }
}
export default App;
