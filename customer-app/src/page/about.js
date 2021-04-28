import React, { useState,useEffect } from 'react'


import { Tabs,Row,Col,Button,Drawer } from 'antd';

import { posUserApi } from '../http/api';
import cookie from 'react-cookies';
import {Link,useHistory} from "react-router-dom";

import '../styles/about.css'

import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import '../locale/index';
import intl from 'react-intl-universal';


import store from '../store'
import { connect} from 'react-redux'
import {changeStatus} from '../store/actionCreater'

import GifList from '../components/aboutItem'



const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const About = ({state,changeStatusDate}) => {
    let history = useHistory();

    const [user,setUser] = useState([]);


    const [visible,setVisible] = useState(false)
    const showDrawer = () => {
        setVisible(!visible)
    };

    const onClose = () => {
        setVisible(!visible)
    };



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
    const url = encodeURIComponent('https://www.facebook.com/sharer/sharer.php?u=https://www.baidu.com')
return(
        <>  
        <div>
            <a target="_break" href='https://www.facebook.com/sharer/sharer.php?u=https://www.baidu.com'>facebook</a>
            <a target="_break" href='https://twitter.com/intent/tweet?text=123321&url=https://www.baidu.com'>twitter</a>
            <a target="_break" href='https://www.pinterest.com/pin/create/button/?url==https://www.baidu.com&description=123321'>Pinterest</a>
        </div>
            
            <Button onClick={showDrawer}>open</Button>
            <div onClick={changeStatusDate}>{state}</div>
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
                                <GifList />
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

            <Drawer
                title="Basic Drawer"
                placement="right"
                closable={true}
                onClose={onClose}
                visible={visible}
                getContainer={false}
                style={{ position: 'absolute' }}
            ></Drawer>
        </>
)};


const mapStateToProps =(state)=>{
    return {
        state:state.status
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        changeStatusDate(){
            const action=changeStatus(2)
             dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(About);//和store做连接