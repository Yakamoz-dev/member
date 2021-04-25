import http from './httpClient';


/**
 * 获取首页列表
 */
function postLoginApi(data){
  return new Promise((resolve, reject) => {
      http('post','/login',data).then(res => {
        
            resolve (res);
        
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
  }) 
}

function postRegisterApi(data){
  return new Promise((resolve, reject) => {
      http('post','/register',data).then(res => {
        if(res.code == '200'){
            resolve (res);
        }
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
  }) 
}


//上传图片
function postUploadApi(data){
  return new Promise((resolve, reject) => {
      http('post','/upload',data).then(res => {
        
            resolve (res);
        
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
  }) 
}
//获取用户列表
function getUsersApi(data){
  return new Promise((resolve, reject) => {
      http('get','/getusers',data).then(res => {
        
            resolve (res);
        
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
  }) 
}
//获取礼品列表
function getgiftslistApi(data){
  return new Promise((resolve, reject) => {
      http('get','/getgiftslist',data).then(res => {
        
            resolve (res);
        
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
  }) 
}
//获取积分记录
function getpointslistApi(data){
  return new Promise((resolve, reject) => {
      http('get','/getpointslist',data).then(res => {
        
            resolve (res);
        
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
  }) 
}





export {
  postRegisterApi,postLoginApi,
  postUploadApi,getUsersApi,getgiftslistApi,getpointslistApi
}