import React from 'react';
import StaffLeave from '../custom_pages/StaffLeave';
import StaffOut from '../custom_pages/StaffOut';

class ManagerRoutes extends React.Component {
  render() {
    return (
      <div>
        {this.props.params.apply === 'staffout' && <StaffOut status={this.props.params.pagename} />}
        {this.props.params.apply === 'staffleave' && <StaffLeave status={this.props.params.pagename} />}
      </div>
    );
  }
}

export default ManagerRoutes;
