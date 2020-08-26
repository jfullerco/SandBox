import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
//import "./style.css";
//import "./ConnectDB.js";

class App extends React.Component {
  render() {
    return (
  
    
      
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Client Search"
            />
              <InputGroup.Addon>
              <Glyphicon glyph="search"></Glyphicon>
              </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
    
    
  
    )


    
  }
}

export default App;