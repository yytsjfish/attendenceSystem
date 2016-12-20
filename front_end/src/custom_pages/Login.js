import React, { Component } from 'react';
import '../custom_styles/login.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
import auth from '../custom_components/auth.js';



const Login = Form.create()(class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      error: false,
    }
  }

  handleSubmit=(e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const account = values.userName;
        const password = values.password;

        auth.login(account, password, (loggedIn) => {
          if (!loggedIn)
            return this.setState({ error: true });

          console.log('this.props:', this.props);
          const { location } = this.props;

          if (location.state && location.state.nextPathname) {
            this.props.router.replace(location.state.nextPathname);
          } else {
            this.props.router.replace('/mainpage');
          }
        })
      }
    });
  }

  // handleSubmit=(event) => {
  //   event.preventDefault();
//
    // const email = this.refs.email.value;
    // const pass = this.refs.pass.value;
    //
    // const email = "";
    // const pass = "";

    /*eslint no-console: ["error", { allow: ["log","warn", "error"] }] */

  //   auth.login(email, pass, (loggedIn) => {
  //     if (!loggedIn)
  //       return this.setState({ error: true });
  //
  //     const { location } = this.props;
  //
  //     if (location.state && location.state.nextPathname) {
  //       this.props.router.replace(location.state.nextPathname);
  //     } else {
  //       this.props.router.replace('/mainpage');
  //     }
  //   })
  // }

  render() {
    const { getFieldDecorator } = this.props.form;
    return(
        <div className="wrapper">

            <Form onSubmit={this.handleSubmit} className="form-signin">
              <h2 className="form-signin-heading">Please login</h2>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input addonBefore={<Icon type="user" />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot">Forgot password</a>
                <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </FormItem>
              {this.state.error && (
                <p>Bad login information</p>
              )}
            </Form>
        </div>
    );
  }
});

export default Login;
