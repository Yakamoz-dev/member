import React, { useState,useEffect } from 'react'


import { Tabs,Row,Col,Button } from 'antd';

import { posUserApi } from '../http/api';
import cookie from 'react-cookies';
import {Link,useHistory} from "react-router-dom";

import '../styles/about.css'

import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import '../locale/index';
import intl from 'react-intl-universal';


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const About = () => {
    let history = useHistory();

    const [user,setUser] = useState([]);
    const token = cookie.load('api_token')

    const changeLanguage = ()=>{
        cookie.save('lang', "zh");
        window.location.reload();
    }

    const Logout = ()=>{
        cookie.remove('api_token')
        history.push("/");
    }

    const posUser = () => {
        posUserApi({token}).then(
          (res) => {
              console.log("posUserApi:", res);
              setUser(res)
          },
         (error) => {
              console.log("get response failed!");
          }
       );
        
      }

    useEffect(()=>{
        posUser()
    },[])

return(
        <>
            <Row gutter={[24, 24]}>
                <Col span={24} offset={0}>
                    <div style={{backgroundColor:'#e5e5e5',height:'40px',display: 'flex',
            justifyContent: 'space-between',alignItems: 'center'}}>
                        <div>图片</div>
                        <div>
                            <Link to="/login" style={{display:'inline-block'}}>
                                <Button>login in</Button>
                            </Link>
                            
                                <Button onClick={Logout}>login out</Button>
                          
                        </div>
                        
                    </div>
                </Col>
                <Col span={16} offset={4} >
                    <div className="card-container">
                        <Tabs type="card">
                            <TabPane tab="Tab Title 1" key="1">
                                <p>{intl.get('nameText')}</p>
                                <p>{user.name}</p>
                                <p>Content of Tab Pane 1</p>
                            </TabPane>
                            <TabPane tab="Tab Title 2" key="2">
                                <p>Content of Tab Pane 2</p>
                                <p>Content of Tab Pane 2</p>
                                <p>Content of Tab Pane 2</p>
                            </TabPane>
                            <TabPane tab="Tab Title 3" key="3">
                                <p>Content of Tab Pane 3</p>
                                <p>Content of Tab Pane 3</p>
                                <p>Content of Tab Pane 3</p>
                            </TabPane>
                        </Tabs>
                    </div>
                </Col>
            </Row>
            <Button onClick={changeLanguage}>{intl.get('changeText')}</Button>
        </>
)};


export default About