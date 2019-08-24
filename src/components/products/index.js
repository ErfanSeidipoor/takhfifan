import React from 'react';
import './index.scss';
import Product from '../product'
import APIs from '../../utils/api'


 class Products extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        getProductWait: false,
        getProductSuccess: false,
        getProductFail: false,
        products:[],
      }
    }

    componentDidMount() {
      this.GetProduct()
    }

    GetProduct() {
      this.setState({
      getProductWait: true,
      getProductSuccess: false,
      getProductFail: false,
      products:[],
      },()=>APIs
      .getProducts()
      .then(response=>this.GetProductSuccess(response))
      .catch(error=>this.GetProductFail())
      )
    }

    GetProductSuccess(response){
      console.log(response.data.data.items);
      
      this.setState({
        getProductWait: false,
        getProductSuccess: true,
        getProductFail: false,
        products: response.data.data.items,
      })
    }

    GetProductFail(error) {
      this.setState({
        getProductWait: false,
        getProductSuccess: false,
        getProductFail: true,
        products:[],
      })
    }

    rednerSuccessState() {
      if(this.state.getProductSuccess)
        return (<div className="products-success">
          {
            this.state.products.map( item=> <div className="products-success-product"><Product item={item}/></div>)
          }
        </div>)
    }

    renderWaitState() {
      if(this.state.getProductWait)
        return <h1 className="products-wait">{"PLEASE WAIT"}</h1>
    }

    renderFailState() {
      if(this.state.getProductFail)
        return <h1 className="products-fail">{"GETTING DATA IS FAILED"}</h1>
    }
    render() {
      return (
        <div className="products">
          {this.rednerSuccessState()}
          {this.renderWaitState()}
          {this.renderFailState()}
        </div>
      );
    }
 }

export default Products;