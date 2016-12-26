import React, { Component } from 'react';
import auth from './custom_components/auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: auth.loggedIn(),
    };
  }

  updateAuth=(loggedIn)=>{

    this.setState((prevState, props) => ({
      loggedIn
    }));
  };

  componentWillMount() {
    auth.onChange = this.updateAuth;
    auth.login();
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

}

export default App;
