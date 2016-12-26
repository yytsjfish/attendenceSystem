import React from 'react';
import MyLeave from '../custom_pages/MyLeave';
import MyOut from '../custom_pages/MyOut';
import MyAttendence from '../custom_pages/MyAttendence';


class MainPageRoutes extends React.Component {

  /*
  * browserHistory.push('/notfound');也可以实现，或者在Router处实现onEnter()

    componentWillMount() {
      if( [ 'myattendence', 'myout', 'myleave' ].indexOf(this.props.params.pagename) === -1) {
        // browserHistory.push('/notfound');
        this.props.router.replace('/notfound');
      }
    }
  */

  render() {
    return (
      <div>
          {this.props.params.pagename === 'myattendence' && <MyAttendence />}
          {this.props.params.pagename === 'myout' && <MyOut />}
          {this.props.params.pagename === 'myleave' && <MyLeave />}
      </div>
    );
  }
}

export default MainPageRoutes;
