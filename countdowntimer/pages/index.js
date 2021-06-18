import { Heading, Page ,PageActions} from "@shopify/polaris";
import { Button } from "antd";

import dynamic from 'next/dynamic'
const Empty = dynamic(() => import('../components/empty'))
const List = dynamic(() => import('../components/list'))
const Content = dynamic(() => import('../components/content'))
const Timer = dynamic(() => import('../components/timer'))
const StyleConfig = dynamic(() => import('../components/styleConfig'))


import {useEffect,useState} from 'react'


import {putLiquidApi,getAssetsApi,setScriptApi,removeScriptThemeApi,removeScriptIndexApi} from '../http/api'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'











const Index = ({config}) => {
  const remove = async(id)=>{
    var a = await removeScriptThemeApi(id)
    // var b = await removeScriptIndexApi(id)
    // console.log(a,b)
  }

  const page = config.pageAdr == 'ANY' ? 'layout/theme.liquid':'templates/index.liquid'


  return (


  <Page>
    {/* <div onClick ={()=>{remove(config.id)}}>test</div> */}
    <Heading element="h1">欢迎使用倒计时插件 🎉</Heading>
    
    {!config.id ? <Empty /> : null}
    {/* {config.id ? <List /> : null} */}
    {config.id ?  <Content /> : null}
    {config.id ? <Timer /> : null}
    {config.id ? <StyleConfig /> : null}
    <div style={{margingBottom:'50px'}}>
      {config.pageAdr ? <Button  onClick={()=>{setScriptApi(config.id,page,config)}}>保存</Button> : null}
    </div>
    
    
  </Page>
  )
    };

    
    // export async function getStaticProps() {
      
    //   const themeList= await getTheme()
    //   const list = themeList.themes  
    //   const map1 = list.filter(v => {
    //     return v.role == "main"
    //   });
    //   const res = await putLiquidApi(map1[0].id)
    //   console.log(res)
    //   // const posts = await res.json()
    //   return {
    //     props: {id:map1[0].id},
    //   };
    // }
    
    const mapStateToProps = (state) => ({
      config: state.count
  
  })
  
  // const mapDispatchToProps = (dispatch) => {
  //     return {
  //         changeAfterTimer: bindActionCreators(changeAfterTimer, dispatch),
  //         changeName: bindActionCreators(changeName, dispatch),
  //         changeBeforTimer: bindActionCreators(changeBeforTimer, dispatch),
  //         changeButtonValue: bindActionCreators(changeButtonValue, dispatch),
  //         changeActionUrl: bindActionCreators(changeActionUrl, dispatch),
  //         changeIconActive: bindActionCreators(changeIconActive, dispatch),
  //         changeButionActive: bindActionCreators(changeButionActive, dispatch),
  //         changeTimerAdr: bindActionCreators(changeTimerAdr, dispatch),
  //     }
  // }
  
  
  export default connect(mapStateToProps)(Index)
