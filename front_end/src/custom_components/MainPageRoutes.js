import React from 'react';
import MyLeave from '../custom_pages/MyLeave';
import MyOut from '../custom_pages/MyOut';
import MyAttendence from '../custom_pages/MyAttendence';


class MainPageRoutes extends React.Component {
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
