import { Button, Form, Input } from "antd";
import React from "react";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { useState, useEffect } from "react";
import Amount from "./amount";
import { Card, Layout } from "antd";
import PersonForm from "./person form";
import "./index.css";
const { Footer } = Layout;

const App = () => {
  let person = {};
  let spend = {};
  const [lists, setLists] = useState();
  const [item, setItem] = useState([]);
  const [arr, setArr] = useState([]);

  const [flag, setFlag] = useState(false);

  const onFinish = async (values) => {
    setFlag(false);
    person = localStorage.getItem("person")
    console.log("personDetails", values);
    let personArr={};
    localStorage.setItem("personDetails", JSON.stringify(person));
    personArr.person = values;
    await setItem(personArr);
    console.log("personArr "+JSON.stringify(personArr));
    console.log("finish:: "+item);
  }
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish1 = (values) => {
    console.log("fuckittt2222"+item)
    item.spend = values ;
    let localArr = arr;
    console.log("itemitem "+item);
    localArr.push(item);

    console.log("fuckittt2222 "+localArr)
    setItem(item);
    setArr(localArr);
    console.log("checkcheck "+JSON.stringify(arr));
    setFlag(true);
  };
  const onFinishFailed1 = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    localStorage.setItem("Spend", JSON.stringify(spend));
  });
  return (
    <Layout className="site-page-header">
      <PersonForm />
      <div className="flexing">
        <Card title="Add person" bordered={true}>
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
                  message: "Please enter your Name!",
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
                  message: "Please enter your Age!",
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
                  message: "Please enter your Email!",
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
        </Card>

        <Card title="Add Amount" bordered={true}>
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
            onFinish={onFinish1}
            onFinishFailed={onFinishFailed1}
            autoComplete="off"
          >
            <Form.Item
              label="Food :"
              name="Food"
              rules={[
                {
                  required: true,
                  message: "Please enter Food!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Amount"
              name="Amount"
              rules={[
                {
                  required: true,
                  message: "Type the Correct Amount!",
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
        </Card>
      </div>
      <Card title="Spend Analyser" bordered={true}>
        {flag ? (
          arr.map((item,i) => {
          return (
          <div>
            <p>Name : {item.person.Name}</p>
             <p>Amount :{item.spend.Amount}</p>
          </div>
        )   
        })):null}  
      </Card>
      <Footer style={{ textAlign: "right" }}>
        <h1>Spend Analyser</h1>
        <p>©2022 Created by Art3mer</p>
      </Footer>
    </Layout>
  );
};

export default App;
