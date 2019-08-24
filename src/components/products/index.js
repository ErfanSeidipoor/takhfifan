import React from 'react';
import './index.scss';
import Product from '../product'
import Actions from '../../modules/action'
import APIs from '../../utils/api'
import { connect } from 'react-redux'


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

    // methods 
    addToCart(id) {
      this.props.AddToCart(id);
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

      this.setState({
        getProductWait: false,
        getProductSuccess: true,
        getProductFail: false,
      },()=>this.props.GetProduct(response.data.data.items))
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
            this.props.products.map( item=>
              <div className="products-success-product" key={item.id}>
                <Product item={item} addToCart={()=>this.addToCart(item.id)}/>
              </div>)
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


const mapDispatchToProps = dispatch => ({
  GetProduct: (products)=>dispatch(Actions.GetProduct(products)),
  RemoveFromCart: (id)=>dispatch(Actions.RemoveFromCart(id)),
  AddToCart: (id)=>dispatch(Actions.AddToCart(id)),
})


const mapStateToProps = state => ({
    products: state.products,
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Products);
