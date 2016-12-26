import React from 'react';
import StaffLeave from '../custom_pages/StaffLeave';
import StaffOut from '../custom_pages/StaffOut';

class ManagerRoutes extends React.Component {
  /*
    componentWillMount() {
      if( [ 'staffout', 'staffleave' ].indexOf(this.props.params.apply) === -1) {
        // browserHistory.push('/notfound');
        this.props.router.replace('/notfound');
      }
    }
  */
  render() {
    return (
      <div>
        {this.props.params.apply === 'staffout' && <StaffOut pagename={this.props.params.pagename} />}
        {this.props.params.apply === 'staffleave' && <StaffLeave pagename={this.props.params.pagename} />}
      </div>
    );
  }
}

export default ManagerRoutes;
