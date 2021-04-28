import React from 'react';

import {postUploadApi,getUsersApi,getgiftslistApi,getpointslistApi} from '../http/api'

import { useEffect, useState } from 'react';
import cookie from 'react-cookies'

import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

 const BasePage = () => {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBwLndhdGVyZHJvcGZpbHRlci5jb21cL2FwaVwvYWRtaW5cL2xvZ2luIiwiaWF0IjoxNjE5NDA0MzIwLCJleHAiOjE2MTk2MjAzMjAsIm5iZiI6MTYxOTQwNDMyMCwianRpIjoiaHpOOWNoU2VzekZxbDU5NiIsInN1YiI6MSwicHJ2IjoiZGY4ODNkYjk3YmQwNWVmOGZmODUwODJkNjg2YzQ1ZTgzMmU1OTNhOSIsInJvbGUiOiJhZG1pbiJ9.LbYwkJ0BxcGE2NWVF3Gidcw_Pfx6TtpmNzDfRsEFs9Q'
  // const [email,setEmail] = useState()
  const getUsers = () => {
    getUsersApi({token}).then(
      (res) => {
          console.log("get getUsersApi:", res);
      },
     (error) => {
          console.log("get response failed!");
      }
   );
  }

  const getgiftslist = () => {
    getgiftslistApi({token}).then(
      (res) => {
          console.log("get getgiftslistApi:", res);
      },
     (error) => {
          console.log("get response failed!");
      }
   );
  }

  const getpointslist = () => {
    getpointslistApi({token}).then(
      (res) => {
          console.log("get getpointslistApi:", res);
      },
     (error) => {
          console.log("get response failed!");
      }
   );
  }

  useEffect(()=>{
      //获取积分记录
      getpointslist()
      //获取礼品列表
      getgiftslist()
      //获取用户列表
      getUsers()
  },[])

  const props = {
    name: 'file',
    action: 'https://app.waterdropfilter.com/api/admin/upload',
    headers: {
      authorization: 'authorization-text',
    },
    method:'post',
    data:{
      token:token
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div>
      <Upload {...props}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
    </div>
  );
};

export default BasePage