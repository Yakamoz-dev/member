import Link from 'next/link'
import { useRouter } from 'next/router'

import LayoutEx from '../components/Layout'
import { Spin } from 'antd';

import cookie from 'react-cookies'
import { useEffect } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import dynamic from 'next/dynamic'
const BasePage = dynamic(() => import('../components/BasePage'))


import Saber from '../components/Saber'



function ToLogin(){
  const router = useRouter()
  useEffect(()=>{
    router.push('/login')
  },[])
  return (
    <></>
  )
}

function ChooseItem({item}){
  let Cmp
  if (item == '1') {
    Cmp =(<div><Link href="/home" >123</Link><Saber /></div>);
  } else {
    Cmp = <BasePage />;
  }

  return Cmp

}

const Home=({defKey})=>{
  const token = cookie.load('token')
  console.log(token)
  return (
    <>
    {
      <LayoutEx>
                  <ChooseItem item={defKey} />
              </LayoutEx>
      
    }
    </>
  )
}

const mapStateToProps = (state) => ({
  defKey: state.sider.key,
})

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCount: bindActionCreators(addCount, dispatch),
//   }
// }

export default connect(mapStateToProps)(Home)