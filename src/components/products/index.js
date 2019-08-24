import React from 'react';
import './index.scss';
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
      .then(rsponse=>this.GetProductSuccess())
      .catch(error=>this.GetProductFail())
      )
    }

    GetProductSuccess(response){
      this.setState({
        getProductWait: false,
        getProductSuccess: true,
        getProductFail: false,
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
        return <h1 className="products-success">{"OK"}</h1>
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