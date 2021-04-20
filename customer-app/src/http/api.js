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

function posUserApi(data){
  return new Promise((resolve, reject) => {
      http('post','/me',data).then(res => {
       
            resolve (res);
        
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
  }) 
}

export {
  postRegisterApi,postLoginApi,posUserApi
}