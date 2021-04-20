import { Layout } from 'antd';

import MenuExport from './Sider';



const { Header, Footer, Sider, Content } = Layout;

const LayoutEx = ({children})=> {
    return (
        <>
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible >
                <MenuExport  />
            </Sider>
            <Layout>
                <Header><div style={{color:'red'}}>Header</div></Header>
                <Content>{children}</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
        </>
    )
}

export default LayoutEx
