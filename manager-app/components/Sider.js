import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { chooseSider } from '../store/sider/action'


const { SubMenu } = Menu;



const MenuExport = ({ defkey,chooseSider})=>{
  console.log(defkey)
  const handleClick = e => {
    console.log('click ', e);
    console.log(chooseSider(e.key))
  };
    return (
        <Menu
        onClick={handleClick}
        style={{ height: '100vh' }}
        defaultSelectedKeys={defkey}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">礼品卡</Menu.Item>
            <Menu.Item key="4">折扣码</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    )
}

const mapStateToProps = (state) => ({
  defkey: state.sider.key,
})

const mapDispatchToProps = (dispatch) => {
  return {
    chooseSider: bindActionCreators(chooseSider, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuExport)
// export default MenuExport
