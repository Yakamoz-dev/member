
import '../styles/login.css';
import Forgot from '../components/forgot'
import Reset from '../components/reset'


import store from '../store'
import { connect} from 'react-redux'
import {changeStatus} from '../store/actionCreater'
import { Button } from 'antd';


const Other = ({state}) => {
  
// const ChangeHandle = () => {
//   const action=changeStatus(2);
//   store.dispatch(action);
// }

  return (
    <>
        {
            (state === 1)?<Forgot />:<Reset />
        }
    </>
  );

};


const mapStateToProps =(state)=>{
  return {
      state:state.status
  }
}


export default connect(mapStateToProps)(Other);//和store做连接

