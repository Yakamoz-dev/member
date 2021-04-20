import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'


import { wrapper } from '../store/store'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import cookie from 'react-cookies'

const token = cookie.load('api_token')
const MyApp = ({ Component, pageProps }) => {
  const router  = useRouter()
  // useEffect(() => {
  //   const handleRouteChange = (url, { shallow }) => {
  //     if(!token && url !== '/login'){
  //       router.replace('/login')
  //     }else if(url === 'register'){
  //       router.replace('/register')
  //     }
  //     console.log(
  //       `App is changing to ${url} ${
  //         shallow ? 'with' : 'without'
  //       } shallow routing`
  //     )
  //   }

  //   router.events.on('routeChangeStart', handleRouteChange)

  //   // If the component is unmounted, unsubscribe
  //   // from the event with the `off` method:
  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange)
  //   }
  // }, [])


  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
