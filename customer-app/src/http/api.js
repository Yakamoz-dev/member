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

function postEmailApi(data){
  return new Promise((resolve, reject) => {
      http('post','/password/email',data).then(res => {
       
            resolve (res);
        
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
  }) 
}

function postPassword(data){
  return new Promise((resolve, reject) => {
      http('post','/password/reset',data).then(res => {
       
            resolve (res);
        
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
  }) 
}
//获取礼品列表
function getGifList(params){
  console.log(params)
  return new Promise((resolve, reject) => {
      http('get','/getgiftslist',params).then(res => {
       
            resolve (res);
        
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
  }) 
}
//获取积分记录
function getPointsList(data){
  return new Promise((resolve, reject) => {
      http('get','/getpointslist',data).then(res => {
       
            resolve (res);
        
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
  }) 
}
//生成分享连接
function getMakeUrl(data){
  return new Promise((resolve, reject) => {
      http('get','/makeurl',data).then(res => {
       
            resolve (res);
        
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
  }) 
}
//增加积分
function getAddPoints(data){
  return new Promise((resolve, reject) => {
      http('get','/addpoints',data).then(res => {
       
            resolve (res);
        
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
  }) 
}

//兑换礼品 postRedeemgift
function postRedeemgift(data){
  return new Promise((resolve, reject) => {
      http('post','/redeemgift',data).then(res => {
       
            resolve (res);
        
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
  }) 
}
//获取个人地址列表 getAddresses
function getAddresses(data){
  return new Promise((resolve, reject) => {
      http('get','/getaddresses',data).then(res => {
       
            resolve (res);
        
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
  }) 
}
//新增、编辑地址信息 editaddress
function posEditaddress(data){
  return new Promise((resolve, reject) => {
      http('post','/editaddress',data).then(res => {
       
            resolve (res);
        
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
  }) 
}


//根据地址ID获取地址详细信息 getaddress
function getAddress(data){
  return new Promise((resolve, reject) => {
      http('get','/getaddress',data).then(res => {
       
            resolve (res);
        
      },error => {
        console.log("网络异常~",error);
        reject(error)
      })
  }) 
}

export {
  postRegisterApi,postLoginApi,posUserApi,postEmailApi,postPassword,
  getGifList,getPointsList,getMakeUrl,getAddPoints,
  getAddress,posEditaddress,getAddresses,postRedeemgift
}