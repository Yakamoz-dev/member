import React, {useState} from 'react';
import {Card} from '@shopify/polaris';
import styles from '../styles/common.module.css'
import { Row, Col ,Input} from 'antd';
import SketchExample from './color'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeTimerBarBackground, changeTimerBarFont, changeTimeBackground, changeTimeFont, changeButtonBackground, changeButtonFont} from '../store/count/action'



function StyleConfig({total,changeTimerBarBackground, changeTimerBarFont, changeTimeBackground, changeTimeFont, changeButtonBackground, changeButtonFont}) {

  const { timerBarBackground, timerBarFont, buttonBackground, buttonFont, timeBackground, timeFont } = total

  const handleTimerBarBackground = e => { changeTimerBarBackground(e.target.value) };
  const handletimerBarFont = e => { changeTimerBarFont(e.target.value) };
  const handleTimeBackground = e => { changeTimeBackground(e.target.value) };
  const handleTimeFont = e => { changeTimeFont(e.target.value) };
  const handleButtonBackground = e => { changeButtonBackground(e.target.value) };
  const handleButtonFont = e => { changeButtonFont(e.target.value) };


    return (
      <Card title="样式配置"  sectioned>
          <Row gutter="1">
            <Col  offset="1" >
            <div>倒计时栏背景色</div>
              <div style={{display:'flex'}}>
                {/* <SketchExample /> */}
                <input type="color" className={styles.inputColor} value={timerBarBackground} onChange={handleTimerBarBackground} />
                <Input placeholder="Basic usage" value={timerBarBackground} onChange={handleTimerBarBackground} />
              </div>
              
            </Col>
            <Col  offset="1"> 
            <div>按钮背景色</div>
              <div style={{display:'flex'}}>
              <input type="color" className={styles.inputColor} value={buttonBackground} onChange={handleButtonBackground} />
                <Input placeholder="Basic usage" value={buttonBackground} onChange={handleButtonBackground} />
              </div></Col>
              <Col  offset="1" >
            <div>时刻背景色</div>
              <div style={{display:'flex'}}>
              <input type="color" className={styles.inputColor} value={timeBackground} onChange={handleTimeBackground} />
                <Input placeholder="Basic usage" value={timeBackground} onChange={handleTimeBackground} />
              </div>
              
            </Col>
            <Col  offset="1" >
            <div>倒计时栏字体色</div>
              <div style={{display:'flex'}}>
              <input type="color" className={styles.inputColor} value={timerBarFont} onChange={handletimerBarFont} />
                <Input placeholder="Basic usage" value={timerBarFont} onChange={handletimerBarFont} />
              </div>
              
            </Col>
            <Col  offset="1" >
            <div>按钮字体色</div>
              <div style={{display:'flex'}}>
              <input type="color" className={styles.inputColor} value={buttonFont} onChange={handleButtonFont} />
                <Input placeholder="Basic usage" value={buttonFont} onChange={handleButtonFont} />
              </div>
              
            </Col>
            <Col  offset="1" >
            <div>时刻字体色</div>
              <div style={{display:'flex'}}>
              <input type="color" className={styles.inputColor} value={timeFont} onChange={handleTimeFont} />
                <Input placeholder="Basic usage" value={timeFont} onChange={handleTimeFont} />
              </div>
              
            </Col>
        </Row>
      </Card>
    );
  
}


const mapStateToProps = (state) => ({
  total: state.count

})

const mapDispatchToProps = (dispatch) => {
  return {
    changeTimerBarBackground: bindActionCreators(changeTimerBarBackground, dispatch),
    changeTimerBarFont: bindActionCreators(changeTimerBarFont, dispatch),
    changeTimeBackground: bindActionCreators(changeTimeBackground, dispatch),
    changeTimeFont: bindActionCreators(changeTimeFont, dispatch),
    changeButtonBackground: bindActionCreators(changeButtonBackground, dispatch),
    changeButtonFont: bindActionCreators(changeButtonFont, dispatch)
  }
}

//   const mapDispatchToProps = { } = (dispatch) => {
//     return bindActionCreators({
//         changeName,
//         changeBeforTimer
//     }, dispatch);
//   }


export default connect(mapStateToProps, mapDispatchToProps)(StyleConfig)

