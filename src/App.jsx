import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
//import "./style.css";
//import "./ConnectDB.js";

class App extends Component {
  render() {
    return (
  <div className="App">
    <div className="title-main"> Sandboxed </div>
      <div className="search-top">
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
    
    </div>
    <div className="menu-top"></div>
    <div className="hero-nav"></div>
    <div className="view-box"></div>
  </div>



    )
  }
}

export default App;