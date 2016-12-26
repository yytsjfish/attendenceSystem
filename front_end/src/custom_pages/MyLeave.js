import React from 'react';
import { Table, Input, Button, Popover, Modal } from 'antd';
import moment from 'moment';
import NewLeaveItem from '../custom_components/NewLeaveItem';
import '../custom_styles/my_leave.css';

var data = [{
  key: '1',
  time: moment({years: '2015', months: '2', date: '12'}).format("YYYY-MM-DD"),
  type: '培训',
  days: 32,
  reason: '去深圳参加公司组织的年度技术培训',
  appTime: moment({years: '2015', months: '2', date: '6'}).format("YYYY-MM-DD"),
  appStatus: '已通过',
}, {
  key: '2',
  time: moment({years: '2016', months: '8', date: '22'}).format("YYYY-MM-DD"),
  type: '招聘',
  days: 7,
  reason: '参与华科武大的2017届校园招聘',
  appTime: moment({years: '2016', months: '8', date: '16'}).format("YYYY-MM-DD"),
  appStatus: '已通过',
}, {
  key: '3',
  time: moment({years: '2014', months: '7', date: '13'}).format("YYYY-MM-DD"),
  type: '技术支援',
  days: 15,
  reason: '到红帽软件公司提供SAP管理系统的技术支持',
  appTime: moment({years: '2014', months: '6', date: '30'}).format("YYYY-MM-DD"),
  appStatus: '已通过',
}, {
  key: '4',
  time: moment({years: '2014', months: '11', date: '5'}).format("YYYY-MM-DD"),
  type: '市场调研',
  days: 3,
  reason: '去伦敦调查可发展用户范围',
  appTime: moment({years: '2014', months: '10', date: '30'}).format("YYYY-MM-DD"),
  appStatus: '已驳回',
}, {
  key: '5',
  time: moment({years: '2014', months: '7', date: '13'}).format("YYYY-MM-DD"),
  type: '技术支援',
  days: 15,
  reason: '到红帽软件公司提供SAP管理系统的技术支持',
  appTime: moment({years: '2014', months: '6', date: '30'}).format("YYYY-MM-DD"),
  appStatus: '已通过',
}, {
  key: '6',
  time: moment({years: '2014', months: '11', date: '5'}).format("YYYY-MM-DD"),
  type: '市场调研',
  days: 3,
  reason: '去伦敦调查可发展用户范围',
  appTime: moment({years: '2014', months: '10', date: '30'}).format("YYYY-MM-DD"),
  appStatus: '已驳回',
}, {
  key: '7',
  time: moment({years: '2014', months: '7', date: '13'}).format("YYYY-MM-DD"),
  type: '技术支援',
  days: 15,
  reason: '到红帽软件公司提供SAP管理系统的技术支持',
  appTime: moment({years: '2014', months: '6', date: '30'}).format("YYYY-MM-DD"),
  appStatus: '已通过',
}, {
  key: '8',
  time: moment({years: '2014', months: '11', date: '5'}).format("YYYY-MM-DD"),
  type: '市场调研',
  days: 3,
  reason: '去伦敦调查可发展用户范围',
  appTime: moment({years: '2014', months: '10', date: '30'}).format("YYYY-MM-DD"),
  appStatus: '已驳回',
}, {
  key: '9',
  time: moment({years: '2014', months: '7', date: '13'}).format("YYYY-MM-DD"),
  type: '技术支援',
  days: 15,
  reason: '到红帽软件公司提供SAP管理系统的技术支持',
  appTime: moment({years: '2014', months: '6', date: '30'}).format("YYYY-MM-DD"),
  appStatus: '已通过',
}, {
  key: '10',
  time: moment({years: '2014', months: '11', date: '5'}).format("YYYY-MM-DD"),
  type: '市场调研',
  days: 3,
  reason: '去伦敦调查可发展用户范围',
  appTime: moment({years: '2014', months: '10', date: '30'}).format("YYYY-MM-DD"),
  appStatus: '已驳回',
}, {
  key: '11',
  time: moment({years: '2014', months: '7', date: '13'}).format("YYYY-MM-DD"),
  type: '技术支援',
  days: 15,
  reason: '到红帽软件公司提供SAP管理系统的技术支持',
  appTime: moment({years: '2014', months: '6', date: '30'}).format("YYYY-MM-DD"),
  appStatus: '已通过',
}, {
  key: '12',
  time: moment({years: '2014', months: '11', date: '5'}).format("YYYY-MM-DD"),
  type: '市场调研',
  days: 3,
  reason: '去伦敦调查可发展用户范围',
  appTime: moment({years: '2014', months: '10', date: '30'}).format("YYYY-MM-DD"),
  appStatus: '已驳回',
}, {
  key: '13',
  time: moment({years: '2014', months: '7', date: '13'}).format("YYYY-MM-DD"),
  type: '技术支援',
  days: 15,
  reason: '到红帽软件公司提供SAP管理系统的技术支持',
  appTime: moment({years: '2014', months: '6', date: '30'}).format("YYYY-MM-DD"),
  appStatus: '已通过',
}, {
  key: '14',
  time: moment({years: '2014', months: '11', date: '5'}).format("YYYY-MM-DD"),
  type: '市场调研',
  days: 3,
  reason: '去伦敦调查可发展用户范围',
  appTime: moment({years: '2014', months: '10', date: '30'}).format("YYYY-MM-DD"),
  appStatus: '已驳回',
}];

