import React from 'react'
import './Product.css'
import { connect } from 'react-redux'
import Store from '../Redux/Store'
import * as actions from '../Redux/Action/ProductAction'
import ProductService from '../Service/ProductService'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import ViewProducts from '../ViewProducts/ViewProducts';
import Navbar from '../components/Navbar'

var mapStateToProps = state => {
  return {
    token:state.user.token,
    products: state.products,
    categories: state.categories
  }
}

class Product extends React.Component {



  addProduct = (event) => {
    var ob = {
      productName: this.productName.value,
      productDescription: this.productDescription.value,
      vendorPrice: this.vendorPrice.value,
      productStock: this.productStock.value,
      categoryId: this.productCategory.value,
      vendorId: this.props.token
    }

    ProductService.addProduct(ob)
      .then(response => response.json())
      .then(data => {
        if (data.statusCode == 200) {
          Store.dispatch({
            ...actions.ACTION_ADD_PRODUCTS, payload: {
              product: data.data
            }
          })
        }
      })


    event.preventDefault();
  }

  render() {
    return <>
    <Navbar />
    {this.props.token!=""?<>
      <form onSubmit={this.addProduct}>
        <div className="form-group">
          <label >Product Name</label>
          <input type="text" className="form-control" ref={c => this.productName = c} id="exampleInputEmail1" placeholder="Enter Product Name" />

        </div>
        <div className="form-group">
          <label >Product Description</label>
          <input type="text" className="form-control" ref={c => this.productDescription = c} id="exampleInputPassword1" placeholder="Enter Product Description" />
        </div>
        <div className="form-group">
          <label >Product Price</label>
          <input type="number" className="form-control" ref={c => this.vendorPrice = c} id="exampleInputPassword1" placeholder="Enter Product Price" />
        </div>
        <div className="form-group">
          <label >Product Quantity</label>
          <input type="number" className="form-control" ref={c => this.productStock = c} min="1" id="exampleInputPassword1" placeholder="Enter Product Quantity" />
        </div>
        <div className="form-group">
          <label >Product Category</label>
          <select name="cars" id="cars" ref={c=>this.productCategory=c}>
            {this.props.categories.map((cat) => {
            return  <option value={cat.categoryId}>{cat.productCategory}</option>
          })}
          </select>
          
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <table className="table" >
        <thead>
          <tr>
            <th scope="col">Sl.no</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Description</th>
            <th scope="col">Product Price</th>
            <th scope="col">Measurement Type</th>
            <th scope="col">Product Quantity</th>
            <th scope="col">Images</th>
            <th scope="col">status</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.filter(p => p.vendorId==this.props.token).map((product, index) => {
            return <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{product.productName}</td>
              <td>{product.productDescription}</td>
              <td>{product.vendorPrice}</td>
              {this.props.categories.map((category)=>{return category.categoryId==product.categoryId? <td>{category.productMeasurement}</td>:""})}
              <td>{product.productStock}</td>

              <td><ViewProducts key={index} data={{ image: product.productImages, id: product.productId }} /></td>
              <td>{product.productStatus ? <>
                <button className="btn btn-success">Active</button>
              </> : <>
                <button className="btn btn-warning">De-Active</button>
              </>}
              </td>

            </tr>


          })}
        </tbody>
      </table>

    </>
    :<h1>please login</h1>}
    </>
  }

}

export default connect(mapStateToProps)(Product);