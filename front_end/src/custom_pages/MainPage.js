import React, { Component } from 'react';
import auth from '../custom_components/auth';
import { Link, } from 'react-router';
import { Menu, Breadcrumb, Button, Icon } from 'antd';
import 'antd/dist/antd.min.css';
import '../custom_styles/main_layout.css';
import logoURL from '../custom_components/logo.png';
const SubMenu = Menu.SubMenu;

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
    };
  }

  onCollapseChange() {
    this.setState((prevState, props) => ({
      collapse: !prevState.collapse,
    }));
  }

  handleClick=() => {
    console.log(auth.logout);
    auth.logout();
  }

  render() {
    const collapse = this.state.collapse;
    var UncheckedSubMenu =
      (<SubMenu key="notification" title={<span className="nav-text"><Icon type="notification" />{!collapse && '待审批申请'}</span>} >
         <Menu.Item key="1">
           <Icon type="rocket" />
             {!collapse && '员工外出申请'}
         </Menu.Item>
         <Menu.Item key="2">
           <Icon type="clock-circle-o" />
             {!collapse && '员工请假申请'}
         </Menu.Item>
       </SubMenu>);

    var CheckedSubMenu =
      (<SubMenu key="copy" title={<span className="nav-text"><Icon type="copy" />{!collapse && '已审批申请'}</span>} >
         <Menu.Item key="3">
           <Icon type="rocket" />
             {!collapse && '员工外出申请'}
         </Menu.Item>
         <Menu.Item key="4">
           <Icon type="clock-circle-o" />
             {!collapse && '员工请假申请'}
         </Menu.Item>
       </SubMenu>);


    return (
      <div className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
        <aside className="ant-layout-sider">
          <div className="ant-layout-logo"><img src={logoURL} alt="" /><h3 style={{padding: 4}} >考勤系统</h3></div>
          <Menu mode="inline" theme="dark" defaultSelectedKeys={['calendar']} >
            <Menu.Item key="calendar">
              <Icon type="calendar" />
              {!collapse && <span className="nav-text">我的打卡记录</span>}
            </Menu.Item>
            <Menu.Item key="user">
              <Icon type="user" />
              {!collapse && <span className="nav-text">我的外出</span>}
            </Menu.Item>
            <Menu.Item key="book">
              <Icon type="book" />
              {!collapse && <span className="nav-text">我的请假</span>}
            </Menu.Item>

            {UncheckedSubMenu}
            {CheckedSubMenu}

          </Menu>

          <div className="ant-aside-action" onClick={() => this.onCollapseChange()}>
            {collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div>
        </aside>

        <div className="ant-layout-main">

          <div className="ant-layout-ceiling">
            <div className="ant-layout-wrapper right">
              Hello, {auth.getAccount()} &nbsp;
              <Link to="/login"><Button size="small" onClick={this.handleClick}>Logout</Button></Link>
            </div>
          </div>

          <div className="ant-layout-header"></div>
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>我的请假</Breadcrumb.Item>
              <Breadcrumb.Item>请假申请</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div className="content-layout-height">
                {this.props.children}
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
          This Page is Powered by © 2016 YuFujia .
          </div>
        </div>
      </div>
    );
  }
}



export default MainPage;
