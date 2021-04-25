import React, { useState,useEffect } from 'react'


import { Tabs,Row,Col,Button,Drawer } from 'antd';

import { getGifList,getPointsList,getMakeUrl,getAddPoints } from '../http/api';
import cookie from 'react-cookies';
import {Link,useHistory} from "react-router-dom";


import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import '../locale/index';
import intl from 'react-intl-universal';


import store from '../store'
import { connect} from 'react-redux'
import {changeStatus} from '../store/actionCreater'


const GifList = () => {
    const token = cookie.load('api_token')
    const [list,setlist] = useState();
    const getGifListApi = () => {
        getGifList({token}).then(
          (res) => {
              console.log("getGifList:", res);
              setlist(res.list)
          },
         (error) => {
              console.log("get response failed!");
          }
       );
        
      }

      const getPointsListApi = () => {
        getPointsList({token}).then(
          (res) => {
              console.log("getPointsList:", res);
            //   setlist(res.list)
          },
         (error) => {
              console.log("get response failed!");
          }
       );
        
      }

      const getMakeUrlApi = () => {
        getMakeUrl({token}).then(
          (res) => {
              console.log("getMakeUrl:", res);
            //   setlist(res.list)
          },
         (error) => {
              console.log("get response failed!");
          }
       );
        
      }

      const getAddPointsApi = () => {
        getAddPoints().then(
          (res) => {
              console.log("getAddPoints:", res);
            //   setlist(res.list)
          },
         (error) => {
              console.log("get response failed!");
          }
       );
        
      }



    useEffect(()=>{
        getGifListApi()
        // 获取积分记录
        getPointsListApi()
        // 生成分享连接
        getMakeUrlApi()
        //增加积分
        // getAddPointsApi()
    },[]) 

    return (
        <div>ok</div>
    )
}

export default GifList
