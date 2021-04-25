import React from 'react'
import cookie from 'react-cookies'
import { BrowserRouter as Router,Redirect, Route,  Switch } from 'react-router-dom';
import About from './page/about';
import Login from './page/login';
import Home from './page/home';
import Register from './page/register';
import Other from './page/other';

import MyRote from './router/router'

import { Provider } from 'react-redux'
import store from './store/index'


import './App.css'

export default class App extends React.Component {
    constructor() {
      super();
    }
  
  
    render() {
      return (
        
       <Provider store={store}>

       
        <Router>
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/user">
            <User />
          </Route> */}
          
          <MyRote path="/about" exact component={About}></MyRote>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/other" exact component={Other}></Route>
          <Route path="/" exact component={Home}></Route>
          
          
          
          
        </Switch>
    </Router>
     </Provider>
      );
    }
  }