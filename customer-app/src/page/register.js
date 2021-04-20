import { Form, Input, Button, Checkbox,Card ,Row, Col  } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../styles/login.css';
import { useEffect, useState } from 'react';
import {postRegisterApi} from '../http/api';
import { useHistory } from "react-router-dom";



const Register = () => {
   let history = useHistory();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [name,setName] = useState()
  const data = {email,name,password}
  const postRegister = () => {
    postRegisterApi(data).then(
      (res) => {
          console.log("postRegister", res);
          history.push("/login");
      },
     (error) => {
          console.log("get response failed!");
      }
   );
    
  }

  useEffect(()=>{
      console.log(email,password,name)
  },[email,password,name])
  

  return (
      <div className='card'>

      
    <Card style={{ width: 300 }}>
      <Row style={{marginBottom:'20px'}}>
        <Col>register</Col> 
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
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email"  value={email}  onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Item>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="text"
          placeholder="name"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
        />
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
      

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}} onClick={postRegister}>
        register
        </Button>
      </Form.Item>
    </Form>
    </Card>
    </div>
  );
};

export default Register
