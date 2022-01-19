import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from "react-bootstrap";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import "./ProfileScreen.css";
import ProfileService from '../Service/ProfileService'
import * as actions from '../Redux/Action/ProfileAction'
import User from '../Redux/User'

var mapStateToProps = state => {
  return {
    users: state.users
  }
}

class Profile extends React.Component
{
      constructor(props) {
        super(props)
        console.log(this.props.data)
        this.state={
          userId:this.props.userId,
          name:this.props.name,
          phone:this.props.phone,
          address:this.props.address,
          dob:this.props.dob
      }
    }

    updateProfile = (event) => {
        var formData=new FormData();
        var userId=""
        formData.append('userId',this.userId.value)
        formData.append('name',this.name.value)
        formData.append('phone',this.phone.value)
        formData.append('address',this.address.value)
        formData.append('dob',this.dob.value)

        ProductService.uploadProfile(formData)
        .then(response => response.json())
        .then(data => {
          userId=data.data.userId
          /* name=data.data.name
          phone=data.data.phone
          address=data.data.address
          dob=data.data.dob */
        if (data.statusCode == 200) {
          User.dispatch({
              ...actions.ACTION_UPDATE_USER,payload:{
                userId
              }
          })
        }
      })
        
        event.preventDefault();
    }

      render(){
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
            <label class="col-sm-2 control-label"></label>
            <div class="col-sm-10">
              <input type="hidden"  class="form-control" ref={u => this.userId = u} value={this.props.data.id} defaultValue={this.state.userId} readOnly></input>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">User name</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" ref={u => this.name = u} value={this.props.data.name} defaultValue={this.state.name}></input>
            </div>
          </div>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">
        <h4 class="panel-title">Contact info</h4>
        </div>
        <div class="panel-body">
          
          <div class="form-group">
            <label class="col-sm-2 control-label">Mobile number</label>
            <div class="col-sm-10">
              <input type="tel" class="form-control" ref={u => this.phone = u} value={this.props.data.phone} defaultValue={this.state.phone}></input>
            </div>
          </div>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">
        <h4 class="panel-title">Security</h4>
        </div>
        <div class="panel-body">
          <div class="form-group">
            <label class="col-sm-2 control-label">Current password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control"></input>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">New password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control"></input>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-10 col-sm-offset-2">
              <button type="submit" class="btn btn-primary">Submit</button>
              <button type="reset" class="btn btn-default">Cancel</button>
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