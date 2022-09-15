import { Button, Form, Input } from "antd";
import React from "react";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Card, Layout, Col, Row } from "antd";
import "./index.css";
import { DingdingOutlined,ZhihuOutlined } from "@ant-design/icons";
import "./App.css";

const { Header, Content, Footer } = Layout;
const App = () => {
  let person = {};
  let spend = {};

  // const [lists, setLists] = useState([]);
  const [item, setItem] = useState([]);
  const [arr, setArr] = useState([]);
  const [flag, setFlag] = useState(false);
  const [average, setAverage] = useState(0);

  const onFinish = async (values) => {
    setFlag(false);
    person = localStorage.getItem("person");
    console.log("personDetails", values);
    let personArr = {};
    localStorage.setItem("personDetails", JSON.stringify(person));
    personArr.person = values;
    await setItem(personArr);
    // console.log("finish: " + JSON.stringify(item));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:",errorInfo);
  };
  const onFinish1 = (values) => {
    console.log("OnFinish1 Values: " + JSON.stringify(item));
    item.spend = values;
    let localArr = arr;

    localArr.push(item);
    setItem(item);
    setArr(localArr);
    setFlag(true);
    var total=0;
    localArr.map((item, i) => {
      console.log("item "+JSON.stringify(item));
      total+=parseInt(item.spend.Amount);
    });
    console.log("TOTAL "+total);
    console.log("length "+arr.length);
    setAverage(total/arr.length);
  };
  const onFinishFailed1 = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    localStorage.setItem("Spend", JSON.stringify(spend));
  });
  
  return (
    <Layout>
      <Header
        style={{
          className: "container",
          backgroundColor: "orange",
          fontFamily: "serif",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
       <ZhihuOutlined />
        Spend Analyser
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          marginTop: 50,
        }}
      >
        <div
          className="site-layout-background"
          style={{
            textAlign: "center",
            padding: 50,
            minHeight: 600,
            backgroundColor: "grey",
          }}
        >
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={12}>
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
              </Col>
              <Col span={12}>
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
                          pattern: new RegExp(/^[0-9]+$/),
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
              </Col>
            </Row>
          </div>
          <Card title="Spend Analyser" bordered={true}
          style={{
            textAlign: "Left",
          }}>
            {flag
              ? arr.map((item, i) => {
                  return (
                    <div key={i}>
                      <p>Name : {item.person.Name}</p>
                      <p>Amount :{item.spend.Amount}</p>
                      <p>average :{average}</p>
                    </div>
                  );
                })
              : null}
            <div></div>
          </Card>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "left",
          fontSize: "10px",
          fontFamily: "serif",
        }}
      >
        <DingdingOutlined />
        TAsk!
        <p>@all rights reserved</p>
      </Footer>
    </Layout>
  );
};
export default App;
