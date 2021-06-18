import React from 'react';
import {Card} from '@shopify/polaris';
import styles from '../styles/common.module.css'
import { Button } from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { changeId } from '../store/count/action'
import {putLiquidApi,getAssetsApi,putAssets,setScriptApi} from '../http/api'

function Empty({config,changeId}) {
    console.log("config",config)
    const handleThemeList = ()=>{
      const url = '/api?use=themes.json'
      axios({
        method:'get',
        url:url
      }).then((res) => {
          const list = res.data.themes  
          const map1 = list.filter(v => {
            return v.role == "main"
          });
          changeId(map1[0].id)
          putAssets(map1[0].id)
          getAssetsApi(map1[0].id)
        },
       (error) => {
            console.log("get response failed!");
        })
      }
      
    return (
      <Card title="Countdown Timer Bar"  sectioned>
          <p className={styles.textcenter}>你可以通过单击下面的按钮来创建倒计时器</p>
          <div  className={styles.buttonBox}>
            <Button 
              className={styles.antbtncj} 
              type="primary" 
              size="large" 
              shape="round"
              onClick={handleThemeList}
            >新建</Button>
          </div>
      </Card>
    );
  
}
const mapStateToProps = (state) => ({
  config: state.count

})

const mapDispatchToProps = (dispatch) => {
    return {
        changeId: bindActionCreators(changeId, dispatch),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Empty)
