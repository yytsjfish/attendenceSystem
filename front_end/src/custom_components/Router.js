import React from 'react';
import App from '../App';
import MainPage from '../custom_pages/MainPage';
import { browserHistory, Router, Route, withRouter, IndexRedirect, IndexRoute, Redirect } from 'react-router';
import auth from '../custom_components/auth';
import Login from '../custom_pages/Login';
import MainPageRoutes from '../custom_components/MainPageRoutes';
import ManagerRoutes from '../custom_components/ManagerRoutes';


class CustomRouter extends React.Component {
  requireAuth=(nextState, replace) => {
    console.log("auth.loggedIn:");
    console.log(auth.loggedIn());
    if (!auth.loggedIn()) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  }



  render () {
    const LogIn = withRouter(Login);

    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="/login" />
          <Route path="login" component={LogIn} />
          <Redirect from="/mainpage" to="/mainpage/myattendence" />
          <Route path="mainpage" component={MainPage} onEnter={this.requireAuth} >
            <Route path="/mainpage/:pagename" component={MainPageRoutes} />
            <Route path="/mainpage/:pagename/:apply" component={ManagerRoutes} />
          </Route>
        </Route>
      </Router>
    );
  }
}

export default CustomRouter;
