import { Button, Form, Input } from 'antd';
import React from 'react';
import { useState,useEffect } from 'react';

const SpendForm = () => {
  const [Spend, setSpend] = useState([]);
  const onFinish = (values) => {
    setSpend([...Spend,values])
    console.log('Spend', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  useEffect(() => {
    localStorage.setItem('Spend',JSON.stringify(Spend));
  }); 
  const NK = "Naveen";
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
        label="Food :"
        name="Food"
        rules={[
          {
            required: true,
            message: 'Please enter Food!',
          },
        ]}
      >
        <Input value = {NK}/>
      </Form.Item>
      <Form.Item
        label="Amount"
        name="Amount"
        rules={[
          {
            required: true,
            message: 'Type the Correct Amount!',
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
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SpendForm;
