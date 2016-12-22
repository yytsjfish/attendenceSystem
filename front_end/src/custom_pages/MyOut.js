import React from 'react';
import { Table, Input, Button } from 'antd';
import '../custom_styles/my_out.css';

const data = [{
  key: '1',
  type: '培训',
  days: 32,
  reason: 'New York No. 1 Lake Park',
}, {
  key: '2',
  type: '招聘',
  days: 7,
  reason: 'London No. 1 Lake Park',
}, {
  key: '3',
  type: '技术支援',
  days: 15,
  reason: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  type: '市场调研',
  days: 3,
  reason: 'London No. 2 Lake Park',
}];

class MyOut extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      filterDropdownVisible: false,
      data: data,
      searchText: '',
    };
  }

  onInputChange=(e) => {
    console.log('e.target::', e.target.value);
    this.setState((prevState, props) => ({
      searchText: e.target.value,
    }));
  }

  onSearch=() => {
    console.log('search text::', this.state.searchText);
    const { searchText } = this.state;
    const reg = new RegExp(searchText, 'gi');
    this.setState((prevState, props) => ({
      filterDropdownVisible: false,
      data: data.map((record) => {
        const match = record.name.match(reg);
        if (!match) {
          return null;
        }
        return {
          ...record,
          name: (
            <span>
              {record.name.split(reg).map((text, i) => (
                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
              ))}
            </span>
          ),
        };
      }).filter(record => !!record),
    }));
  }

  render () {
    const columns = [{
      title: '外出类型',
      dataIndex: 'type',
      key: 'type',
      filterDropdown: (
        <div className="custom-filter-dropdown">
          <Input
            placeholder="搜索类型"
            value={this.state.searchText}
            onChange={this.onInputChange}
            onPressEnter={this.onSearch}
          />
          <Button type="primary" onClick={this.onSearch}>Search</Button>
        </div>
      ),
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: visible => this.setState((prevState, props) => ({
         filterDropdownVisible: visible
       })),
    }, {
      title: '外出天数',
      dataIndex: 'days',
      key: 'days',
    }, {
      title: '详细原因',
      dataIndex: 'reason',
      key: 'reason',
    }];

    return (
      <div>
        <h3>外出申请</h3>
        <Table columns={columns} dataSource={this.state.data} />
      </div>
    );
  }
}

export default MyOut;
