import React from 'react';
import Svg from 'svg-react';
import '../custom_styles/not_found_style.css';
import robotURL from '../custom_components/robot.svg';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <div style={{overflow: 'hidden', textAlign:'center', clear:'both'}}>
        <Svg id="robot"  width="320" height="300" viewBox="0 0 160 300" preserveAspectRatio="xMidYMin meet" src={robotURL} />
          <div className="col">
            <h1>404</h1>
            <p>SYSTEM has a configuration problem...</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
