import React,{useContext} from 'react';
import { connect } from 'react-redux'
import { Context} from '@shopify/app-bridge-react';
import {Button,Modal} from '@shopify/app-bridge/actions';


function MyComponent() {
    const app = useContext(Context);
    const modalOptions = {
        title: 'My Modal',
        message: 'Hello world!',
      };
      
      const myModal = Modal.create(app, modalOptions);
    //   myModal.dispatch(Modal.Action.OPEN);

  };


const Bridge=()=>{
    const app = useContext(Context);
    const modalOptions = {
        title: 'My Modal',
        message: 'Hello world!',
      };
      
      const myModal = Modal.create(app, modalOptions);
    return (
    //   <Context.Consumer>
    //   {app => {

        <div onClick={()=>{myModal.dispatch(Modal.Action.OPEN);}}>Hello world223232!</div>
    //   }}
    // </Context.Consumer>
    
    )
  }

  const mapStateToProps = (state) => ({
    defKey: state.sider.key,
  })
  
  export default connect(mapStateToProps)(Bridge)