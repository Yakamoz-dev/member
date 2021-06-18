import React from 'react';
import {Card} from '@shopify/polaris';
import styles from '../styles/common.module.css'
import { Button,Form,DatePicker,Radio,Space } from 'antd';
const { RangePicker } = DatePicker;

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeBaseTime, changePageAdr} from '../store/count/action'


function Timer({total,changeBaseTime, changePageAdr}) {
    const { baseTime,pageAdr } = total
    const handlePage = e=>{changePageAdr(e.target.value)}
    const handleBaseTime = (data,dateString)=>{
         changeBaseTime(dateString)
        console.log(data,dateString)
    }
  
    return (
      <Card title="倒计时配置"  sectioned>
          <Form
           layout="vertical"
          >
            <Form.Item label="开始时间与结束时间">
                <RangePicker showTime  onChange={handleBaseTime} />
                <p>倒计时栏仅在此期间显示</p>
            </Form.Item>
            <Form.Item label="页面定位">
                <Radio.Group value={total.pageAdr}>
                    <Space direction="vertical" onChange={handlePage}>
                        <Radio value={'ANY'}>任意页面</Radio>
                        <Radio value={'ONLY'}>仅首页</Radio>
                    </Space>
                </Radio.Group>
            </Form.Item>
        </Form>
      </Card>
    );
  
}

const mapStateToProps = (state) => ({
    total: state.count

})

const mapDispatchToProps = (dispatch) => {
    return {
        changeBaseTime: bindActionCreators(changeBaseTime, dispatch),
        changePageAdr: bindActionCreators(changePageAdr, dispatch)
    }
}

//   const mapDispatchToProps = { } = (dispatch) => {
//     return bindActionCreators({
//         changeName,
//         changePageAdr
//     }, dispatch);
//   }


export default connect(mapStateToProps, mapDispatchToProps)(Timer)
