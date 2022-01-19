import React, { useState, useEffect } from 'react'
//import { Form, Button, Row, Col } from "react-bootstrap";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Routes, Route, Navigate } from 'react-router-dom'
import "./Profile.css";
//import ProfileService from '../Service/ProfileService'
//import * as actions from '../Redux/Action/ProfileAction'
//import User from '../Redux/User'
import store from '../Redux/Store'
import UserService from '../Service/UserService'
import {ACTION_USER_UPDATE_TOKEN} from '../Redux/Action/UserAction'
import { ACTION_USER_LOGOUT} from '../Redux/Action/UserAction'

var mapStateToProps = state => {
  return {
    user: state.user
  }
}

class Profile extends React.Component
{
      constructor() {
        super()
        //console.log(this.props.data)
         this.state={
          /* name:this.props.name,
          phone:this.props.phone,
          address:this.props.address
      }  */
      user:{name:'',phone:'',address:'',email:''}
    }
  }

    componentDidUpdate() {
        this.name.value=this.state.user.name
        this.phone.value=this.state.user.phone
        this.address.value=this.state.user.address
        
    }

    /* componentDidMount() {
        UserService.getUser(this.props.user.token).then(response => response.json()).then(data=> {
            if(data.status){
                store.dispatch({
                    ...ACTION_USER_UPDATE_TOKEN,
                    payload:{token:data.token}
                })
                this.setState({user:data.user})
            }
            else{
                if(data.code==401)
                    alert("session lost")
                    store.dispatch({...ACTION_USER_LOGOUT})
            }
        });
    }
 */
    updateProfile = (event) => {
        var ob = {
            name:this.name.value,
            phone:this.phone.value,
            address:this.address.value
        }
        UserService.updateProfile(ob,this.props.user.token).then(response => response.json()).then(data=> {
            console.log(data)
        });
        event.preventDefault()
    }


      render()
      {
          if(this.props.user.loginstatus==false)
          {
              return<Navigate to="/"></Navigate>
          }
          return <>
<div class="container bootstrap snippets bootdeys">
<div class="row">
  <div class="col-xs-12 col-sm-9">
    <form class="form-horizontal" onSubmit={this.updateProfile}>

    <div class="panel panel-default">

        <div class="panel-heading">
        <h4 class="panel-title">User info</h4>
        </div>

        <div class="panel-body">

          <div class="form-group">
            <label class="col-sm-2 control-label">User Name</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" ref={c => this.name = c}></input>
            </div>
          </div>

          <div class="form-group">
            <label class="col-sm-2 control-label">Mobile number</label>
            <div class="col-sm-10">
              <input type="tel" class="form-control" ref={c => this.phone = c}></input>
            </div>
          </div>

          <div class="form-group">
            <label class="col-sm-2 control-label">Address</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" ref={c => this.address = c}></input>
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-10 col-sm-offset-2">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>

        </div>
      </div>
    
    </form>
  </div>
</div>
</div>
          </>
    
}
}
export default connect(mapStateToProps)(Profile);