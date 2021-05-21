
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

const GiftList = dynamic(() => import('../components/giftCard/index'))

const Bridge = dynamic(() => import('../components/Bridge'))

const Tagscript = dynamic(() => import('../components/Tagscript'))






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
  switch(item) {
    case '1':
      Cmp =(<div><Link href="/home" >123</Link><Tagscript /></div>);
       break;
    case '2':
      Cmp = <BasePage />;
       break;
    case '3':
      Cmp = (
        <div>
          <GiftList/>
          
        </div>
      );
      break;
    case '5':
      Cmp = (
        <div>
          <Bridge/>
          
        </div>
      );
      break;
    default:
      Cmp =(<div><Link href="/home" >123</Link></div>);
} 
  // if (item == '1') {
  //   Cmp =(<div><Link href="/home" >123</Link><GiftCard /></div>);
  // } else {
  //   Cmp = <BasePage />;
  // }

  return Cmp

}

const Home=({defKey})=>{
  const token = cookie.load('token')
  console.log(token)
  return (
    <>
      <LayoutEx>
          <ChooseItem item={defKey} />
      
          </LayoutEx>
    
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



// import { Heading, Page } from "@shopify/polaris";
// import Link from 'next/link'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { chooseSider } from '../store/sider/action'
// import { useRouter } from 'next/router'
// import {Button} from 'antd'

// const Index = ({defkey,chooseSider}) => {
//   const router = useRouter()
//   console.log(defkey)
//   const handleClick = e => {
//     console.log(chooseSider('8'))
//     router.push('/user')
//   };


//   return(
//   <Page>
//     <Heading>Shopify app with  order🎉</Heading>
//     <Button  onClick={handleClick} >
//       user
//     </Button>
//   </Page>
// )};

// const mapStateToProps = (state) => ({
//   defkey: state.sider.key,
// })

// const mapDispatchToProps = (dispatch) => {
//   return {
//     chooseSider: bindActionCreators(chooseSider, dispatch),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Index)