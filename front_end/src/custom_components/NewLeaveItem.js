import React, { Component } from 'react';
import { Form, Input, TimePicker, DatePicker, Select, Row, Col, Button } from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;
import moment from 'moment';


const NewOutItem = Form.create()(class NewOutItemForm extends Component {
  
  beforeDate=(current) => {
    return current.valueOf() <= moment() || current.valueOf() > moment().add(20, 'days');
  }

  onSubmit=(e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if(!err) {
        values.time=values.time.format("YYYY-MM-DD");
        values.days=values.days.format("m");
        this.props.formSubmit(values);
      }
    });
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
    };

    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.onSubmit} horizontal>
        <Row>
          <Col key='1'>
            <FormItem {...formItemLayout} label='请假类型' >
              {getFieldDecorator('type', {
                rules: [{ required: true, message: '请选择请假类型' }],
              })(
                <Select showSearch  placeholder="选择请假类型" optionFilterProp="children" >
                  <Option value="病假">病假</Option>
                  <Option value="事假">事假</Option>
                  <Option value="年假">年假</Option>
                  <Option value="婚假">婚假</Option>
                  <Option value="陪产假">陪产假</Option>
                  <Option value="产检假">产检假</Option>
                  <Option value="产假">产假</Option>
                  <Option value="工伤假">工伤假</Option>
                </Select>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label='请假天数'>
              {getFieldDecorator('days', {
                rules: [{ required: true, message: '请选择请假天数' }],
              })(
                <TimePicker placeholder='选择天数' format='mm' disabledMinutes={()=>{return [0];}} hideDisabledOptions={true}/>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col key='2'>
            <FormItem {...formItemLayout} label='请假日期' >
              {getFieldDecorator('time', {
                initialValue: moment().add(1, 'days'),
                rules: [{ required: true, message: '请选择请假日期' }],
              })(
                <DatePicker showToday={false} placeholder='请假日期' disabledDate={this.beforeDate} />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col key='3'>
            <FormItem {...formItemLayout} label='详细原因' >
              {getFieldDecorator('reason', {
                rules: [{ required: true, message: '填写详细原因' }],
              })(
                <Input placeholder='请填写请假详细原因' type='textarea' rows={4} />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col key='4'>
            <div className='float-submit-button'>
              <Button htmlType='submit' type='primary' >提交</Button>
              <Button type='ghost' onClick={this.props.formCancel} >取消</Button>
            </div>
          </Col>
        </Row>
      </Form>
    );
  }
});

export default NewOutItem;
