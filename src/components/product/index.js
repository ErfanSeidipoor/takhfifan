import React from 'react';
import './index.scss';


 class Product extends React.Component {
    // constructor(props) {
    //   super(props)
    // }
    render() {
      return (
        <div className="product">
            <div className="product-id">id: {this.props.item.id}</div>
            <div className="product-title">title: {this.props.item.title}</div>
            <div className="product-soldCount">soldCount: {this.props.item.soldCount}</div>
            <div className="product-quantity">quantity: {this.props.item.quantity}</div>
            <div className="product-desc">desc: {this.props.item.desc}</div>
        </div>
      );
    }
 }

export default Product;