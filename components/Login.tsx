import React from 'react';
import { Form, Input, Button } from 'antd';
import styles from '../styles/Home.module.css';

const Login = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="이메일"
        name="email"
        rules={[{ required: true, message: '이메일을 입력해주세요!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="비밀번호"
        name="password"
        rules={[{ required: true, message: '비밀번호를 입력해주세요!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          로그인
        </Button>
        <Button>회원가입</Button>
        <Button>이메일, 비밀번호 찾기</Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
