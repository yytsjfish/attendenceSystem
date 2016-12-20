import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainPage from './custom_pages/MainPage';
import { browserHistory, Router, Route, withRouter, IndexRedirect } from 'react-router';
import auth from './custom_components/auth';
import Login from './custom_pages/Login';
// import MainPage1 from './custom_pages/MainPage1';
// import Content from './custom_components/Content';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const LogIn = withRouter(Login);

function requireAuth(nextState, replace) {
  console.log("auth.loggedIn:");
  console.log(auth.loggedIn());
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

ReactDOM.render(
  (<Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/login" />
      <Route path="login" component={LogIn} />
      <Route path="mainpage" component={MainPage} onEnter={requireAuth} />
    </Route>
  </Router>),
  document.getElementById('root')
);
