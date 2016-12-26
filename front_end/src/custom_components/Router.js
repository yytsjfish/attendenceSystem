import React from 'react';
import App from '../App';
import MainPage from '../custom_pages/MainPage';
import { browserHistory, Router, Route, withRouter, IndexRedirect, Redirect } from 'react-router';
import auth from '../custom_components/auth';
import Login from '../custom_pages/Login';
import MainPageRoutes from '../custom_components/MainPageRoutes';
import ManagerRoutes from '../custom_components/ManagerRoutes';
import NotFound from '../custom_pages/NotFound';


class CustomRouter extends React.Component {
  requireAuth=(nextState, replace) => {
    if (!auth.loggedIn()) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  }

  /*
  * 进入mainpage的页面之前验证路径是否正确，否则返回404
  */
  checkURL=(nextState, replace) => {
    if ( [ 'myattendence', 'myout', 'myleave', 'wait', 'already' ].indexOf(nextState.params.pagename) === -1 ) {
      replace('/notfound');
    } else if(['wait', 'already'].indexOf(nextState.params.pagename) === -1){
      if(nextState.params.apply)
        replace('/notfound');
    } else {
      if ( nextState.params.apply && [ 'staffout', 'staffleave' ].indexOf(nextState.params.apply) === -1 )
        replace('/notfound');
    }
  }

  createElement=(Component, props) => {
    return <Component {...props} account={auth.getAccount() ? JSON.parse(auth.getAccount()) : auth.getAccount()}/>
  }

  render () {
    const LogIn = withRouter(Login);

    return (
      <Router history={browserHistory} createElement={this.createElement}>
        <Route path="/" component={App} >
          <IndexRedirect to="/login" />
          <Route path="login" component={LogIn} />
          <Redirect from="mainpage" to="mainpage/myattendence" />
          <Route name='mainpage' breadcrumbName="主页" path="mainpage" component={MainPage} onEnter={this.requireAuth} >
            <Route name='basic' breadcrumbName="基本 &nbsp;/ &nbsp;:pagename" path="/mainpage/:pagename" component={MainPageRoutes} onEnter={this.checkURL} />
            <Route name='management' breadcrumbName="管理 &nbsp;/ &nbsp;:apply" path="/mainpage/:pagename/:apply" component={ManagerRoutes} onEnter={this.checkURL} />
          </Route>
          <Route path="**" component={NotFound} />
        </Route>
      </Router>
    );
  }
}

export default CustomRouter;
