import React from 'react';
import {Card} from '@shopify/polaris';
import { Table, Tag, Space,Button } from 'antd';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const List =({config})=> {
  const pagination = false
  const columns = [
    {
      title: '项目名称 ',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{config.name}</a>,
    },
    {
      title: '展示位置',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '展示页面',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '状态',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = (tag = '运行中' )? 'geekblue' : 'black';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary">编辑</Button>
          <Button danger>清除</Button>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: '页面底部',
      address: '任意页面',
      tags: ['运行中'],
    }
  ];
  return (
   
      <Card>
        <div style={{width:"100%",display:"flex",justifyContent: "space-between",padding:" 10px"}}>
          <div>倒计时列表</div>
          <Button >创建</Button>
        </div>
        <Table columns={columns} dataSource={data} pagination={pagination} />
      </Card>
    
  );
}

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


export default connect(mapStateToProps)(List)
