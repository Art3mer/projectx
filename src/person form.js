import { Button, Form, Input } from 'antd';
import React from 'react';
import { CheckCircleTwoTone } from "@ant-design/icons";
import { useState,useEffect } from 'react';

const PersonForm = () => {
  const [Person, setPerson] = useState([]);
  const onFinish = (values) => {
   setPerson([...Person,values])
    console.log('personDetails', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    localStorage.setItem('personDetails',JSON.stringify(Person));
  }); 
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="Name"
        rules={[
          {
            required: true,
            message: 'Please enter your Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Age"
        name="Age"
        rules={[
          {
            required: true,
            message: 'Please enter your Age!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="Email"
        rules={[
          {
            required: true,
            message: 'Please enter your Email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
          <CheckCircleTwoTone twoToneColor="#52c41a" />  
        </Button>
      </Form.Item>
    </Form>
  );

};

export default PersonForm;