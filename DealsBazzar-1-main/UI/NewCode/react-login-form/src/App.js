import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

import Dashboard from "./dashboard/Dashboard";
import Product from "./ProductComponent/Product";
import MyBid from "./BidComponent/MyBid";
import Store from "./Redux/Store";
import * as actions from "./Redux/Action/ProductAction";
import ProductService from "./Service/ProductService";
import ViewProducts from "./ViewProducts/ViewProducts";
import SignInForm from "./components/pages/SignInForm";

import SignUpForm from "./components/pages/SignUpForm";

import Profile from "./ProfileComponent/Profile";

export default class App extends React.Component {

  render() {
    return (
      <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />

      {/*   <Route path="/home" element={<Home />} /> */}
        <Route path="/myproducts" element={<Product />} />
        <Route path="/mybid" element={<MyBid />} />
        <Route path="/viewproducts" element={<ViewProducts />} />
        {/*     <Route path='/Contact' element={<Contact/>} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myprofile" element={<Profile />} />
      </Routes>

    );
  }
}
