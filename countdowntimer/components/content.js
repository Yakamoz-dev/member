import React, { useState } from 'react';
import { Card } from '@shopify/polaris';
import styles from '../styles/common.module.css'
import { Form, Input, Button, Radio, Select, Space } from 'antd';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeName, changeBeforTimer, changeActionUrl, changeAfterTimer, changeButtonValue, changeIconActive, changeButionActive, changeTimerAdr } from '../store/count/action'

const { Option } = Select

function Content({ total, changeName, changeBeforTimer, changeActionUrl, changeAfterTimer, changeButtonValue, changeIconActive, changeButionActive, changeTimerAdr }) {
    
    
    const { name, butionActive, beforTimer, afterTimer, buttonValue, actionUrl, iconActive, timerAdr } = total
    
    const [select1,setselect1] = useState('b3')
    // console.log(name)
    // console.log(sname)

    const handleName = e => { changeName(e.target.value) };
    const handleBeforTimer = e => { changeBeforTimer(e.target.value) };
    const handleAfterTimer = e => { changeAfterTimer(e.target.value) };
    const handleButtonValue = e => { changeButtonValue(e.target.value) };
    const handleActionUrl = e => { changeActionUrl(e.target.value) };
    const handleButionActive = e =>{
        changeButionActive(e)
        setselect1(e)
    }
    const handleIconActive = e =>{
        if(e=='a1'){changeIconActive("block")}else{changeIconActive("none")}
    }
    const handleAdr = e=>{changeTimerAdr(e.target.value)}


    return (
        <Card title="内容配置" sectioned>
            <Form
                layout="vertical"
            >
                <Form.Item label="倒计时名称">
                    <Input placeholder="input placeholder" id="name" value={name} onChange={handleName} />
                    <p>供您自己的内部参考。只有你能看到</p>
                </Form.Item>
                <Form.Item label="计时器前的信息">
                    <Input placeholder="input placeholder" value={beforTimer} onChange={handleBeforTimer} />
                </Form.Item>
                <Form.Item label="计时器后的信息">
                    <Input placeholder="input placeholder" id="beforeTimer" value={afterTimer} onChange={handleAfterTimer} />
                </Form.Item>
                <Form.Item label="计时器栏点击选项">
                    <Select defaultValue={select1}  onChange={handleButionActive}>
                        <Option value="b1">添加点击按钮</Option>
                        <Option value="b2">整体可点击</Option>
                        <Option value="b3">不可点击</Option>
                    </Select>
                    {select1 == 'b1' ? <p>倒计时栏上会显示一个可点击的按钮</p> : ''}
                    {select1 == 'b2' ? <p>整个倒计时栏是可点击的</p> : ''}
                    {select1 == 'b3' ? <p>不可点击无跳转效果</p> : ''}
                </Form.Item>
                {select1 == 'b1'&&<Form.Item label="按钮文字">
                    <Input placeholder="input placeholder" value={buttonValue} onChange={handleButtonValue}  />
                </Form.Item>}
                {(select1 == 'b2'||select1 == 'b1')&&<Form.Item label="跳转连接">
                    <Input placeholder="input placeholder" value={actionUrl} onChange={handleActionUrl} />
                </Form.Item>}
                <Form.Item label="是否需要关闭按钮">
                    <Select onChange={handleIconActive}>
                        <Option value="a1">是</Option>
                        <Option value="a2">否</Option>
                    </Select>
                    <p>在倒计时栏上放置一个“x”按钮，以便用户可以手动隐藏倒计时栏</p>
                </Form.Item>
                <Form.Item label="倒计时栏显示位置">
                    <Radio.Group >
                        <Space direction="vertical" onChange={handleAdr}>
                            <Radio value={'t'}>页面顶部</Radio>
                            <Radio value={'b'}>页面底部</Radio>
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
        changeAfterTimer: bindActionCreators(changeAfterTimer, dispatch),
        changeName: bindActionCreators(changeName, dispatch),
        changeBeforTimer: bindActionCreators(changeBeforTimer, dispatch),
        changeButtonValue: bindActionCreators(changeButtonValue, dispatch),
        changeActionUrl: bindActionCreators(changeActionUrl, dispatch),
        changeIconActive: bindActionCreators(changeIconActive, dispatch),
        changeButionActive: bindActionCreators(changeButionActive, dispatch),
        changeTimerAdr: bindActionCreators(changeTimerAdr, dispatch),
    }
}

//   const mapDispatchToProps = { } = (dispatch) => {
//     return bindActionCreators({
//         changeName,
//         changeBeforTimer
//     }, dispatch);
//   }


export default connect(mapStateToProps, mapDispatchToProps)(Content)
