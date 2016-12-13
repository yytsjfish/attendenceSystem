import React, { Component } from 'react';
import { Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.min.css';
import '../custom_styles/main_layout.css';
const SubMenu = Menu.SubMenu;

class MainPage1 extends Component {
  render() {
    return(
      <div className="ant-layout-aside">
        <div className="ant-layout-ceiling">
          <div className="ant-layout-wrapper">
            <ul className="right">
              <li>xxx@example.com</li>
              <li>|</li>
              <li>帮助中心</li>
              <li>|</li>
              <li>客服/投诉电话：400-826-7710</li>
            </ul>
          </div>
        </div>
        
        <aside className="ant-layout-sider">
          <div className="ant-layout-logo"></div>
          <Menu mode="inline" theme="dark"
            defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
            <SubMenu key="sub1" title={<span><Icon type="user" />外出</span>}>
              <Menu.Item key="1">选项1</Menu.Item>
              <Menu.Item key="2">选项2</Menu.Item>
              <Menu.Item key="3">选项3</Menu.Item>
              <Menu.Item key="4">选项4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="laptop" />请假</span>}>
              <Menu.Item key="5">选项5</Menu.Item>
              <Menu.Item key="6">选项6</Menu.Item>
              <Menu.Item key="7">选项7</Menu.Item>
              <Menu.Item key="8">选项8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="notification" />查看打卡记录</span>}>
              <Menu.Item key="9">选项9</Menu.Item>
              <Menu.Item key="10">选项10</Menu.Item>
              <Menu.Item key="11">选项11</Menu.Item>
              <Menu.Item key="12">选项12</Menu.Item>
            </SubMenu>
          </Menu>
        </aside>
        <div className="ant-layout-main">
          <div className="ant-layout-header"></div>
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
              <Breadcrumb.Item>某应用</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ height: 790 }}>
                内容区域
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
          Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
          </div>
        </div>
      </div>
    );
  }

}

export default MainPage1;