class MyLeave extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      filterDropdownVisible: false,
      data: data,
      searchText: '',
      addModalVisible: false,
      annualLeave: 7,
    };
  }

  onInputChange=(e) => {
    const value = e.target.value;
    this.setState((prevState, props) => ({
      searchText: value,
    }));
  }

  onSearch=() => {
    const { searchText } = this.state;
    const reg = new RegExp(searchText, 'gi');
    this.setState((prevState, props) => ({
      filterDropdownVisible: false,
      data: data.map((record) => {
        const match = record.type.match(reg);
        if (!match) {
          return null;
        }
        return {
          ...record,
          type: (
            <span>
              {record.type.split(reg).map((text, i) => (
                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
              ))}
            </span>
          ),
        };
      }).filter(record => !!record),
    }));
  }

  formSubmit=(values) => {
    values.appStatus='待审批';
    values.appTime=moment().format("YYYY-MM-DD");
    data.unshift(values);
    this.setState((prevState, props) => ({
      data: data,
      addModalVisible: false,
    }));
  }

  render () {
    const columns = [{
      title: '请假类型',
      dataIndex: 'type',
      key: 'type',
      filterDropdown: (
        <div className="custom-filter-dropdown">
          <Input
            size="small"
            placeholder="搜索类型"
            value={this.state.searchText}
            onChange={this.onInputChange}
            onPressEnter={this.onSearch}
          />
          <Button size="small" type="primary" onClick={this.onSearch}>搜索</Button>
        </div>
      ),
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: visible => this.setState((prevState, props) => ({
         filterDropdownVisible: visible
       })),
    },{
      title: '申请日期',
      dataIndex: 'appTime',
      key: 'appTime',
      sorter: (a, b) => a.appTime - b.appTime,
    },{
      title: '请假日期',
      dataIndex: 'time',
      key: 'time',
      sorter: (a, b) => a.time - b.time,
    },{
      title: '请假天数',
      dataIndex: 'days',
      key: 'days',
      sorter: (a, b) => a.days - b.days,
    },{
      title: '详细原因',
      dataIndex: 'reason',
      key: 'reason',
      render: (text, record) => <Popover content={text}><span>{text.substr(0,10)}{text.length >= 10 && '...'}</span></Popover>,
    },{
      title: '申请状态',
      dataIndex: 'appStatus',
      key: 'appStatus',
      filters: [{
        text: '已通过',
        value: '已通过',
      },{
        text: '已驳回',
        value: '已驳回',
      },{
        text: '待审批',
        value: '待审批',
      }],
      onFilter: (value, record) => record.reason.indexOf(value) === 0,
    }];

    const pagination = {
      total: this.state.data.length,
      defaultPageSize: 10,
      simple: 'simple',
    }

    return (
      <div>
        <p className='float-element' >共{this.state.data.length}条申请</p>
        <Button type='primary' icon='plus' className='float-element-button' onClick={() => this.setState(() => ({addModalVisible: true}))}>添加</Button>
        <Modal
          title="申请新的假期" closable={false} maskClosable={false}
          wrapClassName='vertical-center-modal'
          visible={this.state.addModalVisible}
          footer={null}
          >
          <NewLeaveItem formSubmit={this.formSubmit} formCancel={() => this.setState(() => ({addModalVisible: false}))} />
        </Modal>
        <h3 style={{marginBottom: '1.5rem'}}>请假申请</h3>
        <Table columns={columns} dataSource={this.state.data} pagination={pagination} />
        <h4>我的总年假: <strong>{9}</strong>天</h4>
        <h4>我的剩余年假: <strong>{this.state.annualLeave}</strong>天</h4>
      </div>
    );
  }
}

export default MyLeave;
