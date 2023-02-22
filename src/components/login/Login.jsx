import { Button, Checkbox, Col, Form, Input, message, Row } from "antd";
import React from "react";
import "../../style/Login.css";
import LoginGoogle from "../../asset/Login_With_Google.png";
import Image from "../../asset/Login_Image.png";

function Login() {
  const onFinish = () => {
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  return (
    <div className="login-container">
      <Row className="login-background">
        <Col flex={23} className="login-form-container">
          <Form
            name="basic"
            layout="vertical"
            className="login-form-left"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 20 }}
            style={{ maxWidth: 642 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h1 style={{ color: "#FACD66" }}>Login</h1>
            <Form.Item
              label="Email"
              name="Email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input placeholder="Input email" style={{height: "48px"}}/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Input password" style={{height: "48px"}}/>
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox style={{ color: "#FFF" }}>Remember me</Checkbox>
              </Form.Item>

              <a
                className="login-form-forgot"
                style={{ float: "right", color: "#FFF" }}
                href=""
              >
                Forgot password
              </a>
            </Form.Item>
            <Form.Item>
              <Button className="login-submit" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>
            <Form.Item className="login-google">
              <p>or continue with</p>
              <img src={LoginGoogle} alt="Logo" />
            </Form.Item>
            <Form.Item className="login-google">
              <span>Don’t have an account yet? </span>
              <a
                style={{ color: "#FFF" }}
                className="login-form-register"
                href=""
              >
                Register for free
              </a>
            </Form.Item>
          </Form>
        </Col>
        <Col className="login-image" flex={1}>
          <img src={Image} alt="" />
        </Col>
      </Row>
    </div>
  );
}

export default Login;
