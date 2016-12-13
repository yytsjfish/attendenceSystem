import React, { Component } from 'react';
import '../custom_styles/login.css';
import { Form, Glyphicon, InputGroup, ControlLabel, FormGroup, FormControl, Checkbox, Jumbotron, Button } from 'react-bootstrap';

class Login extends Component {
  render() {
    return(
        <div className="wrapper">
          <form className="form-signin">       
            <h2 className="form-signin-heading">Please login</h2>

            <FormGroup>
              <InputGroup>
                <FormControl type="text" placeholder="Account" />
                <InputGroup.Addon>
                  <Glyphicon glyph="user" />
                </InputGroup.Addon>
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup>
                <FormControl type="password" placeholder="password" />
                <InputGroup.Addon>
                  <Glyphicon glyph="lock" />
                </InputGroup.Addon>
              </InputGroup>
            </FormGroup>

            <FormGroup>
                <Checkbox>Remember me</Checkbox>
            </FormGroup>

            <Button bsStyle="primary" bsSize="large" block >Login</Button>
            <br />
            <Button bsStyle="link">forgot my password ? </Button>
          </form>
        </div>
    );
  }
}

export default Login;
