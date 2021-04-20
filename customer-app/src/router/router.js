import React, { Component } from 'react'
import {Redirect,Route} from "react-router-dom"
import cookie from 'react-cookies';

export default class MyRote extends Component {
    render() {
        let token = cookie.load('api_token')
        console.log('~~~~~~~~~~',token)
        return (
            <div>
                {
                   token ? <Route {...this.props}></Route>:
                   <Redirect to="/login"></Redirect>
                }
            </div>
        )
    }
}