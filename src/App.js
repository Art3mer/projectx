import { Layout } from "antd";
import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";
import { Form, Rate } from "antd";
import { DingdingOutlined } from "@ant-design/icons";
import PersonForm from "./person form";
import SpendForm from "./spend form";
import PD from "./PD";
import Amount from "./amount";
const { Header, Content, Footer } = Layout;
const App = () => (
  <>
    <Layout>
      <Header
        style={{
          className: "container",
          backgroundColor: "orange",
          fontFamily: "serif",
          fontSize: "35px",
        }}
      >
        <DingdingOutlined />
        SpEND ANAlyser !
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
                  <PersonForm />
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Add Spend" bordered={true}>
                  <SpendForm />
                </Card>
              </Col>
            </Row>
          </div>

          <Card title="Spend Analyser">
          {/* <PD/> */}
          <Amount/>
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
  </>
);

export default App;