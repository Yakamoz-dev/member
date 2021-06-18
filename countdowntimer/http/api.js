import axios from 'axios'
import stringSplice from '../utils/index'



const putLiquidApi = (type,data) => {
  axios({
    method:'post',
    url:`/api?use=themes/123092992192/assets.json&type=${type}`,
    data:data
  }).then((res) => {
        console.log("putLiquidApi putLiquidApi:", res);
        return res
    },
   (error) => {
        console.log("get response failed!");
    })
}

const putAssets = (id) => {
  axios({
    method:'post',
    url:`/api?use=themes/${id}/assets.json&type=1`,
  }).then((res) => {
        console.log("putLiquidApi putLiquidApi:", res);
        return res
    },
   (error) => {
        console.log("get response failed!");
    })
}



const getAssetsApi = (id) => {
  const url = `/api?use=themes/${id}/assets.json?asset[key]=layout/theme.liquid`
  axios({
    method:'get',
    url:url
  }).then((res) => {
    console.log(res.data.asset.value)
    var str = stringSplice('link',res.data.asset.value)
    console.log('str',str)
    let dataBase = {
      "asset": {
        "key": "layout/theme.liquid",
        "value": str
      }
    }
    putLiquidApi(2,dataBase)
    return str
    },
   (error) => {
        console.log("get response failed!");
    })
}

const setScriptApi = (id,page,config) => {
  const url = `/api?use=themes/${id}/assets.json?asset[key]=${page}`
  axios({
    method:'get',
    url:url
  }).then((res) => {
    const strValue = res.data.asset.value
    var pos = strValue.indexOf(`id="countdown"`);
    
    var restt = ''
    if(pos !== -1){
      var end = strValue.indexOf(`</script>`, pos);
      var rest = strValue.slice(pos-10,end+9);
     
      restt = strValue.split(rest).join('')
    }
    var strBase = restt.length>0 ? restt:strValue
   
    var str = stringSplice('script',strBase,config)
    console.log("str",str)
    let dataBase = {
      "asset": {
        "key": page,
        "value": str
      }
    }
    putLiquidApi(2,dataBase)
    return str
    },
   (error) => {
        console.log("get response failed!");
    })
}


const removeScriptIndexApi = (id) => {
  const url = `/api?use=themes/${id}/assets.json?asset[key]=templates/index.liquid`
  axios({
    method:'get',
    url:url
  }).then((res) => {
    var strValue = res.data.asset.value
    var pos = strValue.indexOf(`id="countdown"`);
    var restt = ''
      var end = strValue.indexOf(`</script>`, pos);
      var rest = strValue.slice(0,end+9);
      restt = strValue.split(rest).join('')
    
    let dataBase = {
      "asset": {
        "key": 'templates/index.liquid',
        "value": restt
      }
    }
      putLiquidApi(2,dataBase)
    },
   (error) => {
        console.log("get response failed!");
    })
}
const removeScriptThemeApi = (id) => {
  const url = `/api?use=themes/${id}/assets.json?asset[key]=layout/theme.liquid`
  axios({
    method:'get',
    url:url
  }).then((res) => {
    const strValue = res.data.asset.value
    var pos = strValue.indexOf(`<script id="countdown">`);
    
    var restt = ''
    if(pos !== -1){
      var end = strValue.indexOf(`</script>`, pos);
      var rest = strValue.slice(pos,end+9);
     console.log('rest',rest)
      restt = strValue.split(rest).join('')
    }
    var strBase = restt.length>0 ? restt:strValue
    let dataBase = {
      "asset": {
        "key": 'layout/theme.liquid',
        "value": strBase
      }
    }
    putLiquidApi(2,dataBase)
    
    return true
    },
   (error) => {
        console.log("get response failed!");
    })
}







// // const putLiquidApi = () => {
// //   axios({
// //       method:'post',
// //       url:`/api?use=themes/123092992192/assets.json&type=1`
// //     }).then((res) => {
// //           console.log("putLiquidApi putLiquidApi:", res);
// //           return res
// //       },
// //      (error) => {
// //           console.log("get response failed!");
// //       })
// // }

// function postLiquid(url,data){
//   return new Promise((resolve, reject) => {
//     http('post',url,data).then(res => {
//           // console.log(data)
//           resolve (res);
      
//     },error => {
//       console.log("网络异常~",error);
//       reject(error)
//     })
// }) 
// }

// //获取主题列表
// function getTheme(data){
//   return new Promise((resolve, reject) => {
//       http('get','/api?use=themes.json',data).then(res => {
//             // console.log(data)
//             resolve (res);
        
//       },error => {
//         console.log("网络异常~",error);
//         reject(error)
//       })
//   }) 
// }

// //获取asset列表
// function getAssets(url){
//   return new Promise((resolve, reject) => {
//       http('get',url).then(res => {
//             // console.log(data)
//             resolve (res);
        
//       },error => {
//         console.log("网络异常~",error);
//         reject(error)
//       })
//   }) 
// }


// // // function getLiquid(){
// // //     const url = `${baseurl}/api?use=themes/122251182272/assets.json?asset[key]=layout/theme.liquid`;
// // //   console.log(url)
// // //     fetch(url, { method: 'GET' })
// // //     .then(res => res.json())
// // //       .catch((err) => {
// // //         console.log(err);
// // //         return 'oops';
// // //       })
// // //       .then(response => {
// // //         console.log('Success:', response)
// // //         return response
// // //       });
// // //   };


// //   // function postPage(body){
// //   //   const url = `${baseurl}/api?use=themes/122251182272/assets.json`;
// //   // console.log(url)
// //   //   fetch(url, { 
// //   //     method: 'POST',
// //   //     body: body,
// //   //    })
// //   //   .then(res => res.json())
// //   //     .catch((err) => {
// //   //       console.log(err);
// //   //       return 'oops';
// //   //     })
// //   //     .then(response => console.log('Success:', response));
// //   //   return 'none';
// //   // };



export {putLiquidApi,getAssetsApi,setScriptApi,putAssets,removeScriptIndexApi,removeScriptThemeApi} ;





