import { Form, Input, Button, Checkbox,Card ,Row, Col  } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import loginStyles from '../styles/Login.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { postLoginApi } from '../http/api';
import cookie from 'react-cookies'

const Login = () => {
  const router = useRouter()
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

 const data = ({email,password})

  const postLogin = () => {
    postLoginApi(data).then(
      (res) => {
          console.log("get article response:", res);
          cookie.save('token',res.access_token)
          router.push('/')
      },
     (error) => {
          console.log("get response failed!");
      }
   );
    
  }

  useEffect(()=>{
      console.log(email,password)
  },[email,password])

  return (
      <div className={loginStyles.card}>

      
    <Card style={{ width: 300 }}>
      <Row style={{marginBottom:'20px'}}>
        <Col>Login</Col> 
      </Row>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        />
      </Form.Item>
      <Form.Item labelAlign='right'>
        <a className="login-form-forgot" href="" style={{width:'100%',textAlign:'right',display:'inline-block'}}>
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}} onClick={postLogin}>
          Log in
        </Button>
        Or <a href=""  onClick={(e) =>{event.preventDefault(); router.push('/register')}}>register now!</a>
      </Form.Item>
    </Form>
    </Card>
    </div>
  );
};

export default Login
