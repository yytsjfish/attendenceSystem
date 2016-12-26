import React from 'react';
import { Calendar } from 'antd';
import zhCN from 'antd/lib/calendar/locale/zh_CN';
import moment from 'moment';

// const data=[{}];

class MyAttendence extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    };
  }
  onPanelChange=(value, mode) => {
  }

  dateCellRender=(value) => {
    return (
      <div style={{textAlign:'center'}}>
        <p>{moment({hours:'9', minutes:'30'}).format("HH:mm")} ~ {moment({hours:'18', minutes:'30'}).format("HH:mm")}</p>
        <p>{['全勤', '半勤', '缺勤'][0]}</p>
      </div>
    );
  }

  monthCellRender=(value) => {
    return (
      <div style={{textAlign:'center'}}>
        <h4>本月出勤率:{'100'}%</h4>
      </div>
    );
  }

  render () {
    return (
      <div>
        <h3>出勤记录</h3>
        <Calendar fullscreen={true} monthCellRender={this.monthCellRender} dateCellRender={this.dateCellRender} defaultValue={moment().locale('zh')} onPanelChange={this.onPanelChange} locale={zhCN} />
      </div>
    );
  }
}

export default MyAttendence;
