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
            <FormItem {...formItemLayout} label='外出类型' >
              {getFieldDecorator('type', {
                rules: [{ required: true, message: '请选择外出类型' }],
              })(
                <Select showSearch  placeholder="选择外出类型" optionFilterProp="children" >
                  <Option value="培训">培训</Option>
                  <Option value="招聘">招聘</Option>
                  <Option value="市场调研">市场调研</Option>
                  <Option value="技术支援">技术支援</Option>
                  <Option value="其他">其他</Option>
                </Select>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label='外出天数'>
              {getFieldDecorator('days', {
                rules: [{ required: true, message: '请选择外出天数' }],
              })(
                <TimePicker placeholder='选择天数' format='mm' disabledMinutes={()=>{return [0];}} hideDisabledOptions={true}/>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col key='2'>
            <FormItem {...formItemLayout} label='外出地点' >
              {getFieldDecorator('place', {
                initialValue: '',
                rules: [{ required: true, message: '请填写外出地点' }],
              })(
                <Input placeholder="填写外出地点" />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label='外出日期' >
              {getFieldDecorator('time', {
                initialValue: moment().add(1, 'days'),
                rules: [{ required: true, message: '请选择外出日期' }],
              })(
                <DatePicker showToday={false} placeholder='外出日期' disabledDate={this.beforeDate} />
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
                <Input placeholder='请填写外出详细原因' type='textarea' rows={4} />
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

/*
* <Button onClick={this.submitForm}>Submit</Button>
* submitForm=() => {
*   this.props.form.submit(this.onSubmit);
* }
*/
